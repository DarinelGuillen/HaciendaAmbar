import React from "react";
import carrusel1 from "../../assets/img/slider1.jpeg"
import carrusel2 from "../../assets/img/slider2.jpeg"
import carrusel3 from "../../assets/img/slider3.jpeg"

function Carrusel() {
    return ( 
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={carrusel1} className="d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img src={carrusel2} className="d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img src={carrusel3} className="d-block w-100" alt="..."></img>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
     );
}

export default Carrusel;