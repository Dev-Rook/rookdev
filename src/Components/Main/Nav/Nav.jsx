import React, { useState } from "react";
import Styles from "../../../Styles/Component-Styles/Nav/Nav.module.css";

const Nav = () => {
  const [menu, setMenu] = useState(false);

  const showMenu = () => {
    setMenu((prev) => !prev);
  };

  const hideMenu = () => {
    setMenu((prev) => !prev);
  };

  return (
    <div className={Styles.Nav}>
      <div className={Styles.Left_Side}>
        <div className={Styles.Logo_Container}>
          <img
            src={require("../../../Assests/Images/Logo.png")}
            className={Styles.Logo}
            alt=""
          />
        </div>

        <h3 className={Styles.Brand}>Dev Rook</h3>
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

      <div
        onClick={showMenu}
        className={`${Styles.Mobile_Menu} ${menu ? Styles.ShowMenu : ""}`}
      >
        <div className={Styles.Content_Container}>
          <div className={Styles.Header}>
            <div className={Styles.Logo_Container}>
              <img
                src={require("../../../Assests/Images/Logo.png")}
                className={Styles.Logo}
                alt=""
              />
            </div>

            <img
              onClick={hideMenu}
              src={require("../../../Assests/Icons/Close-Icon.png")}
              alt=""
              className={Styles.Close_Icon}
            />
          </div>
          <ul className={Styles.Mobile_Navlink_Container}>
            <li className={Styles.Menu_NavItem}>
              <a href="#" className={Styles.Menu_Navlink}>
                Home
              </a>
            </li>
            <li className={Styles.Menu_NavItem}>
              <a href="#" className={Styles.Menu_Navlink}>
                Portfolio
              </a>
            </li>
            <li className={Styles.Menu_NavItem}>
              <a href="#" className={Styles.Menu_Navlink}>
                Contact
              </a>
            </li>
            <li className={Styles.Menu_NavItem}>
              <a href="#" className={Styles.Menu_Navlink}>
                Comunity
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu End */}
    </div>
  );
};

export default Nav;
