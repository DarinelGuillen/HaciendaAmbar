import "../../assets/style/AboutUsContent.css"
import "../../assets/img/imgAboutUsUnsplash.jpg"

function AboutUsContent() {
    return ( 
        <>
            {/* <div className="row">
                <div className="col-md-4">
                    <img src="src/assets/img/iconoAboutUsObjetivo.svg" className="img-fluid"/>
                    <h4 className="text-center">Objetivo</h4>
                    <p>Ser la primera opción de los clientes que buscan una hacienda para eventos en la región, ofreciendo un servicio diferenciado y personalizado que genere confianza y fidelidad, y contribuyendo al éxito de los eventos de nuestros clientes a través de la excelencia en la planificación y ejecución de cada evento. Además, buscamos mantener un equilibrio entre la rentabilidad y la satisfacción del cliente, para asegurar la sostenibilidad de nuestro negocio a largo plazo.</p>
                </div>
                <div className="col-md-4">
                    <img src="img/mision.jpg" className="img-fluid"/>
                    <h4 className="text-center">Misión</h4>
                    <p>Proporcionar a nuestros clientes una experiencia única y personalizada en la organización de sus eventos, ofreciendo un servicio integral que cubra todas las necesidades de los clientes, desde la planificación hasta la ejecución, y siempre con un enfoque en la satisfacción del cliente.</p>
                </div>
                <div className="col-md-4">
                    <img src="img/vision.jpg" className="img-fluid"/>
                    <h4 className="text-center">Visión</h4>
                    <p>Ser la hacienda para eventos líder en la región, reconocida por la excelencia en el servicio al cliente, la calidad de sus instalaciones y la organización de eventos memorables.</p>
                </div>
            </div> */}

            {/* <!-- ======= About Us Section ======= --> */}
            <section id="about" className="about">
            <div className="container segundaSecAbout1">

                <div className="section-title" data-aos="fade-up">
                <h2>Acerca de nosotros</h2>
                </div>

                <div className="row content">
                <div className="col-lg-6" data-aos="fade-up" data-aos-delay="150">
                    <p>
                        Hacienda Ámbar es un complejo turístico ubicado en la Rivera Nandayalú del municipio de Suchiapa, Chiapas.
                    </p>
                    <br/>
                        <p>
                            Puntos clave con el fin de brindarte mejores experiencias Ambar:
                        </p>
                    <br/>
                    <ul>
                    <li>- Fácil acceso.</li>
                    <li>- Alta disponibilidad.</li>
                    <li>- Ubicado en zona turística.</li>
                    <li>- Somos patrocinados por canales en Chiapas.</li>
                    <li>- Retroalimentación de quejas o sugerencias con el fin de mejorar día con día.</li>
                    </ul>
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0" data-aos="fade-up" data-aos-delay="300">
                    <p>
                        La cual ha decidido iniciar su camino en el área de la prestación de servicios a través de la celebración de eventos sociales, culturales, empresariales y de destino.
                    </p>
                    <a href="https://www.facebook.com/ambar.haciendamx/photos" className="btn-learn-more">Conocenos en Facebook</a>
                </div>
                </div>

            </div>
            </section>{/* <!-- End About Us Section --> */}

            {/* <!-- ======= Counts Section ======= --> */}
            <section id="counts" className="counts">
            <div className="container segundaSecAbout2">
                <div className="row">
                    <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start" data-aos="fade-right" data-aos-delay="150">
                        <img src="src/assets/img/imgAboutUsUnsplash.jpg" alt="" className="img-fluid imgAboutUsUnsplash"/>
                    </div>
                        <div className="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0" data-aos="fade-left" data-aos-delay="300">
                            <div className="content d-flex flex-column justify-content-center">
                                <div className="row">
                                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                                        <div className="count-box">
                                            <i className="bi bi-emoji-smile"></i>
                                            <span data-purecounter-start="0" data-purecounter-end="65" data-purecounter-duration="1" className="purecounter"></span>
                                            <p><strong>Clientes felices</strong> brindamos los mejores momentos en tus eventos.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                                        <div className="count-box">
                                            <i className="bi bi-journal-richtext"></i>
                                            <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="1" className="purecounter"></span>
                                            <p><strong>Proyectos futuros</strong> en Hacienda Ambar es ser un complejo que sea auto sustentable.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                                        <div className="count-box">
                                            <i className="bi bi-clock"></i>
                                            <span data-purecounter-start="0" data-purecounter-end="18" data-purecounter-duration="1" className="purecounter"></span>
                                            <p><strong>Prioridad de</strong> ser uno de los lugares más turísticos de Suchiapa.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                                        <div className="count-box">
                                            <i className="bi bi-award"></i>
                                            <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" className="purecounter"></span>
                                            <p><strong>Experiencia</strong> de alta calidad y servicios estandarizados a tu presupuesto.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* <!-- End .content--> */}
                        </div>
                    </div>
                </div>
            </section>{/* <!-- End Counts Section --> */}

            {/* <!-- The best Team --> */}
            <div className="container bootdey">
                <div className="row">
                    <div className="col-12 text-center">
                        <div className="section-title mb-4 pb-2">
                            <h4 className="title mb-4">Team</h4>
                            <p className="text-muted para-desc mx-auto mb-0">Equipo encargado en la construcción del aplicativo web</p>
                        </div>
                    </div>{/* <!--end col--> */}
                </div>{/* <!--end row--> */}

                <div className="row">
                    <div className="col-lg-4 col-md-12 col-12 mt-4 pt-2">
                        <div className="team text-center rounded p-3 py-4">
                            <img src="src/assets/img/nanio.png" className="img-fluid avatar avatar-medium shadow rounded-pill" alt=""/>
                            <div className="content mt-3">
                                <h4 className="title mb-0">Darío Antonio Gutiérrez Álvarez</h4>
                                <small className="text-muted">Product Owner</small>
                                <ul className="list-unstyled mt-3 social-icon social mb-0">
                                    <li className="list-inline-item"><a href="https://www.facebook.com/dario.gutierrezalvares" className="rounded"><i className="mdi mdi-facebook" title="Facebook"></i></a></li>
                                    <li className="list-inline-item"><a href="https://www.instagram.com/nanio.getelementbyid/" className="rounded"><i className="mdi mdi-instagram" title="Instagram"></i></a></li>
                                    <li className="list-inline-item"><a href="https://twitter.com/DaroAntonioGut2" className="rounded"><i className="mdi mdi-twitter" title="Twitter"></i></a></li>
                                    <li className="list-inline-item"><a href="https://mail.google.com/mail/u/0/?pli=1#search/221245%40ids.upchiapas.edu.mx" className="rounded"><i className="mdi mdi-google-plus" title="Google +"></i></a></li>
                                    <li className="list-inline-item"><a href="https://www.linkedin.com/in/dario-antonio-gutierrez-alvarez-41353a225/" className="rounded"><i className="mdi mdi-linkedin" title="Linkedin"></i></a></li>
                                </ul>{/* <!--end icon--> */}
                            </div>
                        </div>
                    </div>{/* <!--end col nanio--> */}
                    
                    <div className="col-lg-4 col-md-12 col-12 mt-4 pt-2">
                        <div className="team text-center rounded p-3 py-4">
                            <img src="src/assets/img/menin.png" className="img-fluid avatar avatar-medium shadow rounded-pill" alt=""/>
                            <div className="content mt-3">
                                <h4 className="title mb-0">José Ángel Ortega Merlin</h4>
                                <small className="text-muted">Master Scrum</small>
                                <ul className="list-unstyled mt-3 social-icon social mb-0">
                                    <li className="list-inline-item"><a href="https://www.facebook.com/Zurdo.Angel.xMerlin" className="rounded"><i className="mdi mdi-facebook" title="Facebook"></i></a></li>
                                    <li className="list-inline-item"><a href="https://www.instagram.com/angelxmxx/" className="rounded"><i className="mdi mdi-instagram" title="Instagram"></i></a></li>
                                    <li className="list-inline-item"><a href="https://twitter.com/angelxmxxx" className="rounded"><i className="mdi mdi-twitter" title="Twitter"></i></a></li>
                                    <li className="list-inline-item"><a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#search/221255%40ids.upchiapas.edu.mx?compose=new" className="rounded"><i className="mdi mdi-google-plus" title="Google +"></i></a></li>
                                    <li className="list-inline-item"><a href="https://www.linkedin.com/in/jose-angel-ortega-merlin-a6153b225/" className="rounded"><i className="mdi mdi-linkedin" title="Linkedin"></i></a></li>
                                </ul>{/* <!--end icon--> */}
                            </div>
                        </div>
                    </div>{/* <!--end col--> */}
                    
                    <div className="col-lg-4 col-md-12 col-12 mt-4 pt-2">
                        <div className="team text-center rounded p-3 py-4">
                            <img src="src/assets/img/naninel.png" className="img-fluid avatar avatar-medium shadow rounded-pill" alt=""/>
                            <div className="content mt-3">
                                <h4 className="title mb-0">Christian Darinel Escobar Guillen</h4>
                                <small className="text-muted">Scrum Team</small>
                                <ul className="list-unstyled mt-3 social-icon social mb-0">
                                    <li className="list-inline-item"><a href="https://www.facebook.com/darinel.escobar.716" className="rounded"><i className="mdi mdi-facebook" title="Facebook"></i></a></li>
                                    <li className="list-inline-item"><a href="https://www.instagram.com/darinelescobar_5775/" className="rounded"><i className="mdi mdi-instagram" title="Instagram"></i></a></li>
                                    <li className="list-inline-item"><a href="https://twitter.com/ESCOBARGUILLEN1" className="rounded"><i className="mdi mdi-twitter" title="Twitter"></i></a></li>
                                    <li className="list-inline-item"><a href="https://mail.google.com/mail/u/0/?pli=1#search/221192%40ids.upchiapas.edu.mx?compose=new" className="rounded"><i className="mdi mdi-google-plus" title="Google +"></i></a></li>
                                    <li className="list-inline-item"><a href="https://www.linkedin.com/feed/" className="rounded"><i className="mdi mdi-linkedin" title="Linkedin"></i></a></li>
                                </ul>{/* <!--end icon--> */}
                            </div>
                        </div>
                    </div>{/* <!--end col--> */}
                </div>{/* <!--end row--> */}
            </div>
        </>
     );
}

export default AboutUsContent;