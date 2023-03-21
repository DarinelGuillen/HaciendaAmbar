import "../../assets/style/BannerStyle.css"

function FormContactUs() {
    return ( 
        <>
            <section className="py-4 py-xl-5">
                <div className="container">
                    <h2 className="fs-1 text-center mb-4 titulo5Mandamientos">Contactanos</h2>
                    <form method="post">
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input className="form-control" type="text" id="name-2" name="name" placeholder="Nombre"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Correo</label>
                            <input className="form-control" type="email" id="email-1" name="email" placeholder="Correo"/></div>
                        <div className="mb-3">
                            <label className="form-label">Número Telefónico</label>
                            <input className="form-control" type="number" placeholder="Número Telefónico"/>
                        </div>
                        <div className="mb-3">
                            <div className="dropdown"><button className="btn btn-primary dropdown-toggle" aria-expanded="false" data-bs-toggle="dropdown" type="button">Tipo de paquete</button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="">Entelado y Set de fotos.</a>
                                    <a className="dropdown-item" href="">Paquete Básico 200.</a>
                                    <a className="dropdown-item" href="">Paquete platinum 200.</a>
                                    <a className="dropdown-item" href="">Sesiones Fotógraficas.</a>
                                    <a className="dropdown-item" href="">Paquete Gold 200.</a>
                                    <a className="dropdown-item" href="">Albercazo Ámbar.</a>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <textarea className="form-control" id="message-2" name="message" rows="6" placeholder="Mensaje"></textarea>
                        </div>
                        <div>
                            <button className="btn btn-primary d-block w-100" type="submit">Enviar</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
     );
}

export default FormContactUs;