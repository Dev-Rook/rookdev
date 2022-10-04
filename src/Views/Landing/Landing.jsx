import React from "react";
import Styles from "../../Styles/Page-Styles/Landing/Landing.module.css";

import { Link } from "react-router-dom";

import Hero from "../_Page-Sections_/Hero/Hero";
import Featured from "../../Components/Data/Project-Data/Featured-Projects/Featured";
import OtherProjects from "../../Components/Data/Project-Data/Other-Projects/OtherProjects";

const Landing = () => {
  return (
    <div className={Styles.Landing}>
      <Hero />
      <Featured />
      <OtherProjects />

      <div className={Styles.Contact_Implore_Box}>
        <h3 className={Styles.Section_Title}>Want To Get In Touch?</h3>
        <h3 className={Styles.Section_Description}>Join my Discord or shoot me a message VIA contact form.</h3>
        <div className={Styles.Button_Container}>
          <a
            target={"_blank"}
            rel={"noreferrer"}
            href="https://discord.gg/ce7mtCbgmG"
          >
            <div className={Styles.Contact_Button}>Discord</div>
          </a>
          <Link to={"Contact"}>
            <div className={Styles.Contact_Button}>Contact</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
