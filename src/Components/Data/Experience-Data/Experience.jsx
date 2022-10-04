import React, { useState } from "react";
import Styles from "../../../Styles/Swiper-Styles/Experience/Experience.module.css";

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

import ExperienceData from "./ExperienceData";

const Experience = () => {
  const [cardData, setCardData] = useState(ExperienceData);

  return (
    <div className={Styles.Experience_Container}>
      <h3 className={Styles.Slider_Title}>Experience</h3>
      <h2 className={Styles.Section_Description}>
        These are a companies that I have worked at/for
      </h2>
      <Swiper
        speed={800}
        modules={[Navigation, FreeMode, Mousewheel, Autoplay]}
        autoplay={{
          delay: 3000,
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
          const { id, Name, Image, Description, Links } = slide;

          return (
            <SwiperSlide className={Styles.Slide}>
              <div className={Styles.Experience_Card_Container} key={id}>
                <div className={Styles.Image_Container}>
                  <img src={Image} alt="" className={Styles.Experience_Image} />
                </div>

                <h3 className={Styles.Company_Name}>{Name}</h3>

                <div className={Styles.Company_Description}>{Description}</div>

                <div className={Styles.Link_Container}>
                  <a
                    target={"_blank"}
                    rel={"noreferrer"}
                    href={Links.Website}
                    className={Styles.Link}
                  >
                    Website
                  </a>
                  <a
                    target={"_blank"}
                    rel={"noreferrer"}
                    href={Links.LinkedIn}
                    className={Styles.Link}
                  >
                    LinkedIn
                  </a>
                  <a
                    target={"_blank"}
                    rel={"noreferrer"}
                    href={Links.Twitter}
                    className={Styles.Link}
                  >
                    Twitter
                  </a>
                  <a
                    target={"_blank"}
                    rel={"noreferrer"}
                    href={Links.YouTube}
                    className={Styles.Link}
                  >
                    YouTube
                  </a>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Experience;
