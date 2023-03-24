import "../../assets/style/History.css"
import "../../assets/style/BannerStyle.css"

function History() {
    return ( 
        <>
            <div className="container">
                <div className="row mb-5 espacio">
                    <div className="col-md-8 col-xl-6 text-center mx-auto">
                        <h1 className="fs-1 titulo5Mandamientos">Historia</h1>
                    </div>
                </div>
            </div>
            <div className="container segundaSecAbout2">
                <div className="row">
                    <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start" data-aos="fade-right" data-aos-delay="150">
                        <img src="src/assets/img/imgHistory.png" alt="" className="img-fluid"/>
                    </div>
                    <div className="col-md-6">
                        <div className="p-4">
                            <div className="d-flex">
                                <div>
                                    <p className="fs-1 h4contenedorHistory"><a className="fs-1 formaTextoHystoria">Hacienda Ámbar</a> es un complejo turístico ubicado en la Rivera Nandayalú del municipio de Suchiapa, Chiapas.</p>
                                    <p className="fs-2 pcontenedorHistory">La cual ha decidido iniciar su camino en el área de la prestación de servicios a través de la celebración de eventos sociales, culturales, empresariales y de destino.</p>
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