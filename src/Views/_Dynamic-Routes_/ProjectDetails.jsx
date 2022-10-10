import React from "react";
import { useParams } from "react-router-dom";
import FeaturedData from "../../Components/Data/Project-Data/Featured-Projects/FeaturedData";
import Styles from "../../Styles/Page-Styles/Landing/Landing.module.css";

const ProjectDetails = () => {
  const { id } = useParams();
  console.log(useParams)

  return (
    <div className={Styles.Details}>
      <p>id: {id}</p>
    </div>
  );
};

export default ProjectDetails;
