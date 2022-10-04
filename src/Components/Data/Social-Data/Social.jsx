import React, { useState } from "react";
import Styles from "../../../Styles/Component-Styles/Social/Social.module.css";

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

import SocialData from "./SocialData";

const Social = () => {
  const [cardData, setCardData] = useState(SocialData);

  return (
    <div className={Styles.Social_Container}>
      <h3 className={Styles.Section_Title}>Social</h3>
      <h2 className={Styles.Section_Description}>Find me on these platforms</h2>
      {cardData.map((Card) => {
        const { id, Image, Name } = Card;

        return (
          <div className={Styles.Card} key={id}>
            <div className={Styles.Imgae__Title_Container}>
              <div className={Styles.Image_Container}>
                <img src={Image} alt="" className={Styles.Social_Image} />
              </div>
              <h3 className={Styles.Name}>{Name}</h3>
            </div>

            <div className={Styles.Social_Button}>View</div>
          </div>
        );
      })}
    </div>
  );
};

export default Social;
