import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function App(props) {

    return (
        <>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                /*   loop={true} */
                /*loopFillGroupWithBlank={true} */
                /*    coverflowEffct={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }} */
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {props.cities.map((city) => {
                    return (
                        <>
                            <SwiperSlide key={`${city._id}+a`}>
                                <img src={process.env.PUBLIC_URL + `/image/cities/${city.name}/${city.images.banner2}`} alt={city.name} />
                            </SwiperSlide>
                        </>
                    )
                })}
            </Swiper>
        </>
    );
}
