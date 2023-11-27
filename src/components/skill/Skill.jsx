import { useEffect, useState } from "react";
import SkillList from "../skillList/SkillList";
import "./skill.scss";
import {frontendSkill,backendSkill,databaseSkill,otherSkill} from "../../data"

export default function Skill() {

   const [selected,setSelected] = useState("frontend")
   const [data,setData] = useState([]);
  const list = [
    {
        id:"frontend",
        title:"Frontend/UI",

    },
    {
        id:"backend",
        title:"Backend/Languages"

    },
    {
        id:"database",
        title:"Databases"
    },
    {
        id:"other",
        title:"Others"
    },
    // {
    //   id:"achievementcertificationSkill",
    //   title:"achievementcertificationSkill"
    // }
    
];

useEffect(()=>{

  switch(selected){
    //  case "featured":
    //   setData(featuredSkill);
    //   break;
      case "frontend":
        setData(frontendSkill);
        break;
        case "backend":
          setData(backendSkill);
          break;
          case "database":
            setData(databaseSkill);
            break;
            case "other":
              setData(otherSkill);
              break;
              // case "achievementcertification":
              //   setData(achievementcertificationSkill);
              //   break;
                default:            
  }
},[selected])
  return (
    <div className="skill" id="skills">
    <h1>Skills</h1>
    <ul>
      {list.map(item=>(
        <SkillList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id}/>
      ))}
    </ul>
    <div className="container">
      {data.map(d=>(

    
      <div className="item">
        <img src={d.img} alt=""/>
        <h3>{d.title}</h3>
      </div>
        ))}
    </div>

    </div>
  )
}
