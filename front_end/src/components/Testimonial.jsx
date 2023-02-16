import React from 'react'
// import Slider from 'react-slick'
import { data } from '../reviews'
import Feed_back from './Feed_back';

import Slider from 'react-carousel-responsive';
import 'react-carousel-responsive/dist/styles.css';
import '../css/Feed_back.css'
function Testimonial() {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        mobileFirst: true,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        className: 'slides',
    };
    return (
        <div className='testimonial-main'>

            <Slider>

                {data.map((ele, index) => (

                     <div className='slider-inner'>
                    < Feed_back { ...ele } key = { index } />
                    </div> 


                ))}





            </Slider>


        </div>
    )
}

export default Testimonial