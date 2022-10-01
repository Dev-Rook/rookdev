import React, { useState } from "react";
import Styles from "../../../../Styles/Pagination-Styles/General/Pagination.module.css";

import FeaturedData from "./FeaturedData";

const Featured = () => {
  const [cardData, setCardData] = useState(FeaturedData);
  const [visible, setVisible] = useState(3);

  const showMoreCards = () => {
    setVisible((Cards) => Cards + 3);
  };

  return (
    <div className={Styles.Paginate_Container}>
      {cardData.slice(0, 3).map((Card) => {
        const { id, Image, Title, Description, Stacks, Links } = Card;

        return (
          <div className={Styles.Card}>
            <div className={Styles.Imgae_Container}>
              <img
                src={Image}
                alt={"WebsiteImage"}
                className={Styles.Website_Image}
              />
            </div>
            <div className={Styles.Website_Information_Box}>
              <h3 className={Styles.Website_Title}>{Title}</h3>
              <p className={Styles.Website_Description}>{Description}</p>
              <div className={Styles.Stack_Container}>
                <div className={Styles.Stack}>{Stacks.Stack1}</div>
                <div className={Styles.Stack}>{Stacks.Stack1}</div>
                <div className={Styles.Stack}>{Stacks.Stack1}</div>
                <div className={Styles.Stack}>{Stacks.Stack1}</div>
                <div className={Styles.Stack}>{Stacks.Stack1}</div>
              </div>
              <div className={Styles.Links_Container}>
                <a
                  href={Links.Code}
                  target={"_blank"}
                  rel={"noreferrer"}
                  className={Styles.Link}
                >
                  Code
                </a>
                <a
                  href={Links.Demo}
                  target={"_blank"}
                  rel={"noreferrer"}
                  className={Styles.Link}
                >
                  Demo
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Featured;
