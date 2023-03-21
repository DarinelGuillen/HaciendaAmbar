import { useEffect, useContext, useState } from "react";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import IdContex from "../../contexts/IdContex";
import TipoRentaContext from "../../contexts/TipoRentaContext";
import "../../assets/style/moleculescss/TypesRFormExtra.css";
import ButtonStyled from "../atoms/ButtonStyled";
import IMGTESTLOGO from "../../assets/img/LogoColor.png";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
function MyAccountView() {
  const { isTipoRenta, setIsTipoRenta } = useContext(TipoRentaContext);
  const { isIduser, setIsiduser } = useContext(IdContex);
  const [isRentaUser, setIsRentaUser] = useState("");
  const [isExtras, setIsExtras] = useState("");
  const [allRentaIndividuales, setallRentaIndividuales] = useState([]);
  const [seeExtras, setseeExtras] = useState(false);
  const [namesExtras, setnamesExtras] = useState([]);

  const [load, setload] = useState(false);
  // function generatePDF(e, renta) {
  //   e.preventDefault();
  //   const documentDefinition = {
  //     content: [
  //       `Text: ${renta._id}`,

  //     ],
  //   };
  //   pdfMake.createPdf(documentDefinition).download();
  // }
  function generatePDF(e, renta) {
    e.preventDefault();
    let extrasNames = [];
      allRentaIndividuales.forEach((individual) => {
        if (renta.Extras.includes(individual._id)) {
          extrasNames.push(individual.value);
        }
        console.log("none");
      });
      console.log(extrasNames);
    const ejecutarPDF=(renta , extrasNames)=>{
      let paquete=[]
    let url2 = `https://localhost/users/${renta.idUser}`;
    let url = `https://localhost/paquetes/${renta.idPaquete}`;
      fetch(url).then((response)=>response.json()).then((data)=>{
        console.log("🚀 ~ file: MyAccountView.jsx:52 ~ fetch ~ data:", data.nombrePaquete)
        paquete=data
      fetch(url2).then((response)=>response.json()).then((data)=>{
        console.log("🚀 ~ file: MyAccountView.jsx:54 ~ fetch ~ data:", data)


        const documentDefinition = {
      content: [
        { text: 'Título del documento', style: 'header' },
        { text: 'ID de Renta: ', bold: true ,fontSize: 30 },
        { text: renta._id },
        '\n',
        //PAQUETE
        { text: 'ID de Paquete: ', bold: true },
        { text: renta.idPaquete },
        { text: 'Nombre del paquete: ', bold: true },
        { text: paquete.nombrePaquete },
        { text: 'Precio: ', bold: true },
        { text: paquete.precio },
        '\n',
        //USER
        { text: 'ID de Usuario: ', bold: true },
        { text: renta.idUser },
        { text: ' name: ', bold: true },
        { text: data.nombreCompleto },
        { text: 'Contacto: ', bold: true },
        { text: data.correo,   },
        { text: data.numTel     },
        '\n',
        { text: 'Fecha de Inicio: ', bold: true },
        { text: renta.fechaInicio },
        { text: '     Hora de Inicio: ', bold: true },
        { text: renta.horaDeInicio },
        '\n',
        { text: 'Hora de Finalización: ', bold: true },
        { text: renta.horaDeFinalizacion },
        '\n',
        { text: 'Fecha de Reserva: ', bold: true },
        { text: renta.fechaDeReserva },
        '\n',
        { text: 'Extras: ', bold: true },
        { ul: extrasNames },
        '\n',
        { text: 'Estado de la Renta: ', bold: true },
        { text: renta.estadoRenta ? 'Activa' : 'Inactiva' },
        '\n',
        { text: 'Observaciones: ', bold: true },
        { text: renta.observaciones },
        '\n',
        { text: '¿Se ejecutó con éxito la renta?: ', bold: true },
        { text: renta.SeEjecutoConExitoLarenta ? 'Sí' : 'No' },
      ],
      header: {
        text: "Hacienda Hambar",
        style: 'header',
      },
      styles: {
        header: {
          fontSize: 58,
          bold: true,
          margin: [0, 10, 0, 0],
        },
      },

    };
    pdfMake.createPdf(documentDefinition).download('HambarDoc.pdf');
      }).catch((err)=>console.error(err))
      }).catch((err)=>console.error(err))
      console.log("🚀 ~ file: MyAccountView.jsx:51 ~ ejecutarPDF ~ renta.idPaquete:", renta.idPaquete)
    }
    ejecutarPDF(renta,extrasNames);
    
  }
  

  useEffect(() => {
    // setTimeout(() => {
    console.log("isTipoRenta HAS CHANGE AND USEEFFECT ACTIVATE");
    let id = isIduser;
    console.log(
      "🚀 ~ file: MyAccountView.jsx:36 ~ //setTimeout ~ isIduser:",
      isIduser
    );
    let url = `https://localhost/rentasUsuario/${id}/x`;

    console.log("🚀 ~ file: MyAccountView.jsx:39 ~ //setTimeout ~ url:", url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(
          "🚀 ~ file: MyAccountView.jsx:43 ~ .then ~ data:",
          data.rentasUsuario
        );
        setIsRentaUser(data.rentasUsuario);
        setload(true);
        // console.log(data.returnRenta[0].Extras,"_id");
        // setIsExtras(data.returnRenta[0].Extras);
        // console.log("====isExtras", JSON.stringify(isExtras));
      });

    // setTimeout(() => {
    //   console.log(JSON.stringify(isRentaUser), "\nload", load);
    // }, 1000);
    // }, 1000);
  }, []);

  useEffect(() => {
    fetch("https://localhost/rentaIndividuales")
      .then((response) => response.json())
      .then((data) => {
        setallRentaIndividuales(data);
        console.log(data, "allRentaIndividuales");
      });
  }, []);
  return (
    <>
      <div>
        <div class="px-4 py-5 my-5 text-center">
            <img class="d-block mx-auto mb-4" src="src/assets/img/LogoColor.png" alt="" width="72" height="57"/>
            <h1 class="display-5 fw-bold">Hacienda Ambar </h1>
            <div class="col-lg-6 mx-auto">
              <p class="lead mb-4">Se mostrará el link de su carpeta drive posteriormente a su evento donde contendrá los bellos recuerdos del evento.</p>
              <p>"Aquí"</p>
              <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                  {/* Aqui le puedes dar el guncionamiento si lo quieres a los botones */}
                <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
                <button type="button" class="btn btn-outline-secondary btn-lg px-4">Secondary</button>
              </div>
            </div>
          </div>
      <div>
       
          {load &&
            isRentaUser.map((renta) => {
              return (
                <>
                  <div key={renta._id}>
                    <label>renta= {renta._id}</label>
                  </div>
                  <button
                    className="botonCard"
                    onClick={(e) => generatePDF(e, renta)}
                  >
                    generatePDF
                  </button>
                </>
              );
            })}
       
          {load ? (
            <>
              {isRentaUser.returnRenta &&
                isRentaUser.returnRenta.length > 0 && (
                  <>
                    <label>_id={isRentaUser.returnRenta[0]._id}</label>
                    <label>idUser={isRentaUser.returnRenta[0].idUser}</label>
                    <label>
                      fechaInicio={isRentaUser.returnRenta[0].fechaInicio}
                    </label>
                    <label>
                      horaDeInicio={isRentaUser.returnRenta[0].horaDeInicio}
                    </label>
                    <label>
                      observaciones={isRentaUser.returnRenta[0].observaciones}
                    </label>
                    <label>={isRentaUser.returnRenta[0]._id}</label>
                    <label>Extras</label>
                    {seeExtras ? (
                      <>
                        
                        {namesExtras.map((namesExtra) => {
                          return <>
                          {console.log("dentro map ")}
                            <label>{namesExtra}</label>
                          </>;
                        })}
                      </>
                    ) : (
                      <></>
                    )}
                    <ButtonStyled
                      onClick={hadlerSeeExtras}
                      label={"ver extra extra paquete data algo "}
                      Danger={false}
                    />
                  </>
                )}
            </>
          ) : (
            <>
              <>
                <div className="loader">
                  <div className="cell d-0"></div>
                  <div className="cell d-1"></div>
                  <div className="cell d-2"></div>

                  <div className="cell d-1"></div>
                  <div className="cell d-2"></div>

                  <div className="cell d-2"></div>
                  <div className="cell d-3"></div>

                  <div className="cell d-3"></div>
                  <div className="cell d-4"></div>
                </div>
              </>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default MyAccountView;
