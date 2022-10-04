import React, { useState } from "react";
import Styles from "../../../Styles/Component-Styles/Social/Social.module.css";

import SocialData from "./SocialData";

const Social = () => {
  const [cardData, setCardData] = useState(SocialData);

  return (
    <div className={Styles.Social_Container}>
      <h3 className={Styles.Section_Title}>Social</h3>
      <h2 className={Styles.Section_Description}>Find me on these platforms</h2>
      {cardData.map((Card) => {
        const { id, Image, Name } = Card;

        return (
          <div className={Styles.Card} key={id}>
            <div className={Styles.Imgae__Title_Container}>
              <div className={Styles.Image_Container}>
                <img src={Image} alt="" className={Styles.Social_Image} />
              </div>
              <h3 className={Styles.Name}>{Name}</h3>
            </div>

            <div className={Styles.Social_Button}>View</div>
          </div>
        );
      })}
    </div>
  );
};

export default Social;
