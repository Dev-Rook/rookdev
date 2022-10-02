import React from "react";
import Styles from "../../../Styles/Page-Section-Styles/Hero-Section/Hero.module.css";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InsertLinkIcon from "@mui/icons-material/InsertLink";

// import HeroSlider from "../../Components/Sliders/Hero-Slider/HeroSlider";

const Hero = () => {

  console.log(String.raw `Hello\nWorld`);


  return (
    <div className={Styles.Hero}>
      {/* <HeroSlider /> */}
      {/* <div className={Styles.Hero_Board}></div> */}
      <div className={Styles.Content_Box}>
        <p className={Styles.Small_Text}>Hi, I'm</p>
        <div className={Styles.Large_Text}>
          Daniel <span className={Styles.Red_R}>R</span>ook
        </div>
        <p className={Styles.Small_Text}>React Developer</p>
        {/* <button className={Styles.Contact_Button}>Contact</button> */}
      </div>

      <div className={Styles.Info}>
        <div className={Styles.Info_Section}>
          <h3 className={Styles.Title}>BIO</h3>
          <div className={Styles.Bio_Text}>
            Software engineer with 1 year overall Web Development experience. As
            a Junior Web Developer and am versed in: Html, CSS & JavaScript.
            However I am skilled in utilizing React JS with a variety of
            libraries and APIs to solve problems and create websites. Currently
            I am focused on becoming a valuable integration to any team I am on
            to develop projects that align with modern UI/UX standards.
          </div>
        </div>

        <div className={Styles.Info_Section}>
          <h3 className={Styles.Title}>On The Web</h3>
          <div className={Styles.Web_Profiles}>
            <a
              target={"_blank"}
              rel={"noreferrer"}
              href="https://www.linkedin.com/in/dev-rook/"
              className={Styles.WebLink}
            >
              <LinkedInIcon />
              Daniel Brown
            </a>
            <a
              target={"_blank"}
              rel={"noreferrer"}
              href="https://github.com/Dev-Rook"
              className={Styles.WebLink}
            >
              <GitHubIcon />
              Dev-Rook
            </a>
            <a
              target={"_blank"}
              rel={"noreferrer"}
              href="https://twitter.com/Dev_Rook"
              className={Styles.WebLink}
            >
              <TwitterIcon />
              Dev_Rook
            </a>
            <a
              target={"_blank"}
              rel={"noreferrer"}
              href="https://rxresu.me/dev.rook121/developer-resume"
              className={Styles.WebLink}
            >
              <InsertLinkIcon />
              Developer Resume
            </a>
          </div>
        </div>

        <div className={Styles.Info_Section}>
          <h3 className={Styles.Title}>Technologies Used</h3>
          <div className={Styles.Tech}>
            <div className={Styles.Tech_Card}>
              <img
                src={`https://github.com/Dev-Rook/portfolio/blob/master/src/Assets/Icons/Html-Icon.png?raw=true`}
                alt=""
                className={Styles.Tech_Image}
              />
            </div>
            <div className={Styles.Tech_Card}>
              <img
                src={`https://github.com/Dev-Rook/portfolio/blob/master/src/Assets/Icons/Css-Icon.png?raw=true`}
                alt=""
                className={Styles.Tech_Image}
              />
            </div>
            <div className={Styles.Tech_Card}>
              <img
                src={`https://github.com/Dev-Rook/portfolio/blob/master/src/Assets/Icons/Scss-Icon.png?raw=true`}
                alt=""
                className={Styles.Tech_Image}
              />
            </div>
            <div className={Styles.Tech_Card}>
              <img
                src={`https://github.com/Dev-Rook/portfolio/blob/master/src/Assets/Icons/JavaScript-Icon.png?raw=true`}
                alt=""
                className={Styles.Tech_Image}
              />
            </div>
            <div className={Styles.Tech_Card}>
              <img
                src={`https://github.com/Dev-Rook/portfolio/blob/master/src/Assets/Icons/React-Icon.png?raw=true`}
                alt=""
                className={Styles.Tech_Image}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;