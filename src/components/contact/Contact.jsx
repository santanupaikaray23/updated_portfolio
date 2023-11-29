// import { useState } from "react";
import {useState } from "react";
import "./contact.scss";


export default function Contact(){
    const [user, setUser] = useState({
        email:"",
        phone:"",
        message:"",

    });

    const handleInput= (e) => {
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value,
          
        })

    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(user);
        fetch('http://localhost:9800/addUsers',{
            method:'POST',
            headers:{
                'Accept':'Application/json',
                'Content-Type':'appliaction/json'
            },
            body:JSON.stringify({user})

        })

    }

    return(
        <div className="contact" id="contact">
               <div className="left">
          <img src="assets/shake.svg" alt=""/>
            </div>
            <div className="right">
                <h2>Contact me</h2>
              <form onSubmit={handleSubmit}>
                <div>
                <label htmlFor="email">Email :</label>
                 <input type="email" name="email" placeholder="email" id="email" required autoComplete="off"
                 value={user.email} onChange={handleInput}/>
                 </div>
                 <div>
                <label htmlFor="phone">Phone no :</label>
                <input type="phone" name="phone" placeholder="phone" id="phone" required autoComplete="off"
                 value={user.phone} onChange={handleInput}/>
                 </div>
                 <div>
                <label htmlFor="message">Message :</label>
                <input type="message" name="message" placeholder="message" id="message" required autoComplete="off"
                value={user.message} onChange={handleInput}/>
                 </div>
                   <button type="submit" className="btn btn-submit">Submit</button>
              </form>

            </div>

        </div>
    )
}