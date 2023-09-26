import React from 'react'
const Slider = () => {
    return (
        <div>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="./Image/slider-1.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="./Image/slider-2.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="./Image/slider-3.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="./Image/slider-4.png" className="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider
