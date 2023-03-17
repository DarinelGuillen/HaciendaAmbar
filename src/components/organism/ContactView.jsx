import "../../assets/style/ContactView.css"

function ContactView() {
    return ( 
        <>
            <div class="about-us">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="about-img">
                                <img src="src/assets/img/imgRecuerdos.png" class="img-fluid" alt="" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="about-content">
                                <div class="about-sub-heading">
                                    <h5>Contacta con nosotros<br/></h5>
                                </div>
                                <h2>
                                    Hacienda Ambar
                                </h2>
                                <p>
                                    Te invitamos a rellenar el formulario para brindarte futura información relevante de nuestra parte.<br/><br/>
                                    Lo siguiente por llegar:
                                </p>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="about-sub">
                                        <h6><i class="fa fa-check"></i> Futuras mejoras</h6>
                                        <h6><i class="fa fa-check"></i> Promociones</h6>
                                        <h6><i class="fa fa-check"></i> Descuentos</h6>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="about-sub">
                                        <h6><i class="fa fa-check"></i> Areas multidiciplinarias</h6>
                                        <h6><i class="fa fa-check"></i> Membresia</h6>
                                        <h6><i class="fa fa-check"></i> Eventos</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section class="ftco-section">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-6 text-center mb-5">
                            <h2 class="heading-section"></h2>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-10 col-md-12">
                            <div class="wrapper">
                                <div class="row no-gutters">
                                    <div class="col-md-7 d-flex align-items-stretch">
                                        <div class="contact-wrap w-100 p-md-5 p-4">
                                            <h3 class="mb-4">Contactanos</h3>
                                                <div id="form-message-warning" class="mb-4">
                                                </div>
                                                <div id="form-message-success" class="mb-4">
                                                    Rellena y envia el formulario!
                                                </div>
                                            <form method="POST" id="contactForm" name="contactForm" novalidate="novalidate">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <input type="text" class="form-control" name="name" id="name" placeholder="Nombre"/>
                                                        </div>
                                                    </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <input type="email" class="form-control" name="email" id="email" placeholder="Correo eléctronico"/>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" name="subject" id="subject" placeholder="Tipo de paquete"/>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" name="subject" id="subject" placeholder="Número de teléfono"/>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <textarea name="message" class="form-control" id="message" cols="30" rows="7" placeholder="Mensaje"></textarea>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <a href="" class="btn1">Rellena el formulario</a>
                                                </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div class="col-md-5 d-flex align-items-stretch">
                                        <div class="info-wrap bg-primary w-100 p-lg-5 p-4">
                                            <h3 class="mb-4 mt-md-4">Hacienda Ambar</h3>
                                                <div class="dbox w-100 d-flex align-items-start">
                                                    <div class="icon d-flex align-items-center justify-content-center">
                                                        <span class="fa fa-map-marker"></span>
                                                    </div>
                                                <div class="text pl-3">
                                                    <p><span>Dirección: </span><a href="Rivera Nandayalú No. 7, Suchiapa, Mexico">Rivera Nandayalú No. 7, Suchiapa, Mexico</a></p>
                                                </div>
                                            </div>
                                        <div class="dbox w-100 d-flex align-items-center">
                                            <div class="icon d-flex align-items-center justify-content-center">
                                                <span class="fa fa-phone"></span>
                                            </div>
                                        <div class="text pl-3">
                                            <p><span>Número empresarial:</span> <a href="tel:529613668435">+52 961 366 8435</a></p>
                                        </div>
                                    </div>
                                <div class="dbox w-100 d-flex align-items-center">
                                    <div class="icon d-flex align-items-center justify-content-center">
                                        <span class="fa fa-paper-plane"></span>
                                    </div>
                                    <div class="text pl-3">
                                        <p><span>Email:</span> <a href="haciendaAmbar@gmail.com">haciendaAmbar@gmail.com</a></p>
                                    </div>
                                </div>
                                    <div class="dbox w-100 d-flex align-items-center">
                                        <div class="icon d-flex align-items-center justify-content-center">
                                            <span class="fa fa-globe"></span>
                                        </div>
                                            <div class="text pl-3">
                                                <p><span>facebook:</span> <a href="https://www.facebook.com/ambar.haciendamx">Hacienda Ambar</a></p>
                                                <p><span>instragram:</span> <a href="https://www.instagram.com/ambar.haciendamx/">ambar.haciendamx</a></p>
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

export default ContactView
