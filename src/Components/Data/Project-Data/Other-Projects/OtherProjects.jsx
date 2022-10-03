import React, { useState } from "react";
import Styles from "../../../../Styles/Swiper-Styles/Other-Projects/OtherProjects.module.css";

// Material UI Imports Start

import CodeIcon from "@mui/icons-material/Code";
import HttpIcon from "@mui/icons-material/Http";
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

// Material UI Imports End

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

import OtherProjectsData from "./OtherProjectsData";

const OtherProjects = () => {
  const [cardData, setCardData] = useState(OtherProjectsData);

  return (
    <div className={Styles.Other_Projects_Container}>
      <h3 className={Styles.Slider_Title}>Other Projects</h3>
      <h2 className={Styles.Section_Description}>These are a other projects I have worked on or is still in development.</h2>
      <Swiper
        speed={800}
        modules={[Navigation, FreeMode, Mousewheel, Autoplay]}
        autoplay={{
          delay: 2500,
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
              <div className={Styles.Card} key={id}>
                <div className={Styles.Imgae__Title_Container}>
                  <div className={Styles.Image_Container}>
                    <img
                      src={Image}
                      alt={"WebsiteImage"}
                      className={Styles.Website_Image}
                    />
                  </div>
                  <h3 className={Styles.Website_Title}>{Title}</h3>
                </div>
                <div className={Styles.Website_Information_Box}>
                  <div className={Styles.Website_Description}>
                    {Description}
                  </div>
                  <div className={Styles.Stack_Container}>
                    <div className={Styles.Stack}>{Stacks.Stack1}</div>
                    <div className={Styles.Stack}>{Stacks.Stack2}</div>
                    <div className={Styles.Stack}>{Stacks.Stack3}</div>
                    <div className={Styles.Stack}>{Stacks.Stack4}</div>
                    <div className={Styles.Stack}>{Stacks.Stack5}</div>
                  </div>
                </div>
                <div className={Styles.Links_Container}>
                  <a
                    href={Links.Code}
                    target={"_blank"}
                    rel={"noreferrer"}
                    className={`${Styles.Link} ${Styles.Code_Background}`}
                  >
                    <CodeIcon sx={{ color: "#2c7a7b", fontSize: 30 }} />
                  </a>
                  <a
                    href={Links.Demo}
                    target={"_blank"}
                    rel={"noreferrer"}
                    className={`${Styles.Link} ${Styles.Demo_Background}`}
                  >
                    <HttpIcon sx={{ color: "#e3b261", fontSize: 30 }} />
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

export default OtherProjects;
