import "./menu.scss";

export default function menu({menuOpen, setMenuOpen}) {
  return (
    <div className={"menu " +(menuOpen && "active")}>
        <ul>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#home">Home</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#skills">Skills</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#educations">Educations</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#experiences">Experiences</a>
            </li>
             <li onClick={()=>setMenuOpen(false)}>
                <a href="#contact">Contact me</a>
            </li>
        </ul>
      
    </div>
  )
}
