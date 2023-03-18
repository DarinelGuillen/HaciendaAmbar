import { useNavigate, Navigate } from "react-router-dom";
import { useContext } from "react";

import PaqueteContext from "../../contexts/PaqueteContext";

import "../../assets/style/GroupCard.css"
import "../../assets/style/BannerStyle.css"

function GroupCard() {
    const navigate = useNavigate();
  const { isPaquete, setIsPaquete } = useContext(PaqueteContext);

    const handlerClickPaquete = (e, id) => {
        e.preventDefault();
        //console.log("IDIDIDIDIDIDID", id);
        console.log("restric IM false, in RecuadroPaquete from");
    
        //alert("Tu renta Fue procesada correctamente!");
        const paqueteID = id;
        // haciendaambar.iothings.com.mx:3000  haciendaambar.iothings.com.mx:3000
        fetch(`https://localhost/paquetes/${paqueteID}`)
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
            <div class="container">
                <div class="row paquetes">
                    <div class="col-md-8 col-xl-6 text-center mx-auto">
                        <h1 class="titulo5Mandamientos">Paquetes</h1>
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
                                                <div class="card-group tamanoCards">
                                                    <div class="card estilo-card">
                                                        <div class="card-body estilo-body">
                                                            <img src="src/assets/img/LogoColor.png" class="rounded mx-auto d-block imgIconoCardsPaquetes"></img>
                                                            <h4 class="card-tittle estiloTituloCard">Entelado Y Set de Fotos</h4>
                                                            <p class="card-text textContentCard"> Nuestro paquete incluye:<br/>   
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
                                                            >Ver mas</button>    
                                                            </center>
                                                        </div>
                                                    </div>
                                                    <div class="card estilo-card">
                                                        <div class="card-body estilo-body">
                                                            <img src="src/assets/img/LogoColor.png" class="rounded mx-auto d-block imgIconoCardsPaquetes"></img>
                                                            <h4 class="card-tittle estiloTituloCard">Paquete Básico 200</h4>
                                                            <p class="card-text textContentCard"> Nuestro paquete incluye:<br/>   
                                                                <br/>- Área de salón, estacionamiento, piscina iluminada con bar, chapoteadero y asoleadero por 6 hrs.<br/>
                                                                <p className="precioPaquetes">
                                                                    $17,300.00
                                                                </p>
                                                            </p>
                                                            <center>
                                                            <button
                                                                className="botonPaquete"
                                                                onClick={(e) => handlerClickPaquete(e, "63edb9f47d9ee19c441923d3")}
                                                                >Ver mas</button>
                                                            </center>
                                                        </div>
                                                    </div>
                                                    <div class="card estilo-card">
                                                        <div class="card-body estilo-body">
                                                            <img src="src/assets/img/LogoColor.png" class="rounded mx-auto d-block imgIconoCardsPaquetes"></img>
                                                            <h4 class="card-tittle estiloTituloCard">Paquete Platinum 200</h4>
                                                            <p class="card-text textContentCard"> Nuestro paquete incluye:<br/>   
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
                                                                Ver mas
                                                            </button>
                                                                
                                                            </center>
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
                                                    <div class="card estilo-card">
                                                        <div class="card-body estilo-body">
                                                            <img src="src/assets/img/LogoColor.png" class="rounded mx-auto d-block imgIconoCardsPaquetes"></img>
                                                            <h4 class="card-tittle estiloTituloCard">Sesiones Fotográficas</h4>
                                                            <p class="card-text textContentCard"> Nuestro paquete incluye:<br/>  
                                                                <br/>- Área de salón y jardines, piscina iluminada con bar, chapoteadero y asoleadero por 2 hrs.<br/>  
                                                                <p className="precioPaquetes">
                                                                    $750.00 
                                                                </p>
                                                            </p>
                                                            <center>
                                                            <button
                                                                className="botonPaquete"
                                                                onClick={(e) => handlerClickPaquete(e, "64150066dc851cf1b4aed5ca")}
                                                                >Ver mas</button>
                                                            </center>
                                                        </div>
                                                    </div>
                                                    <div class="card estilo-card">
                                                        <div class="card-body estilo-body">
                                                            <img src="src/assets/img/LogoColor.png" class="rounded mx-auto d-block imgIconoCardsPaquetes"></img>
                                                            <h4 class="card-tittle estiloTituloCard">Albercazo Ámbar</h4>
                                                            <p class="card-text textContentCard"> Nuestro paquete incluye:<br/> 
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
                                                                Ver mas
                                                            </button>
                                                            </center>
                                                        </div>
                                                    </div>
                                                    <div class="card estilo-card">
                                                        <div class="card-body estilo-body">
                                                            <img src="src/assets/img/LogoColor.png" class="rounded mx-auto d-block imgIconoCardsPaquetes"></img>
                                                            <h4 class="card-tittle estiloTituloCard">Paquete Gold 200</h4>
                                                            <p class="card-text textContentCard"> Nuestro paquete incluye:<br/>   
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
                                                                Ver mas
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
                </div>
            </div> 




           {/*  <div class="container">
                <div class="row">
                    <div class="col-md-8 col-xl-6 text-center mx-auto">
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