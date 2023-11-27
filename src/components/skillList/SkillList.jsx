import React from 'react'
import "./skillList.scss"

export default function SkillList({id,title, active, setSelected}) {
  return (
    <li className={ active ? "skillList active" : "skillList"}
     onClick={()=>setSelected(id)}>
        {title}
      
    </li>
  )
}
