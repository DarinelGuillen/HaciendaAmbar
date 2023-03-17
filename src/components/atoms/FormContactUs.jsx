import "../../assets/style/BannerStyle.css"

function FormContactUs() {
    return ( 
        <>
            <section class="py-4 py-xl-5">
                <div class="container">
                    <h2 class="text-center mb-4 titulo5Mandamientos">Contactanos</h2>
                    <form method="post">
                        <div class="mb-3">
                            <label class="form-label">Nombre</label>
                            <input class="form-control" type="text" id="name-2" name="name" placeholder="Nombre"/>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Correo</label>
                            <input class="form-control" type="email" id="email-1" name="email" placeholder="Correo"/></div>
                        <div class="mb-3">
                            <label class="form-label">Numero Telefónico</label>
                            <input class="form-control" type="number" placeholder="Numero Telefónico"/>
                        </div>
                        <div class="mb-3">
                            <div class="dropdown"><button class="btn btn-primary dropdown-toggle" aria-expanded="false" data-bs-toggle="dropdown" type="button">Tipo de paquete</button>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="">Entelado y Set de fotos.</a>
                                    <a class="dropdown-item" href="">Paquete Básico 200.</a>
                                    <a class="dropdown-item" href="">Paquete platinum 200.</a>
                                    <a class="dropdown-item" href="">Sesiones Fotógraficas.</a>
                                    <a class="dropdown-item" href="">Paquete Gold 200.</a>
                                    <a class="dropdown-item" href="">Albercazo Ámbar.</a>
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <textarea class="form-control" id="message-2" name="message" rows="6" placeholder="Mensaje"></textarea>
                        </div>
                        <div>
                            <button class="btn btn-primary d-block w-100" type="submit">Enviar</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
     );
}

export default FormContactUs;