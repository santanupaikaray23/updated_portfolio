import "./menu.scss"

export default function menu({menuOpen, setMenuOpen}) {
  return (
    <div className={"menu" +(menuOpen && "active")}>
        <ul>
            <li>
                <a href="#home">Home</a>
            </li>
            <li>
                <a href="#skill">Skills</a>
            </li>
            <li>
                <a href="#education">Education</a>
            </li>
            <li>
                <a href="#experience">Experience</a>
            </li>
             <li>
                <a href="#contact">Contact me</a>
            </li>
        </ul>
      
    </div>
  )
}
