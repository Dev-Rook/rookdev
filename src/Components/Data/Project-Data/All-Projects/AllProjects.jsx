import React, { useState } from "react";
import Styles from "../../../../Styles/Pagination-Styles/General/Pagination.module.css";

// Material UI Imports Start

import CodeIcon from "@mui/icons-material/Code";
import HttpIcon from "@mui/icons-material/Http";
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

// Material UI Imports End

import AllProjectData from "./AllProjectData";

const AllProjects = () => {
  const [cardData, setCardData] = useState(AllProjectData);
  const [showLessButton, setShowLessButton] = useState(false);

  return (
    <div className={Styles.Paginate_Container}>
      {cardData.map((Card) => {
        const { id, Image, Title, Description, Stacks, Links } = Card;

        return (
          <div className={Styles.Card} key={id}>
            <div className={Styles.Imgae_Container}>
              <img
                src={Image}
                alt={"WebsiteImage"}
                className={Styles.Website_Image}
              />
            </div>
            <div className={Styles.Website_Information_Box}>
              <h3 className={Styles.Website_Title}>{Title}</h3>
              <div className={Styles.Website_Description}>{Description}</div>
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
        );
      })}
    </div>
  );
};

export default AllProjects;
