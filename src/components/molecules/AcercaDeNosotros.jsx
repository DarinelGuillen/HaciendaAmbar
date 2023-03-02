import "../../assets/img/Contactanos.svg";
import "../../assets/style/AcercaDeNosotros.css";

function AcercaDeNosotros() {
  return (
    <div>
      <div className="acercaDeNosotrosTitulo">
        <h1>Acerca De Nosotros</h1>
      </div>
      <div className="padreAcercaDeNosotros">
        <div className="card">
          <div className="info">
            <p className="title">
              Hacienda Ámbar es un complejo turístico ubicado en la Rivera
              Nandayalú del municipio de Suchiapa, Chiapas.
            </p>
            <p>
              La cual ha decidido iniciar su camino en el área de la prestación
              de servicios a través de la celebración de eventos sociales,
              culturales, empresariales y de destino.{" "}
            </p>
          </div>
          <div className="footer">
            <p className="tag">#AciendaAmbar </p>
          </div>
        </div>
      </div>

      <div className="gallery">
        <div className="gallery__img"></div>
        <div className="gallery__img"></div>
        <div className="gallery__img"></div>
        <div className="gallery__img"></div>
        <div className="gallery__img"></div>
        <div className="gallery__img"></div>
      </div>
      <div className="contactanostitulo">
        <h1>Contactanos</h1>
      </div>
      <div className="contactito">
        <div className="contact-form">
          <h6 className="heading">Rellene los campos</h6>
          <form>
            <label>Nombre:</label>
            <input type="text" required=""></input>
            <label>Correo:</label>
            <input type="email" id="email" name="email" required=""></input>
            <label>Número de teléfono:</label>
            <input type="number" required=""></input>
            <label>Mensaje:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Escribe aquí"
              required=""
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      <div>
        <img src="src/assets/img/Contactanos.svg"></img>
      </div>
    </div>
  );
}

export default AcercaDeNosotros;
