import React, { useState } from "react";
import Styles from "../../../Styles/Swiper-Styles/Technology/Tech.module.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Autoplay, Mousewheel } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import "swiper/css/effect-fade ";

import TechData from "./TechData";

const Tech = () => {
  const [cardData, setCardData] = useState(TechData);
  return (
    <div className={Styles.Technology_Container}>
      <h3 className={Styles.Slider_Title}>Technology</h3>

      <Swiper
        speed={800}
        modules={[Navigation, FreeMode, Mousewheel, Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        loop
        pagination={{
          dynamicBullets: true,
        }}
        mousewheel={true}
        className={Styles.Swiper}
        breakpoints={{
          360: {
            width: 360,
            slidesPerView: 1,
            spaceBetween: 10,
          },
          380: {
            width: 380,
            slidesPerView: 1.2,
            spaceBetween: 10,
          },
          480: {
            width: 480,
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          768: {
            width: 768,
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1920: {
            width: 1920,
            slidesPerView: 5,
            spaceBetween: 0,
          },
        }}
      >
        {cardData.map((slide) => {
          const { id, Title, Image, Description, Stacks, Links } = slide;

          return (
            <SwiperSlide className={Styles.Slide}>
              <div className={Styles.Card} key={id}></div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Tech;
