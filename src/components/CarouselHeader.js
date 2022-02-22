import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styleCarouselHeader.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={process.env.PUBLIC_URL + `/image/banner/pruebabanner2.jpg`} alt=".." />
                </SwiperSlide>
                <SwiperSlide>
                <img src={process.env.PUBLIC_URL + `/image/banner/pruebabanner3.jpg`} alt=".." />
                </SwiperSlide>
                
            </Swiper>
        </>
    );
}
