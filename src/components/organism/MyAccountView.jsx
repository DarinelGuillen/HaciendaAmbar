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
        <div className="px-4 py-5 my-5 text-center ">
            <img className="d-block mx-auto mb-4" src="src/assets/img/LogoColor.png" alt="" width="72" height="57"/>
            <h1 className="display-5 fw-bold">Hacienda Ambar </h1>
            <div className="col-lg-6 mx-auto">
              <p className="lead mb-4">Se mostrará el link de su carpeta drive posteriormente a su evento donde contendrá los bellos recuerdos del evento.</p>
              <p>"Aquí"</p>
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                  {/* Aqui le puedes dar el guncionamiento si lo quieres a los botones */}
                <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
                <button type="button" className="btn btn-outline-secondary btn-lg px-4">Secondary</button>
              </div>
            </div>
          </div>
        <div>
          {load &&
            isRentaUser.map((renta) => {
              return (
                <>
                <div className="card-group tamanoCartitaMyCount">
                  <div className="card text-center">
                    <div className="card-header">
                      <label className="fs-5 text-center">Renta = {renta._id}</label>
                    </div>
                    <div className="card-body" key={renta._id}>
                      <h5 className="fs-5 card-title">Genere un archivo de su renta en formato PDF</h5>
                      <p className="card-text"></p>
                      <button
                        className="btn btn-primary btn-lg px-4 gap-3"
                        onClick={(e) => generatePDF(e, renta)}
                        >
                          Archivo PDF
                      </button>
                    </div>
                  </div>
                </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default MyAccountView;