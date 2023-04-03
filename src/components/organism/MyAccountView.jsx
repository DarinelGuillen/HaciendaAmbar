import { useEffect, useContext, useState } from "react";
import React from 'react';
import jsPDF from 'jspdf';
import IdContex from "../../contexts/IdContex";
import TokenContext from "../../contexts/TokenContext";
import TipoRentaContext from "../../contexts/TipoRentaContext";
import "../../assets/style/moleculescss/TypesRFormExtra.css";
import ButtonStyled from "../atoms/ButtonStyled";
import IMGTESTLOGO from "../../assets/img/LogoColor.png";
// import PruebaPdf from "../../containers/PruebaPdf";
function MyAccountView() {
  const { isTipoRenta, setIsTipoRenta } = useContext(TipoRentaContext);
  const { isIduser, setIsiduser } = useContext(IdContex);
  const [isRentaUser, setIsRentaUser] = useState("");
  const [isExtras, setIsExtras] = useState("");
  const [allRentaIndividuales, setallRentaIndividuales] = useState([]);
  const [seeExtras, setseeExtras] = useState(false);
  const [namesExtras, setnamesExtras] = useState([]);
  const { isToken, setIsToken } = useContext(TokenContext);

  const [load, setload] = useState(false);

  function generatePDF(e, renta) {
    e.preventDefault();
    console.log("HOLA");
    console.log("generatePDF");
    console.log("renta== ? ", renta);
    let extrasNames = [];
    allRentaIndividuales.forEach((individual) => {
      if (renta.Extras.includes(individual._id)) {
        extrasNames.push(individual.value);
      }
      console.log("none");
    });
    console.log(extrasNames);
    const ejecutarPDF = (renta, extrasNames) => {
      let paquete = [];
      let url2 = `https://localhost/users/${renta.idUser}`;
      let url = `https://localhost/paquetes/${renta.idPaquete}`;
      let options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${isToken}`,
        },
      };
      fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
          console.log(
            "🚀 ~ file: MyAccountView.jsx:52 ~ fetch ~ data:",
            data.nombrePaquete
          );
          paquete = data;
          fetch(url2, options)
            .then((response) => response.json())
            .then((data) => {
              console.log("paquete\n",JSON.stringify(paquete));
              console.log("data\n",JSON.stringify(data));
              console.log("renta\n",JSON.stringify(renta));
              console.log("extrasNames\n",JSON.stringify(extrasNames));
              /////////////////////7
              // Crea una instancia de jsPDF
              const doc = new jsPDF();
              let x=30
              // Agrega los datos al documento
              doc.setFontSize(12);
              doc.setFont("Quattrocento","bold");
              doc.text("Hacienda Hambar ", 90, 5);
              doc.setFont("Quattrocento","bold");
              doc.text("ID de Renta: ", 10, 10);
              doc.setFont("Quattrocento","normal");
              doc.text(renta._id||"none", 37, 10);

              doc.setFont("Quattrocento","bold");
              doc.text("ID de Paquete: ", 10, 20);
              doc.setFont("Quattrocento","normal");
              doc.text(renta.idPaquete||"none", 38, 20);

              doc.setFont("Quattrocento","bold");
              doc.text("Nombre del paquete: ", 10, 30);
              doc.setFont("Quattrocento","normal");
              doc.text(paquete.nombrePaquete||"none", 50, 30);
              
              doc.setFont("Quattrocento","bold");
              doc.text("Precio: ", 10, 40);
              doc.setFont("Quattrocento","normal");
              doc.text("$" + JSON.stringify(paquete.precio)||"none", 25, 40);

              doc.setFont("Quattrocento","bold");
              doc.text("ID de Usuario: ", 10, 50);
              doc.setFont("Quattrocento","normal");
              doc.text(renta.idUser||"none", 38, 50);

              doc.setFont("Quattrocento","bold");
              doc.text("Nombre: ", 10, 60);
              doc.setFont("Quattrocento","normal");
              doc.text(data.nombreCompleto||"none", 27, 60);

              doc.setFont("Quattrocento","bold");
              doc.text("Correo eléctronico: ", 10, 70);
              doc.setFont("Quattrocento","normal");
              doc.text(data.correo||"none", 48, 70);

              doc.setFont("Quattrocento","bold");
              doc.text("Número de teléfono: ", 10, 80);
              doc.setFont("Quattrocento","normal");
              doc.text(data.numTel||"none", 49, 80);

              doc.setFont("Quattrocento","bold");
              doc.text("Fecha de Inicio: ", 10, 90);
              doc.setFont("Quattrocento","normal");
              doc.text(renta.fechaInicio||"none", 40, 90);

              doc.setFont("Quattrocento","bold");
              doc.text("Hora de Inicio: ", 10, 100);
              doc.setFont("Quattrocento","normal");
              doc.text(renta.horaDeInicio||"none", 38, 100);

              doc.setFont("Quattrocento","bold");
              doc.text("Hora de Finalización: ", 10, 110);
              doc.setFont("Quattrocento","normal");
              doc.text(renta.horaDeFinalizacion||"none", 50, 110);

              doc.setFont("Quattrocento","bold");
              doc.text("Fecha de Reserva: ", 10, 120);
              doc.setFont("Quattrocento","normal");
              doc.text(renta.fechaDeReserva|| "Sin fecha de reserva", 45, 120);
              let y = 130;
              if (extrasNames.length > 0&&extrasNames) {
                doc.setFont("Quattrocento", "bold");
                doc.text("Extras: ", 10, 100);
                doc.setFont("Quattrocento", "normal");
                
                extrasNames.forEach((extra) => {
                  doc.text(extra, 5, y);
                  y += 10;
                });
              }
              

              doc.setFont("Quattrocento","bold");
              doc.text("Estado de la Renta: ", 10, y+10);
              doc.setFont("Quattrocento","normal");
              doc.text(renta.estadoRenta ? "Activa" : "Inactiva", 10, y+20);

              doc.setFont("Quattrocento","bold");
              doc.text("Observaciones: ", 10, y + 40);
              doc.setFont("Quattrocento","normal");
              doc.text(renta.observaciones||"none", 10, y+50);

              doc.setFont("Quattrocento","bold");
              doc.text("¿Se ejecutó con éxito la renta?: ", 10, y+60);
              doc.setFont("Quattrocento","normal");
              doc.text(renta.SeEjecutoConExitoLarenta ? "No" : "Yes", 10, y+70);

              
              doc.save("HaciendaHambar.pdf");
              //////////////////////
            })
            .catch((err) => console.error(err));
        })
        .catch((err) => console.error(err));
      console.log(
        "🚀 ~ file: MyAccountView.jsx:51 ~ ejecutarPDF ~ renta.idPaquete:",
        renta.idPaquete
      );
    };
    ejecutarPDF(renta, extrasNames);
  }

  useEffect(() => {
    // setTimeout(() => {
    console.log(" HAS CHANGE AND USEEFFECT ACTIVATE isIduser", isIduser);
    let id = isIduser;

    let url = `https://localhost/rentasUsuario/${id}/x`;
    console.log("URL= ", url);
    let options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${isToken}`,
      },
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setIsRentaUser(data.rentasUsuario);
        setload(true);
      });

    let url2 = "https://localhost/rentaIndividuales";
    let options2 = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${isToken}`,
      },
    };

    fetch(url2, options2)
      .then((response) => response.json())
      .then((data) => {
        setallRentaIndividuales(data);
      });
  }, []);

  return (
    <>
      <div>
        <div>
          {load &&
            isRentaUser.length >= 0 &&
            isRentaUser.map((renta) => {
              return (
                <>
                  {/* {console.log(renta._id)} */}
                  <div
                    className="card-group tamanoCartitaMyCount"
                    key={renta._id}
                  >
                    <div className="card text-center" key={renta._id}>
                      <div className="card-header" key={renta._id}>
                        {!renta.SeEjecutoConExitoLarenta ? (
                          <>
                            <label className="fs-5 text-center">
                              Renta ID = {renta._id}
                            </label>
                            <label className="fs-5 text-center">
                              fecha De Inicio = {renta.fechaInicio}{" "}
                              {renta.horaDeInicio}
                            </label>
                            <label className="fs-5 text-center">
                              Usted hizo la reserva = {renta.fechaDeReserva}
                            </label>
                            <label className="fs-5 text-center">
                              Estado de renta =
                              {renta.estadoRenta ? (
                                <>
                                  <label className="fs-5 text-center">
                                    Su renta ha sido aprovada, pogase en
                                    contacto con +52 961-366-8435 para cuarquier
                                    duda
                                  </label>
                                </>
                              ) : (
                                <>
                                  <label className="fs-5 text-center">
                                    En proceso de ser aprovada
                                  </label>
                                </>
                              )}
                            </label>
                            <label className="fs-5 text-center">
                              observaciones = {renta.observaciones}
                            </label>
                          </>
                        ) : (
                          <>
                            <div>
                              <div className="px-4 py-5 my-5 text-center ">
                                <img
                                  className="d-block mx-auto mb-4"
                                  src="src/assets/img/LogoColor.png"
                                  alt=""
                                  width="72"
                                  height="57"
                                />
                                <h1 className="display-5 fw-bold">
                                  Hacienda Ambar{" "}
                                </h1>
                                <div className="col-lg-6 mx-auto">
                                  <p className="lead mb-4">
                                    Se mostrará el link de su carpeta drive
                                    posteriormente a su evento donde contendrá
                                    los bellos recuerdos del evento.
                                  </p>
                                  <p>
                                    "La renta "{renta._id}" ha sido finalizada"
                                  </p>
                                  <p>"{renta.LinkFotos}"</p>
                                  <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                                    {/* Aqui le puedes dar el guncionamiento si lo quieres a los botones */}
                                    <button
                                      onClick={(e) => generatePDF(e, renta)}
                                      type="button"
                                      className="btn btn-primary btn-lg px-4 gap-3"
                                    >
                                      Descargar datos PDF
                                    </button>
                                    {renta.LinkFotos === "LINK HERE" ? (
                                      <>
                                        <label>
                                          Sus fotos todavía no han sido subidas
                                        </label>
                                      </>
                                    ) : (
                                      <>
                                        <button
                                          type="button"
                                          className="btn btn-outline-secondary btn-lg px-4"
                                        >
                                          Fotos
                                        </button>
                                      </>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                      {!renta.SeEjecutoConExitoLarenta ? (
                        <>
                          <div className="card-body" key={renta._id}>
                            <h5 className="fs-5 card-title">
                              Genere un archivo de su renta en formato PDF
                            </h5>
                            <p className="card-text"></p>
                            <button
                              className="btn btn-primary btn-lg px-4 gap-3"
                              onClick={(e) => generatePDF(e, renta)}
                            >
                              Archivo PDF
                            </button>
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
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
