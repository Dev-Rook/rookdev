import React, { useState, useEffect } from "react";
import Styles from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./Components/Main/Nav/Nav";
import Landing from "./Views/Landing/Landing";
import Portfolio from "./Views/Portfolio/Portfolio";
import Contact from "./Views/Contact/Contact";
import DevLogs from "./Views/Dev-Logs/DevLogs";
import Footer from "./Components/Main/Footer/Footer";
import NavigationIcon from '@mui/icons-material/Navigation';


function App() {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={Styles.App}>
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path={"/"} element={<Landing />} />
          <Route path={"Portfolio"} element={<Portfolio />} />
          <Route path={"Contact"} element={<Contact />} />
          <Route path={"DevLogs"} element={<DevLogs />} />
        </Routes>

        <NavigationIcon
          onClick={scrollUp}
          sx={{fontSize: 30}}
          className={`${Styles.Back_To_Top_Icon} ${backToTop? Styles.Show_Back_To_Top : ""}`}
        />

        <Footer scrollUp={scrollUp} />
      </BrowserRouter>
    </div>
  );
}

export default App;
