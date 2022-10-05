import React from "react";
import Styles from "../../Styles/Page-Styles/Contact/Contact.module.css";

import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className={Styles.Contact}>
      <h3 className={Styles.Page_Title}>Contact</h3>

      <div className={Styles.Contact_Implore_Box}>
        <h3 className={Styles.Section_Description}>Join my Discord</h3>
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
        </div>
      </div>
    </div>
  );
};

export default Contact;
