import React from 'react'
const Slider = () => {
    return (
        <div>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="./Image/slider-1.png" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="./Image/slider-2.png" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="./Image/slider-3.png" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="./Image/slider-4.png" class="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider
