import React, { useState } from "react";
import Styles from "../../../Styles/Component-Styles/Nav/Nav.module.css";

import CloseIcon from "@mui/icons-material/Close";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import TerminalOutlinedIcon from "@mui/icons-material/TerminalOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

// Material UI Accordion Imports Start
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// Material UI Accordion Imports End

const Nav = () => {
  const [menu, setMenu] = useState(false);

  const showMenu = () => {
    setMenu((prev) => !prev);
  };

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
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
        // onClick={showMenu}
        className={`${Styles.Mobile_Menu} ${menu ? Styles.ShowMenu : ""}`}
      >
        <div className={Styles.Content_Container}>
          <div className={Styles.Header}>
            <div className={Styles.Menu_Left_Side}>
              <div className={Styles.Logo_Container}>
                <img
                  src={require("../../../Assests/Images/Logo.png")}
                  className={Styles.Logo}
                  alt=""
                />
              </div>

              <h3 className={Styles.Brand}>Dev Rook</h3>
            </div>

            <CloseIcon
              sx={{ fontSize: 25 }}
              onClick={showMenu}
              className={Styles.Close_Icon}
            />
          </div>
          <ul className={Styles.Mobile_Navlink_Container}>
            <li className={Styles.Menu_NavItem}>
              <HomeOutlinedIcon
                sx={{ fontSize: 25 }}
                className={Styles.Navlink_Icon}
              />
              <a href="#" className={Styles.Menu_Navlink}>
                Home
              </a>
            </li>
            <li className={Styles.Menu_NavItem}>
              <TerminalOutlinedIcon
                sx={{ fontSize: 25 }}
                className={Styles.Navlink_Icon}
              />
              <a href="#" className={Styles.Menu_Navlink}>
                Portfolio
              </a>
            </li>
            <li className={Styles.Menu_NavItem}>
              <SendOutlinedIcon
                sx={{ fontSize: 25 }}
                className={Styles.Navlink_Icon}
              />
              <a href="#" className={Styles.Menu_Navlink}>
                Contact
              </a>
            </li>
            <li className={Styles.Menu_NavItem}>
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
                className={Styles.Accordion}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography
                    sx={{ width: "33%", flexShrink: 0, color: "#319795" }}
                  >
                    Discord -
                  </Typography>
                  <Typography sx={{ color: "#ff7a00" }}>
                    Code Runners
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                    feugiat. Aliquam eget maximus est, id dignissim quam.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </li>
          </ul>

          <div className={Styles.Menu_Separater}></div>

          {/* Weblink Container Start */}
          <ul className={Styles.Weblink_Container}>
            <h3 className={Styles.Title}>On The Web -</h3>
            <li className={Styles.Weblink_Item}>
              <LinkedInIcon
                sx={{ fontSize: 25 }}
                className={Styles.Weblink_Icon}
              />
              <a target={"_blank"} href="#" className={Styles.Weblink}>
                LinkedIn
              </a>
            </li>
            <li className={Styles.Weblink_Item}>
              <GitHubIcon
                sx={{ fontSize: 25 }}
                className={Styles.Weblink_Icon}
              />
              <a target={"_blank"} href="#" className={Styles.Weblink}>
                GitHub
              </a>
            </li>
            <li className={Styles.Weblink_Item}>
              <TwitterIcon
                sx={{ fontSize: 25 }}
                className={Styles.Weblink_Icon}
              />
              <a target={"_blank"} href="#" className={Styles.Weblink}>
                Twitter
              </a>
            </li>
            <li className={Styles.Weblink_Item}>
              <InsertLinkIcon
                sx={{ fontSize: 25 }}
                className={Styles.Weblink_Icon}
              />
              <a target={"_blank"} href="#" className={Styles.Weblink}>
                Developer Resume
              </a>
            </li>
          </ul>
          {/* Weblink Container End */}
        </div>
      </div>
      {/* Mobile Menu End */}
    </div>
  );
};

export default Nav;
