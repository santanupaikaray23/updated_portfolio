import { useState } from "react";
import "./contact.scss"

export default function Contact(){
    const [message,setMessage] = useState(false)
    const handleSubmit = (e) =>{
        e.preventDefault();
        setMessage (true)
    }
    return(
        <div className="contact" id="contact">
               <div className="left">
          <img src="assets/shake.svg" alt=""/>
            </div>
            <div className="right">
                <h2>Contact me</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email"/>
                    <input type="text" placeholder="Phone"/>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Submit</button>
                    {message && <span>Thanks,I'll replay ASAP :)</span>}
                </form>

            </div>

        </div>
    )
}