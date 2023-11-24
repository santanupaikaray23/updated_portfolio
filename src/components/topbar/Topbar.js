import "./topbar.css";
import {Person,Mail} from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
      <div className="left">
     <a href="#intro" className="logo">Portfolio.</a>
     <div className="itemContainer">
        <Person className="icon" />
        <span>+91-8917310896</span>
     </div>
     <div className="itemContainer">
        <Mail className="icon" />
        <span>santanupaikaray1996@gmail.com</span>
     </div>
      </div>
    
      <div className="right">
<div className="hamburger">
  <span className="line1"></span>
  <span className="line2"></span>
  <span className="line3"></span>
</div>
      </div>
    </div>
    </div>
  )
}
