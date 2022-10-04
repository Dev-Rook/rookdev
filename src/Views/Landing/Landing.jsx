import React from "react";
import Styles from "../../Styles/Page-Styles/Landing/Landing.module.css";

import { Link } from "react-router-dom";

import Hero from "../_Page-Sections_/Hero/Hero";
import Featured from "../../Components/Data/Project-Data/Featured-Projects/Featured";
import OtherProjects from "../../Components/Data/Project-Data/Other-Projects/OtherProjects";
import Experience from "../../Components/Data/Experience-Data/Experience";
import Social from "../../Components/Data/Social-Data/Social";

const Landing = () => {
  return (
    <div className={Styles.Landing}>
      {/* <Hero /> */}

      <h3 className={Styles.Page_Title}>Dashboard</h3>
      <Featured />
      <OtherProjects />
      <Experience />
      <Social />

      <div className={Styles.Contact_Implore_Box}>
        <h3 className={Styles.Section_Title}>Get In Touch?</h3>
        <h3 className={Styles.Section_Description}>
          Join my Discord or shoot me a message VIA contact form.
        </h3>
        <div className={Styles.Button_Container}>
          <a
            target={"_blank"}
            rel={"noreferrer"}
            href="https://discord.gg/ce7mtCbgmG"
          >
            <div
              className={`${Styles.Contact_Button} ${Styles.Discord__Button}`}
            >
              Discord
            </div>
          </a>
          <Link to={"Contact"}>
            <div
              className={`${Styles.Contact_Button} ${Styles.Contact__Button}`}
            >
              Contact
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
