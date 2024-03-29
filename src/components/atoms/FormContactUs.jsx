import "../../assets/style/BannerStyle.css"
import "../../assets/style/ContactView.css"

function FormContactUs() {
    return ( 
        <>
            <div className="col-md-8 col-xl-6 text-center mx-auto">
                <h1 className="fs-1 titulo5Mandamientos">Contactanos</h1>
            </div>
            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 text-center mb-5">
                            <h2 className="heading-section"></h2>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-md-12">
                            <div className="wrapper">
                                <div className="row no-gutters">
                                    <div className="col-md-7 d-flex align-items-stretch">
                                        <div className="contact-wrap w-100 p-md-5 p-4">
                                            
                                                <div id="form-message-warning" className="mb-4">
                                                </div>
                                                <div id="form-message-success" className="mb-4">
                                                    Rellena y envía el formulario!
                                                </div>
                                            <form method="POST" id="contactForm" name="contactForm" novalidate="novalidate">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" name="name" id="name" placeholder="Nombre"/>
                                                        </div>
                                                    </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input type="email" className="form-control" name="email" id="email" placeholder="Correo electrónico"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Tipo de paquete"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Número de teléfono"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <textarea name="message" className="form-control" id="message" cols="30" rows="7" placeholder="Mensaje"></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <a href="" className="btn1">Rellena el formulario</a>
                                                </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-md-5 d-flex align-items-stretch">
                                        <div className="info-wrap bg-primary w-100 p-lg-5 p-4">
                                            <h3 className="mb-4 mt-md-4">Hacienda Ambar</h3>
                                                <div className="dbox w-100 d-flex align-items-start">
                                                    <div className="icon d-flex align-items-center justify-content-center">
                                                        <span className="fa fa-map-marker"></span>
                                                    </div>
                                                <div className="text pl-3">
                                                    <p><span>Dirección: </span><a href="Rivera Nandayalú No. 7, Suchiapa, México">Rivera Nandayalú No. 7, Suchiapa, México</a></p>
                                                </div>
                                            </div>
                                        <div className="dbox w-100 d-flex align-items-center">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="fa fa-phone"></span>
                                            </div>
                                        <div className="text pl-3">
                                            <p><span>Número empresarial:</span> <a href="tel:529613668435">+52 961 366 8435</a></p>
                                        </div>
                                    </div>
                                <div className="dbox w-100 d-flex align-items-center">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="fa fa-paper-plane"></span>
                                    </div>
                                    <div className="text pl-3">
                                        <p><span>Email:</span> <a href="haciendaAmbar@gmail.com">haciendaAmbar@gmail.com</a></p>
                                    </div>
                                </div>
                                    <div className="dbox w-100 d-flex align-items-center">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            <span className="fa fa-globe"></span>
                                        </div>
                                            <div className="text pl-3">
                                                <p><span>Facebook:</span> <a href="https://www.facebook.com/ambar.haciendamx">Hacienda Ambar</a></p>
                                                <p><span>Instragram:</span> <a href="https://www.instagram.com/ambar.haciendamx/">ambar.haciendamx</a></p>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br></br>
        </>
     );
}

export default FormContactUs;