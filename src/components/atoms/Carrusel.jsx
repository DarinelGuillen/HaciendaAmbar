import React from "react";
import "../../assets/img/slider1.jpeg"
import "../../assets/img/slider2.jpeg"
import "../../assets/img/slider3.jpeg"

function Carrusel() {
    return ( 
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="src/assets/img/slider1.jpeg" className="d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img src="src/assets/img/slider2.jpeg" className="d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img src="src/assets/img/slider3.jpeg" className="d-block w-100" alt="..."></img>
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