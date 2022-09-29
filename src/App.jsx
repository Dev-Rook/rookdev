import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./Components/Main/Nav/Nav";
import Landing from "./Views/Landing/Landing";
import Portfolio from "./Views/Portfolio/Portfolio";
import Contact from "./Views/Contact/Contact";
import DevLogs from "./Views/Dev-Logs/DevLogs";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path={"/"} element={<Landing />} />
          <Route path={"Portfolio"} element={<Portfolio />} />
          <Route path={"Contact"} element={<Contact />} />
          <Route path={"DevLogs"} element={<DevLogs />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
