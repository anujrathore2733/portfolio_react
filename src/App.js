import React from 'react';
import './App.css';
import NavItems from "./components/navitems";
import IntroBox from "./components/Introbox";
import MainBox from "./components/skill";
import SkillTech from "./components/skill_tech";
import SkillTools from "./components/skill_tools";
import Social from "./components/social";
import Underconstruction from "./components/workinprogress";
import AboutMe from "./components/aboutmeintro";
import Contactme from "./components/contactme";
import Resume from "./components/resumedownload";

import { BrowserRouter, Link, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="resumediv">
          <Resume></Resume>
        </div>
        <NavItems></NavItems>

        <Route path="/" exact>
          <div className="container">
            <div className="row">
              <IntroBox></IntroBox>
            </div>
          </div>
        </Route>
        <Route path="/skills" exact>
          <div>
            <MainBox></MainBox>
          </div>
        </Route>
        <Route path="/skills/technologies">
          <div>
            <SkillTech></SkillTech>
          </div>
        </Route>
        <Route path="/skills/tools">
          <div>
            <SkillTools></SkillTools>
          </div>
        </Route>
        <Route path="/social">
          <Social></Social>
        </Route>
        <Route path="/AboutMe">
          <AboutMe></AboutMe>
        </Route>
        <Route path="/contactME">
          <Contactme></Contactme>
        </Route>
        <div className="workinprogress">
          <Underconstruction></Underconstruction>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
