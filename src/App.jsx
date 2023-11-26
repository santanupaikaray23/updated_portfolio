import Contact from "./components/contact/Contact";
import Topbar from "./components/topbar/Topbar";
import "./app.scss"
import { useState } from "react";
import Skill from "./components/skill/Skill";
import Home from "./components/home/Home";
import Experience from "./components/experience/Experience";
import Educations from "./components/education/Educations";
import Menu from "./components/menu/Menu";

function App() {
  const[menuOpen,setMenuOpen] = useState(true)
  return (
    <div className="app">
   <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
   <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
   <div className="section">
 
    <Home/>
    <Skill/>
    <Educations/>
    <Experience/>
    
    <Contact/>
   </div>
    </div>
  );
}

export default App;
