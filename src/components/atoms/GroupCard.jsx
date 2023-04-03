import { useNavigate, Navigate } from "react-router-dom";
import { useContext } from "react";
import TokenContext from "../../contexts/TokenContext";
import PaqueteContext from "../../contexts/PaqueteContext";
import logoColor from "../../assets/img/LogoColor.png"
import "../../assets/style/GroupCard.css";
import "../../assets/style/BannerStyle.css";

function GroupCard() {
  const navigate = useNavigate();
  const { isPaquete, setIsPaquete } = useContext(PaqueteContext);
  const { isToken, setIsToken } = useContext(TokenContext);

  const handlerClickPaquete = (e, id) => {
    e.preventDefault();
    //console.log("IDIDIDIDIDIDID", id);
    Swal.fire({
      title: "¿Desea visualizar el paquete seleccionado?",
      text: "Seleccione una casilla",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("restric IM false, in RecuadroPaquete from");

        //alert("Tu renta Fue procesada correctamente!");
        const URL = `https://apihaciendaambar.iothings.com.mx/paquetes/${id}`;

        // haciendaambar.iothings.com.mx:3000  haciendaambar.iothings.com.mx:3000

        let option = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${isToken}`,
          },
        };
        fetch(URL, option)
          .then((response) => response.json())
          .then((data) => {
            //console.log(data);
            console.log(
              "RecuadroPaquete ATOMS\nDATAAAAAHERE BICHDA========",
              data
            );
            setIsPaquete(data);
            setTimeout(() => {
              console.log("RecuadroPAQUETE\n=", isPaquete);
            }, 1000);
          })
          .catch((error) => console.error(error));

        navigate("/RentPackage");
      }
    });
  };
  return (
    
    <>
      <div className="container">
        <div className="row paquetes">
          <div className="col-md-8 col-xl-6 text-center mx-auto">
            <h1 className="fs-1 titulo5Mandamientos">Paquetes</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div
              className="carousel slide"
              data-bs-ride="false"
              id="carousel-2"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="container d-flex flex-column justify-content-center h-100">
                    <div className="row">
                      <div className="col">
                        <div className="card-group tamanoCards">
                          <div className="card estilo-card">
                            <div className="card-body estilo-body">
                              <img
                                src={logoColor}
                                className="rounded mx-auto d-block imgIconoCardsPaquetes"
                              ></img>
                              <h4 className="fs-3 card-tittle estiloTituloCard">
                                Entelado Y Set de Fotos
                              </h4>
                              <p className="card-text textContentCard">
                                {" "}
                                Nuestro paquete incluye:
                                <br />
                                <br />- Tiras de luces led colgantes.
                                <br />- Aro Colgante de Cerezos/ Hilos Chinos/
                                Pedrería.
                                <br />
                                <p className="precioPaquetes">$10,500.00</p>
                              </p>
                              <center>
                                <button
                                  className="botonPaquete"
                                  onClick={(e) =>
                                    handlerClickPaquete(
                                      e,
                                      "63ed95443676ecbfc0ffea7d"
                                    )
                                  }
                                >
                                  Ver más
                                </button>
                              </center>
                            </div>
                          </div>
                          <div className="card estilo-card">
                            <div className="card-body estilo-body">
                              <img
                                src={logoColor}
                                className="rounded mx-auto d-block imgIconoCardsPaquetes"
                              ></img>
                              <h4 className="fs-3 card-tittle estiloTituloCard">
                                Paquete Básico 200
                              </h4>
                              <p className="card-text textContentCard">
                                {" "}
                                Nuestro paquete incluye:
                                <br />
                                <br />- Área de salón, estacionamiento, piscina
                                iluminada con bar, chapoteadero y asoleadero por
                                6 hrs.
                                <br />
                                <p className="precioPaquetes">$17,300.00</p>
                              </p>
                              <center>
                                <button
                                  className="botonPaquete"
                                  onClick={(e) =>
                                    handlerClickPaquete(
                                      e,
                                      "63edb9f47d9ee19c441923d3"
                                    )
                                  }
                                >
                                  Ver más
                                </button>
                              </center>
                            </div>
                          </div>
                          <div className="card estilo-card">
                            <div className="card-body estilo-body">
                              <img
                                src={logoColor}
                                className="rounded mx-auto d-block imgIconoCardsPaquetes"
                              ></img>
                              <h4 className="fs-3 card-tittle estiloTituloCard">
                                Paquete Platinum 200
                              </h4>
                              <p className="card-text textContentCard">
                                {" "}
                                Nuestro paquete incluye:
                                <br />
                                <br />- Mobiliario Premium a elegir para 200
                                personas con mantelería, cristalería y platos
                                base decorativos.
                                <br />
                                <p className="precioPaquetes">$32,300.00</p>
                              </p>
                              <center>
                                <button
                                  className="botonPaquete"
                                  onClick={(e) =>
                                    handlerClickPaquete(
                                      e,
                                      "63f82e1d23fc8dc7c2152c35"
                                    )
                                  }
                                >
                                  Ver más
                                </button>
                              </center>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="container d-flex flex-column justify-content-center h-100">
                    <div className="row">
                      <div className="col">
                        <div className="card-group">
                          <div className="card estilo-card">
                            <div className="card-body estilo-body">
                              <img
                                src={logoColor}
                                className="rounded mx-auto d-block imgIconoCardsPaquetes"
                              ></img>
                              <h4 className="fs-3 card-tittle estiloTituloCard">
                                Sesiones Fotográficas
                              </h4>
                              <p className="card-text textContentCard">
                                {" "}
                                Nuestro paquete incluye:
                                <br />
                                <br />- Área de salón y jardines, piscina
                                iluminada con bar, chapoteadero y asoleadero por
                                2 hrs.
                                <br />
                                <p className="precioPaquetes">$750.00</p>
                              </p>
                              <center>
                                <button
                                  className="botonPaquete"
                                  onClick={(e) =>
                                    handlerClickPaquete(
                                      e,
                                      "64150066dc851cf1b4aed5ca"
                                    )
                                  }
                                >
                                  Ver más
                                </button>
                              </center>
                            </div>
                          </div>
                          <div className="card estilo-card">
                            <div className="card-body estilo-body">
                              <img
                                src={logoColor}
                                className="rounded mx-auto d-block imgIconoCardsPaquetes"
                              ></img>
                              <h4 className="fs-3 card-tittle estiloTituloCard">
                                Albercazo Ámbar
                              </h4>
                              <p className="card-text textContentCard">
                                {" "}
                                Nuestro paquete incluye:
                                <br />
                                <br />- Piscina iluminada con chapoteadero y
                                asoleadero por 6 hrs.
                                <br />
                                <p className="precioPaquetes">$4,199.00</p>
                              </p>
                              <center>
                                <button
                                  className="botonPaquete"
                                  onClick={(e) =>
                                    handlerClickPaquete(
                                      e,
                                      "64150131dc851cf1b4aed5cc"
                                    )
                                  }
                                >
                                  Ver más
                                </button>
                              </center>
                            </div>
                          </div>
                          <div className="card estilo-card">
                            <div className="card-body estilo-body">
                              <img
                                src={logoColor}
                                className="rounded mx-auto d-block imgIconoCardsPaquetes"
                              ></img>
                              <h4 className="fs-3 card-tittle estiloTituloCard">
                                Paquete Gold 200
                              </h4>
                              <p className="card-text textContentCard">
                                {" "}
                                Nuestro paquete incluye:
                                <br />
                                <br />- Área de salón, estacionamiento, piscina
                                iluminada con bar, chapoteadero y asoleadero por
                                6 hrs.
                                <br />
                                <p className="precioPaquetes">$21,300.00</p>
                              </p>
                              <center>
                                <button
                                  className="botonPaquete"
                                  onClick={(e) =>
                                    handlerClickPaquete(
                                      e,
                                      "6415014edc851cf1b4aed5cd"
                                    )
                                  }
                                >
                                  Ver más
                                </button>
                              </center>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                

                <div className="carousel-item">
                  <div className="container d-flex flex-column justify-content-center h-100">
                    <div className="row">
                      <div className="col">
                        <div className="card-group">
                          <div className="card estilo-card">
                            <div className="card-body estilo-body">
                              <img
                                src={logoColor}
                                className="rounded mx-auto d-block imgIconoCardsPaquetes"
                              ></img>
                              <h4 className="fs-3 card-tittle estiloTituloCard">
                               DJ y Pista Led
                              </h4>
                              <p className="card-text textContentCard">
                                {" "}
                                Nuestro paquete incluye:
                                <br />
                                <br />- 1 DJ Versátil por 5 hrs.
                                <br />
                                <p className="precioPaquetes">$12,000.00</p>
                              </p>
                              <center>
                                <button
                                  className="botonPaquete"
                                  onClick={(e) =>
                                    handlerClickPaquete(
                                      e,
                                      "642314cf9f11302bfea909d5"
                                    )
                                  }
                                >
                                  Ver más
                                </button>
                              </center>
                            </div>
                          </div>
                          <div className="card estilo-card">
                            <div className="card-body estilo-body">
                         
                            </div>
                          </div>
                          <div className="card estilo-card">
                            <div className="card-body estilo-body">
                          
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>



                <div>
                  <a
                    className="carousel-control-prev"
                    href="#carousel-2"
                    role="button"
                    data-bs-slide="prev"
                  >
                    <span className="carousel-control-prev-icon"></span>
                    <span className="visually-hidden">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carousel-2"
                    role="button"
                    data-bs-slide="next"
                  >
                    <span className="carousel-control-next-icon"></span>
                    <span className="visually-hidden">Next</span>
                  </a>
                  <a
                    className="carousel-control-prev"
                    href="#carousel-2"
                    role="button"
                    data-bs-slide="prev"
                  >
                    <span className="carousel-control-prev-icon"></span>
                    <span className="visually-hidden">Previous</span>
                  </a>
                </div>

                <ol className="carousel-indicators invisible">
                  <li
                    data-bs-target="#carousel-2"
                    data-bs-slide-to="0"
                    className="active"
                  ></li>
                  <li data-bs-target="#carousel-2" data-bs-slide-to="1"></li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GroupCard;
