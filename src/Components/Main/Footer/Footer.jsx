import React from "react";
import Styles from "../../../Styles/Component-Styles/Footer/Footer.module.css";

import { Link } from "react-router-dom";

import LogoDevIcon from "@mui/icons-material/LogoDev";

const Footer = ({scrollUp}) => {
  return (
    <div className={Styles.Footer}>
      <div className={Styles.Footer_Content}>
        <div className={Styles.Logo__Brand}>
          <Link onClick={scrollUp} to={"/"}>
            <div className={Styles.Logo_Container}>
              <img
                src={require("../../../Assests/Images/Logo.png")}
                className={Styles.Logo}
                alt=""
              />
            </div>
          </Link>

          <h3 className={Styles.Brand}>Dev Rook</h3>
        </div>

        <ul className={Styles.Navlink_Container}>
          <li className={Styles.NavItem}>
            <Link to={"/"} className={Styles.Navlink}>
              Home
            </Link>
          </li>
          <li className={Styles.NavItem}>
            <Link to={"Portfolio"} className={Styles.Navlink}>
              Portfolio
            </Link>
          </li>
          <li className={Styles.NavItem}>
            <Link to={"Contact"} className={Styles.Navlink}>
              Contact
            </Link>
          </li>
          <li className={Styles.NavItem}>
            <Link to={"DevLogs"} className={Styles.Navlink}>
              <LogoDevIcon className={Styles.NavIcon} />
            </Link>
          </li>
        </ul>
      </div>
      {/* ※ End Of Website ※ */}© 2022 Developer Rook.
    </div>
  );
};

export default Footer;
