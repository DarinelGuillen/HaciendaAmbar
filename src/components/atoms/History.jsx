import "../../assets/style/History.css"
import "../../assets/style/BannerStyle.css"

function History() {
    return ( 
        <>
            <div class="container">
                <div class="row mb-5 espacio">
                    <div class="col-md-8 col-xl-6 text-center mx-auto">
                        <h1 className="titulo5Mandamientos">Historia</h1>
                    </div>
                </div>
            </div>
            <div class="container segundaSecAbout2">
                <div class="row">
                    <div class="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start" data-aos="fade-right" data-aos-delay="150">
                        <img src="src/assets/img/imgHistory.png" alt="" class="img-fluid"/>
                    </div>
                    <div class="col-md-6">
                        <div class="p-4">
                            <div class="d-flex">
                                <div>
                                    <h4 class="h4contenedorHistory">Hacienda Ámbar es un complejo turístico ubicado en la Rivera Nandayalú del municipio de Suchiapa, Chiapas.</h4>
                                    <p class="pcontenedorHistory">La cual ha decidido iniciar su camino en el área de la prestación de servicios a través de la celebración de eventos sociales, culturales, empresariales y de destino.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default History;