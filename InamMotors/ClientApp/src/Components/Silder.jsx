/* eslint-disable */
import React from 'react';
// import slide1 from '../dummy/slide-2.jpg'
// import slide2 from '../dummy/slide-2.jpg'
// import slide3 from '../dummy/slide-3.jpg'

function Slider() {
    return (
        <div className="hero hero-slider">
        <ul className="slides">
            <li classNameName="slide1">
                <div className="container">
                    <h2 className="slide-title">Place the header here</h2>
                    <p className="slide-desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, <br /> totam rem aperiam eaque ipsa quae ab illo inventore veritatis.</p>
                    <a href="/" className="button">Read more</a>
                </div>
            </li>
            {/* <li data-bg-image={slide2}>
                <div className="container">
                    <h2 className="slide-title">Place the slide 2 header here</h2>
                    <p className="slide-desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, <br /> totam rem aperiam eaque ipsa quae ab illo inventore veritatis.</p>
                    <a href="/" className="button">Read more</a>
                </div>
            </li>
            <li data-bg-image={slide3}>
                <div className="container">
                    <h2 className="slide-title">Place third slide header here</h2>
                    <p className="slide-desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, <br /> totam rem aperiam eaque ipsa quae ab illo inventore veritatis.</p>
                    <a href="/" className="button" >Read more</a>
                </div>
            </li> */}
        </ul>
    </div>
    );
}

export default Slider;
