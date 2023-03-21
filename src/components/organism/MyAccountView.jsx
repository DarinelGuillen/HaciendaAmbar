import { useEffect, useContext, useState } from "react";
import IdContex from "../../contexts/IdContex";
import TipoRentaContext from "../../contexts/TipoRentaContext";
import "../../assets/style/moleculescss/TypesRFormExtra.css";
import ButtonStyled from "../atoms/ButtonStyled";
function MyAccountView() {
  const { isTipoRenta, setIsTipoRenta } = useContext(TipoRentaContext);
  const { isIduser, setIsiduser } = useContext(IdContex);
  const [isRentaUser, setIsRentaUser] = useState("");
  const [isExtras, setIsExtras] = useState("");
  const [allRentaIndividuales, setallRentaIndividuales] = useState([]);
  const [seeExtras, setseeExtras] = useState(false);
  const [namesExtras, setnamesExtras] = useState([]);

  const [load, setload] = useState(false);
  const hadlerSeeExtras = (e) => {
    const newNamesExtras = [];
    allRentaIndividuales.forEach((rentas) => {
      if (isExtras.includes(rentas._id)) {
        newNamesExtras.push(rentas.value);
      }
    });
    setnamesExtras(newNamesExtras);
    console.log("namesExtras", namesExtras);
    console.log(namesExtras.length, "(namesExtras.length)");
    setTimeout(() => {
    setseeExtras(!seeExtras);
      
    }, 500);
  };

  useEffect(() => {
    setTimeout(() => {
      console.log("isTipoRenta HAS CHANGE AND USEEFFECT ACTIVATE");
      let id = isIduser;
      let url = `https://localhost/rentasUsuario/${id}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setIsRentaUser(data);
          // console.log(data.returnRenta[0].Extras,"_id");
          setIsExtras(data.returnRenta[0].Extras);
          console.log("isExtras", isExtras);
        });
      setload(true);

      // setTimeout(() => {
      //   console.log(JSON.stringify(isRentaUser), "\nload", load);
      // }, 1000);
    }, 1000);
  }, [isTipoRenta]);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://localhost/rentaIndividuales")
        .then((response) => response.json())
        .then((data) => {
          setallRentaIndividuales(data);
          console.log(data, "allRentaIndividuales");
        });
    }, 1200);
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
