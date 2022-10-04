import React, { useState } from "react";
import Styles from "../../../Styles/Swiper-Styles/Social/SocialSlider.module.css";

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

import SocialData from "./SocialData";

const SocialSlider = () => {
  const [cardData, setCardData] = useState(SocialData);

  return (
    <div className={Styles.Social_Container}>
      <h3 className={Styles.Slider_Title}>Social</h3>
      <h2 className={Styles.Section_Description}>Find me on these platforms</h2>
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
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            width: 480,
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            width: 768,
            slidesPerView: 3,
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
          const { id, Name, Image, Description, Stacks, Links } = slide;

          return (
            <SwiperSlide className={Styles.Slide}>
              <div className={Styles.Social_Card_Container} key={id}>
                <div className={Styles.Image_Container}>
                  <img src={Image} alt="" className={Styles.Experience_Image} />
                </div>

                <h3 className={Styles.Name}>{Name}</h3>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SocialSlider;
