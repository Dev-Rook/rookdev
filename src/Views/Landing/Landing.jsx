import React from "react";
import Styles from "../../Styles/Page-Styles/Landing/Landing.module.css";

import Hero from "../_Page-Sections_/Hero/Hero";
import Featured from "../../Components/Data/Project-Data/Featured-Projects/Featured";
import OtherProjects from "../../Components/Data/Project-Data/Other-Projects/OtherProjects";

const Landing = () => {
  return (
    <div className={Styles.Landing}>
      <Hero />
      <Featured />
      <OtherProjects />
    </div>
  );
};

export default Landing;
