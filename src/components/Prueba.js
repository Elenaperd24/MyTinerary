import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "./styles.css";

export default function App(data) {
    const cities = data.data
    return (
        <>
            <Swiper className="mySwiper">
                {cities.map((city) => {
                    return (
                        <>
                            <SwiperSlide>
                            <img src={process.env.PUBLIC_URL + `/image/cities/${city.name}/${city.images.banner2}`} alt={city.name} />
                            </SwiperSlide>
                           
                        </>
                    )
                })}
            </Swiper>
        </>
    );
}
