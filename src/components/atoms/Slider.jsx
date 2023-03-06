import React from "react";
import estilos from "../../assets/style/Slider.module.css";

function Slider({ imagenes }) {
  // Variables y Estados
  const [imagenActual, setImagenActual] = React.useState(0);
  const cantidad = imagenes?.length;

  // Return prematuro para evitar errores
  if (!Array.isArray(imagenes) || cantidad === 0) return;

  const siguienteImagen = () => {
    setImagenActual(imagenActual === cantidad - 1 ? 0 : imagenActual + 1);
  };

  const anteriorImagen = () => {
    setImagenActual(imagenActual === 0 ? cantidad - 1 : imagenActual - 1);
  };

  return (
    <div className={estilos.contCarrusel}>
      <button className={estilos.buttonSlider1} onClick={anteriorImagen}>
        ←
      </button>
      <div className={estilos.container}>
        {imagenes.map((imagen, index) => {
          return (
            <div
              key={index}
              className={
                imagenActual === index
                  ? `${estilos.slide} ${estilos.active}`
                  : estilos.slide
              }
            >
              {imagenActual === index && (
                <img
                  loading="lazy"
                  className={estilos.imgSlider}
                  src={imagen}
                  alt="imagen"
                />
              )}
            </div>
          );
        })}
      </div>
      <button className={estilos.buttonSlider2} onClick={siguienteImagen}>
        →
      </button>
    </div>
  );
}

export default Slider;
