import React from "react";
import Styles from "../../../Styles/Page-Section-Styles/Hero-Section/Hero.module.css";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InsertLinkIcon from "@mui/icons-material/InsertLink";

// import HeroSlider from "../../Components/Sliders/Hero-Slider/HeroSlider";
import Tech from "../../../Components/Data/Technology-Data/Tech";

const Hero = () => {
  return (
    <div className={Styles.Hero}>
      {/* <HeroSlider /> */}
      <div className={Styles.Content_Box}></div>

      <div className={Styles.Info}>
        <div className={Styles.Info_Section}>
          {/* <h3 className={Styles.Title}>BIO</h3> */}
          <div className={Styles.Bio_Text}>
            Software engineer with 1 year overall Web Development experience. As
            a Junior Web Developer and am versed in: Html, CSS & JavaScript.
            However I am skilled in utilizing React JS with a variety of
            libraries and APIs to solve problems and create websites. Currently
            I am focused on becoming a valuable integration to any team I am on
            to develop projects that align with modern UI/UX standards.
          </div>
        </div>

        <Tech />
      </div>
    </div>
  );
};

export default Hero;
