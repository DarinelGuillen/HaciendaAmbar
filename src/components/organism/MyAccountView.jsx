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
    console.log("namesExtras"+JSON.stringify(namesExtras));
    console.log(namesExtras.length,"(namesExtras.length");
    setseeExtras(true);
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

      allRentaIndividuales.map((rentas) => {
        isExtras.map((extras) => {
          rentas._id === extras ? (
            setnamesExtras((prevNamesExtras) => prevNamesExtras.concat(rentas.precioAprox))
          ) : null;
        });
      });
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
        <h1>HOLAAAAAAAAA estoy en MyAccountView, Organism</h1>
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
                      <h1>hola</h1>
                        {namesExtras.map((ex)=>{
                          <>
                          <label >{ex}</label>
                          </>
                        })}
                      </>
                    ) : (
                      <>none extras</>
                    )}
                    <ButtonStyled
                      onClick={hadlerSeeExtras}
                      label={"Confirma extra extra paquete data algo "}
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
