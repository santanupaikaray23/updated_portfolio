import { useEffect, useRef } from "react"
import "./home.scss"
import { init } from 'ityped'

export default function Home() {

  const textRef = useRef();
  useEffect(()=>{
   
    init(textRef.current, { showCursor: false,
       strings: ["Developer", "Youtuber", "Designer"] })

  },[])
  return (
    <div className="home" id="home">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/santanupic21.jpg" alt=""/>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Santanu Paikaray</h1>
          <h3>Also, I am a <span ref={textRef}></span></h3>
        </div>
        <a href="#skills">
          <img src="assets/down.png" alt=""/>
        </a>
      </div>

    
    </div>
  )
}
