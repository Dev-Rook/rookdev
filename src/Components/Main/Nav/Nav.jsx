import React, { useState } from "react";
import Styles from "../../../Styles/Component-Styles/Nav/Nav.module.css";

const Nav = () => {
  const [menu, setMenu] = useState(false);

  const showMenu = () => {
    setMenu((prev) => !prev);
  };

  return (
    <div className={Styles.Nav}>
      <div className={Styles.Left_Side}>
        <div>
          <img src="" className={Styles.Logo_Container} alt="" />
        </div>

        <h3 className={Styles.Brand}>Rook</h3>
      </div>

      <div className={Styles.Right_Side}>
        <ul className={Styles.Navlink_Container}>
          <li className={Styles.NavItem}>
            <a className={Styles.Navlink}>Home</a>
          </li>
          <li className={Styles.NavItem}>
            <a className={Styles.Navlink}>Portfolio</a>
          </li>
          <li className={Styles.NavItem}>
            <a className={Styles.Navlink}>Contact</a>
          </li>
        </ul>

        <img
          onClick={showMenu}
          src={require("../../../Assests/Icons/Menu-Icon.png")}
          alt=""
          className={Styles.Menu_Icon}
        />
      </div>

      {/* Mobile Menu Start  */}

      <div className={`${Styles.Mobile_Menu} ${menu ? Styles.ShowMenu : ""}`}>
      <img
          onClick={showMenu}
          src={require("../../../Assests/Icons/Close-Icon.png")}
          alt=""
          className={Styles.Close_Icon}
        />
      </div>

      {/* Mobile Menu End */}
    </div>
  );
};

export default Nav;
