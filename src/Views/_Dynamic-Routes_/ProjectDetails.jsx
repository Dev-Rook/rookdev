import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FeaturedData from "../../Components/Data/Project-Data/Featured-Projects/FeaturedData";
import Styles from "../../Styles/Page-Styles/Landing/Landing.module.css";

const ProjectDetails = () => {
  const { id } = useParams();

  const [data, setData] = useState(FeaturedData);
  return (
    <div className={Styles.Details} key={id}>
      {data.title}
      {data &&
        data.map((value) => {
          return (
            <div className={Styles.Container} key={value.id}>
              {value.Title}
            </div>
          );
        })}
    </div>
  );
};

export default ProjectDetails;
