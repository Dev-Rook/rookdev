import React, { useState } from "react";
import Styles from "../../../../Styles/Pagination-Styles/General/Pagination.module.css";

// Material UI Imports Start

import CodeIcon from "@mui/icons-material/Code";
import HttpIcon from "@mui/icons-material/Http";
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

// Material UI Imports End

import FeaturedData from "./FeaturedData";

const Featured = () => {
  const [cardData, setCardData] = useState(FeaturedData);
  const [visible, setVisible] = useState(3);
  const [showLessButton, setShowLessButton] = useState(false);

  const showMoreCards = () => {
    setVisible((Cards) => Cards + 3);
  };

  const unPaginate = () => {
    setShowLessButton((prev) => !prev);
  };

  const doubleFunction = () => {
    showMoreCards();
    unPaginate();
  };

  const showLessCards = () => {
    setVisible((Cards) => Cards - 3);
  };

  return (
    <div className={Styles.Paginate_Container}>
      <h2 className={Styles.Section_Title}>Projects</h2>
      <h2 className={Styles.Section_Description}>These are a handful featured projects</h2>
      {cardData.slice(0, visible).map((Card) => {
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

      <div className={Styles.Card_Control_Box}>
        <div onClick={doubleFunction} className={Styles.Show_More_Button}>
          Show More
          {/* <KeyboardArrowRightIcon sx={{ color: "#e3b261", fontSize: 30 }} /> */}
        </div>

        <div
          onClick={showLessCards}
          className={`${Styles.Show_Less_Button} ${
            showLessButton ? Styles.ShowLessButton : ""
          }`}
        >
          {/* Show Less */}
          <KeyboardArrowUpIcon sx={{ color: "#e3b261", fontSize: 30 }} />
        </div>
      </div>
    </div>
  );
};

export default Featured;
