import group1 from "../../assets/img/Group1.svg"
import group2 from"../../assets/img/Group2.svg"
import group3 from "../../assets/img/Group3.svg"
import group4 from"../../assets/img/Group4.svg"
import group5 from"../../assets/img/Group5.svg"
import iconBanner from"../../assets/img/BannerIcono.png"

import "../../assets/style/BannerStyle.css"

function Banner() {
    return ( 
    <>
        <div className="container">
            <div className="row mb-5 espacio">
                <div className="col-md-8 col-xl-6 text-center mx-auto">
                    <h1 className="fs-1 titulo5Mandamientos">Los 5 mandamientos del invitado.</h1>
                </div>
            </div>
        </div>

        <div className="container segundaSecAbout2">
            <div className="row">
            <div className="col-md-6">
                    <div className="p-4">
                        <div className="d-flex">
                            <img src={group5} className="rounded-circle flex-shrink-0 me-3 fit-cover" width="50" height="50"></img>
                            <div>
                                <p className="fs-3 text-muted mb-0 parrafo">Abrirás la invitación cuando te la entreguen.</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="d-flex">
                            <img src={group4} className="rounded-circle flex-shrink-0 me-3 fit-cover" width="50" height="50"></img>
                            <div>
                                <p className="fs-3 text-muted mb-0 parrafo">Serás puntual y llegarás a la ceremonia.</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="d-flex">
                            <img src={group3} className="rounded-circle flex-shrink-0 me-3 fit-cover" width="50" height="50"></img>
                            <div>
                                <p className="fs-3 text-muted mb-0 parrafo">No pedirás un +1.</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="d-flex">
                            <img src={group2} className="rounded-circle flex-shrink-0 me-3 fit-cover" width="50" height="50"></img>
                            <div>
                                <p className="fs-3 text-muted mb-0 parrafo">No te molestarás si tus niños no estás invitados(es por tu bien).</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="d-flex">
                            <img src={group1} className="rounded-circle flex-shrink-0 me-3 fit-cover" width="50" height="50"></img>
                            <div>
                                <p className="fs-3 text-muted mb-0 parrafo">Confirmarás asistencia lo antes posible y no cancelarás de último momento.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start" data-aos="fade-right" data-aos-delay="150">
                    <img src={iconBanner} alt="" className="img-fluid"/>
                </div>
            </div>
        </div>
    </>
     );
}

export default Banner;
