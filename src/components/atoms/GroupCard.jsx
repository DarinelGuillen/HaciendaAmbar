import { useNavigate, Navigate } from "react-router-dom";
import { useContext } from "react";

import TokenContext from "../../contexts/TokenContext" 
import PaqueteContext from "../../contexts/PaqueteContext";

import "../../assets/style/GroupCard.css"
import "../../assets/style/BannerStyle.css"

function GroupCard() {
    const navigate = useNavigate();
  const { isPaquete, setIsPaquete } = useContext(PaqueteContext);
  const { isToken, setIsToken } = useContext(TokenContext);

    const handlerClickPaquete = (e, id) => {
        e.preventDefault();
        //console.log("IDIDIDIDIDIDID", id);
        console.log("restric IM false, in RecuadroPaquete from");
    
        //alert("Tu renta Fue procesada correctamente!");
        const URL = `https://localhost/paquetes/${id}`


        // haciendaambar.iothings.com.mx:3000  haciendaambar.iothings.com.mx:3000

        let option = {
            method : "GET",
            headers : {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${isToken}`
            }
        }
        fetch(URL, option)
          .then((response) => response.json())
          .then((data) => {
            //console.log(data);
            console.log("RecuadroPaquete ATOMS\nDATAAAAAHERE BICHDA========", data);
            setIsPaquete(data);
            setTimeout(() => {
              console.log("RecuadroPAQUETE\n=", isPaquete);
            }, 1000);
          })
          .catch((error) => console.error(error));
    
        navigate("/RentPackage");
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
                        <div className="carousel slide" data-bs-ride="false" id="carousel-2">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="container d-flex flex-column justify-content-center h-100">
                                        <div className="row">
                                            <div className="col">
                                                <div className="card-group tamanoCards">
                                                    <div className="card estilo-card">
                                                        <div className="card-body estilo-body">
                                                            <img src="src/assets/img/LogoColor.png" className="rounded mx-auto d-block imgIconoCardsPaquetes"></img>
                                                            <h4 className="fs-3 card-tittle estiloTituloCard">Entelado Y Set de Fotos</h4>
                                                            <p className="card-text textContentCard"> Nuestro paquete incluye:<br/>   
                                                                <br/>- Tiras de luces led colgantes.
                                                                <br/>- Aro Colgante de Cerezos/ Hilos Chinos/ Pedrería.<br/>                           
                                                                <p className="precioPaquetes">
                                                                    $10,500.00 
                                                                </p>
                                                            </p>
                                                            <center>
                                                            <button
                                                                className="botonPaquete"
                                                                onClick={(e) => handlerClickPaquete(e, "63ed95443676ecbfc0ffea7d")}
                                                            >Ver más</button>    
                                                            </center>
                                                        </div>
                                                    </div>
                                                    <div className="card estilo-card">
                                                        <div className="card-body estilo-body">
                                                            <img src="src/assets/img/LogoColor.png" className="rounded mx-auto d-block imgIconoCardsPaquetes"></img>
                                                            <h4 className="fs-3 card-tittle estiloTituloCard">Paquete Básico 200</h4>
                                                            <p className="card-text textContentCard"> Nuestro paquete incluye:<br/>   
                                                                <br/>- Área de salón, estacionamiento, piscina iluminada con bar, chapoteadero y asoleadero por 6 hrs.<br/>
                                                                <p className="precioPaquetes">
                                                                    $17,300.00
                                                                </p>
                                                            </p>
                                                            <center>
                                                            <button
                                                                className="botonPaquete"
                                                                onClick={(e) => handlerClickPaquete(e, "63edb9f47d9ee19c441923d3")}
                                                                >Ver más</button>
                                                            </center>
                                                        </div>
                                                    </div>
                                                    <div className="card estilo-card">
                                                        <div className="card-body estilo-body">
                                                            <img src="src/assets/img/LogoColor.png" className="rounded mx-auto d-block imgIconoCardsPaquetes"></img>
                                                            <h4 className="fs-3 card-tittle estiloTituloCard">Paquete Platinum 200</h4>
                                                            <p className="card-text textContentCard"> Nuestro paquete incluye:<br/>   
                                                                <br/>- Mobiliario Premium a elegir para 200 personas con mantelería, cristalería y platos base decorativos.<br/>
                                                                <p className="precioPaquetes">
                                                                    $32,300.00
                                                                </p>
                                                            </p>
                                                            <center>
                                                            <button
                                                                className="botonPaquete"
                                                                onClick={(e) => handlerClickPaquete(e, "63f82e1d23fc8dc7c2152c35")}
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
                                                            <img src="src/assets/img/LogoColor.png" className="rounded mx-auto d-block imgIconoCardsPaquetes"></img>
                                                            <h4 className="fs-3 card-tittle estiloTituloCard">Sesiones Fotográficas</h4>
                                                            <p className="card-text textContentCard"> Nuestro paquete incluye:<br/>  
                                                                <br/>- Área de salón y jardines, piscina iluminada con bar, chapoteadero y asoleadero por 2 hrs.<br/>  
                                                                <p className="precioPaquetes">
                                                                    $750.00 
                                                                </p>
                                                            </p>
                                                            <center>
                                                            <button
                                                                className="botonPaquete"
                                                                onClick={(e) => handlerClickPaquete(e, "64150066dc851cf1b4aed5ca")}
                                                                >Ver más</button>
                                                            </center>
                                                        </div>
                                                    </div>
                                                    <div className="card estilo-card">
                                                        <div className="card-body estilo-body">
                                                            <img src="src/assets/img/LogoColor.png" className="rounded mx-auto d-block imgIconoCardsPaquetes"></img>
                                                            <h4 className="fs-3 card-tittle estiloTituloCard">Albercazo Ámbar</h4>
                                                            <p className="card-text textContentCard"> Nuestro paquete incluye:<br/> 
                                                                <br/>- Piscina iluminada con chapoteadero y asoleadero por 6 hrs.<br/>
                                                                <p className="precioPaquetes">
                                                                    $4,199.00
                                                                </p>
                                                            </p>
                                                            <center>
                                                            <button
                                                                className="botonPaquete"
                                                                onClick={(e) => handlerClickPaquete(e, "64150131dc851cf1b4aed5cc")}
                                                            >
                                                                Ver más
                                                            </button>
                                                            </center>
                                                        </div>
                                                    </div>
                                                    <div className="card estilo-card">
                                                        <div className="card-body estilo-body">
                                                            <img src="src/assets/img/LogoColor.png" className="rounded mx-auto d-block imgIconoCardsPaquetes"></img>
                                                            <h4 className="fs-3 card-tittle estiloTituloCard">Paquete Gold 200</h4>
                                                            <p className="card-text textContentCard"> Nuestro paquete incluye:<br/>   
                                                                <br/>- Área de salón, estacionamiento, piscina iluminada con bar, chapoteadero y asoleadero por 6 hrs.<br/>
                                                                <p className="precioPaquetes">
                                                                    $21,300.00
                                                                </p>
                                                            </p>
                                                            <center>
                                                            <button
                                                                className="botonPaquete"
                                                                onClick={(e) => handlerClickPaquete(e, "6415014edc851cf1b4aed5cd")}
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

                                <div>
                                    <a className="carousel-control-prev" href="#carousel-2" role="button" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carousel-2" role="button" data-bs-slide="next">
                                        <span className="carousel-control-next-icon"></span>
                                        <span className="visually-hidden">Next</span>
                                    </a>
                                </div>

                                <ol className="carousel-indicators">
                                    <li data-bs-target="#carousel-2" data-bs-slide-to="0" className="active"></li>
                                    <li data-bs-target="#carousel-2" data-bs-slide-to="1"></li>
                                </ol>

                            </div>
                        </div>
                    </div>
                </div>
            </div> 




           {/*  <div className="container">
                <div className="row">
                    <div className="col-md-8 col-xl-6 text-center mx-auto">
                        <h2>Paquetes</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="carousel slide" data-bs-ride="false" id="carousel-2">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="container d-flex flex-column justify-content-center h-100">
                                        <div class="row">
                                            <div class="col">
                                                <div class="card-group">
                                                    <div class="card boderCard">
                                                        <div class="card-body cardBody">
                                                            <img class="rounded mx-auto d-block roundedBBlock" src="assets/img/image%202.png" />
                                                            <h4 class="card-title">Entelado y Set de fotos.</h4>
                                                            <p class="card-text">Nuestro paquete incluye:<br/>
                                                                <br/>Tiras de luces led colgantes.
                                                                <br/>Aro Colgante de Cerezos/ Hilos Chinos/ Pedrería.<br/>
                                                                <br/>Elementos de cortesía.<br/>
                                                                <br/>Mesa blanca en madera tallada para mesa principal.<br/>
                                                                <br/>$10,500.00
                                                            </p>
                                                            <button class="btn btn-primary" type="button">Ver más</button>
                                                        </div>
                                                    </div>
                                                    <div class="card boderCard">
                                                        <div class="card-body cardBody">
                                                            <img class="rounded mx-auto d-block roundedBBlock" src="assets/img/image%202.png" />
                                                            <h4 class="card-title">Entelado y Set de fotos.</h4>
                                                            <p class="card-text">Nuestro paquete incluye:<br/>
                                                                <br/>Tiras de luces led colgantes.
                                                                <br/>Aro Colgante de Cerezos/ Hilos Chinos/ Pedrería.<br/>
                                                                <br/>Elementos de cortesía.<br/>
                                                                <br/>Mesa blanca en madera tallada para mesa principal.<br/>
                                                                <br/>$10,500.00
                                                            </p>
                                                            <button class="btn btn-primary" type="button">Ver más</button>
                                                        </div>
                                                    </div>
                                                    <div class="card boderCard">
                                                        <div class="card-body cardBody">
                                                            <img class="rounded mx-auto d-block roundedBBlock" src="assets/img/image%202.png" />
                                                            <h4 class="card-title">Entelado y Set de fotos.</h4>
                                                            <p class="card-text">Nuestro paquete incluye:<br/>
                                                                <br/>Tiras de luces led colgantes.
                                                                <br/>Aro Colgante de Cerezos/ Hilos Chinos/ Pedrería.<br/>
                                                                <br/>Elementos de cortesía.<br/>
                                                                <br/>Mesa blanca en madera tallada para mesa principal.<br/>
                                                                <br/>$10,500.00
                                                            </p>
                                                            <button class="btn btn-primary" type="button">Ver más</button>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="container d-flex flex-column justify-content-center h-100">
                                        <div class="row">
                                            <div class="col">
                                                <div class="card-group">
                                                    <div class="card boderCard">
                                                        <div class="card-body cardBody">
                                                            <img class="rounded mx-auto d-block roundedBBlock" src="assets/img/image%202.png" />
                                                            <h4 class="card-title">Entelado y Set de fotos.</h4>
                                                            <p class="card-text">Nuestro paquete incluye:<br/>
                                                                <br/>Tiras de luces led colgantes.
                                                                <br/>Aro Colgante de Cerezos/ Hilos Chinos/ Pedrería.<br/>
                                                                <br/>Elementos de cortesía.<br/>
                                                                <br/>Mesa blanca en madera tallada para mesa principal.<br/>
                                                                <br/>$10,500.00
                                                            </p>
                                                            <button class="btn btn-primary" type="button">Ver más</button>
                                                        </div>
                                                    </div>
                                                    <div class="card boderCard">
                                                        <div class="card-body cardBody">
                                                            <img class="rounded mx-auto d-block roundedBBlock" src="assets/img/image%202.png" />
                                                            <h4 class="card-title">Entelado y Set de fotos.</h4>
                                                            <p class="card-text">Nuestro paquete incluye:<br/>
                                                                <br/>Tiras de luces led colgantes.
                                                                <br/>Aro Colgante de Cerezos/ Hilos Chinos/ Pedrería.<br/>
                                                                <br/>Elementos de cortesía.<br/>
                                                                <br/>Mesa blanca en madera tallada para mesa principal.<br/>
                                                                <br/>$10,500.00
                                                            </p>
                                                            <button class="btn btn-primary" type="button">Ver más</button>
                                                        </div>
                                                    </div>
                                                    <div class="card boderCard">
                                                        <div class="card-body cardBody">
                                                            <img class="rounded mx-auto d-block imgIconoCardsPaquetes" src="src/assets/img/LogoColor.png" />
                                                            <h4 class="card-title">Entelado y Set de fotos.</h4>
                                                            <p class="card-text">Nuestro paquete incluye:<br/>
                                                                <br/>Tiras de luces led colgantes.
                                                                <br/>Aro Colgante de Cerezos/ Hilos Chinos/ Pedrería.<br/>
                                                                <br/>$10,500.00
                                                            </p>
                                                            <button class="btn btn-primary" type="button">Ver más</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <a class="carousel-control-prev" href="#carousel-2" role="button" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon"></span>
                                    <span class="visually-hidden">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carousel-2" role="button" data-bs-slide="next">
                                    <span class="carousel-control-next-icon"></span>
                                    <span class="visually-hidden">Next</span>
                                </a>
                            </div>

                            <ol class="carousel-indicators">
                                <li data-bs-target="#carousel-2" data-bs-slide-to="0" class="active"></li>
                                <li data-bs-target="#carousel-2" data-bs-slide-to="1"></li>
                            </ol>

                        </div>
                    </div>
                </div>
            </div> */}
        </>
     );
}

export default GroupCard;