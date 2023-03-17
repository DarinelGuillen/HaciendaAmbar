import "../../assets/img/Group1.svg"
import "../../assets/img/Group2.svg"
import "../../assets/img/Group3.svg"
import "../../assets/img/Group4.svg"
import "../../assets/img/Group5.svg"
import "../../assets/img/BannerIcono.png"

import "../../assets/style/BannerStyle.css"

function Banner() {
    return ( 
    <>
        <div class="container">
            <div class="row mb-5 espacio">
                <div class="col-md-8 col-xl-6 text-center mx-auto">
                    <h1 className="titulo5Mandamientos">Los 5 mandamientos del invitado.</h1>
                </div>
            </div>
        </div>

        <div class="container segundaSecAbout2">
            <div class="row">
            <div class="col-md-6">
                    <div class="p-4">
                        <div class="d-flex">
                            <img src="src/assets/img/Group5.svg" class="rounded-circle flex-shrink-0 me-3 fit-cover" width="50" height="50"></img>
                            <div>
                                <p class="text-muted mb-0 parrafo">Abrirás la invitación cuando te la entreguen.</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-4">
                        <div class="d-flex">
                            <img src="src/assets/img/Group4.svg" class="rounded-circle flex-shrink-0 me-3 fit-cover" width="50" height="50"></img>
                            <div>
                                <p class="text-muted mb-0 parrafo">Serás puntual y llegarás a la ceremonia.</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-4">
                        <div class="d-flex">
                            <img src="src/assets/img/Group3.svg" class="rounded-circle flex-shrink-0 me-3 fit-cover" width="50" height="50"></img>
                            <div>
                                <p class="text-muted mb-0 parrafo">No pedirás un +1.</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-4">
                        <div class="d-flex">
                            <img src="src/assets/img/Group2.svg" class="rounded-circle flex-shrink-0 me-3 fit-cover" width="50" height="50"></img>
                            <div>
                                <p class="text-muted mb-0 parrafo">No te molestarás si tus niños no estás invitados(es por tu bien).</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-4">
                        <div class="d-flex">
                            <img src="src/assets/img/Group1.svg" class="rounded-circle flex-shrink-0 me-3 fit-cover" width="50" height="50"></img>
                            <div>
                                <p class="text-muted mb-0 parrafo">Confirmarás asistencia lo antes posible y no cancelarás de último momento.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start" data-aos="fade-right" data-aos-delay="150">
                    <img src="src/assets/img/BannerIcono.png" alt="" class="img-fluid"/>
                </div>
            </div>
        </div>
    </>
     );
}

export default Banner;
