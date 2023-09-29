import React, { useState, useEffect } from 'react';

const Customer = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            // Calculate the index of the next slide
            const nextIndex = (activeIndex + 1) % 3;
            setActiveIndex(nextIndex);
        }, 5000); // Change slide every 5 seconds (5000 milliseconds)

        // Cleanup the interval on component unmount
        return () => clearInterval(intervalId);
    }, [activeIndex]);

    return (
        <div>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className={`carousel-item ${activeIndex === 0 ? 'active' : ''}`}>
                        <div class="card mb-3">
                            <div class="row g-0 bg text-white">
                                <div class="col-lg-4 d-flex justify-content-center p-4">
                                    <img src="/Image/fxmallen.webp" class="rounded-circle" alt="..."/>
                                </div>
                                <div class="col-lg-8 mt-5 ps-5">
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p class="card-text"><small class="text-body-white">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`}>
                        <div class="card mb-3">
                            <div class="row g-0 bg text-white">
                                <div class="col-lg-4 d-flex justify-content-center p-4">
                                    <img src="/Image/johann.webp" class="rounded-circle" alt="..."/>
                                </div>
                                <div class="col-lg-8 mt-5 ps-5">
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p class="card-text"><small class="text-body-white">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`carousel-item ${activeIndex === 2 ? 'active' : ''}`}>
                        <div class="card mb-3">
                            <div class="row g-0 bg text-white">
                                <div class="col-lg-4 d-flex justify-content-center p-4">
                                    <img src="/Image/lawal.webp" class="rounded-circle" alt="..."/>
                                </div>
                                <div class="col-lg-8 mt-5 ps-5">
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p class="card-text"><small class="text-body-white">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customer;
