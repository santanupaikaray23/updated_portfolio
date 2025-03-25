import { useEffect, useRef } from "react"
import "./home.scss"
 import { init } from 'ityped'

export default function Home() {

  const textRef = useRef();
  useEffect(()=>{
     
   
      init(textRef.current, { showCursor: false,
       strings: ["Full-Stack Developer", "Youtuber", "Designer"] })

  },[]);
  return (
    <div className="home" id="home">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/mypic1.PNG" alt=""/>
       
        </div>
        

      </div>
      <div className='whatsapp_float'>
        <a href='https://wa.me/918917310896' target='_blank' rel="noreferrer" ><img src='assets/15707917.png' width="50px" className="whatsapp_float_btn" alt='whatsapp' /></a>
      </div>
        
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Santanu Paikaray</h1>
          <h3>a <span ref={textRef}></span></h3>
        </div>
        <a href="#skills"><img src="assets/down.png" alt=""/>
        </a>
        
      </div>

    
    </div>
  )
}
