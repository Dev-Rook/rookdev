import React from "react";
import Styles from "../../Styles/Page-Styles/Dev-Logs/DevLogs.module.css";

import { Link } from "react-router-dom";

const DevLogs = () => {
  return (
    <div className={Styles.DevLogs}>
      <h3 className={Styles.Page_Title}>Coming Soon</h3>

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

export default DevLogs;
