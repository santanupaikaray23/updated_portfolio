// import { useState } from "react";
import {useState } from "react";
import "./contact.scss";
import swal from 'sweetalert';
import Spinner from "../spinner/spinner";


export default function Contact(){
    const [user, setUser] = useState({
        email:"",
        phone:"",
        message:"",

    });

    const [loading, setLoading] = useState(false);

    const handleInput= (e) => {
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value,
          
        })
        

    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);
    
        try {
            setLoading(true);
            const response = await fetch('https://node-api-freelance.onrender.com/addUsers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
                
            });
    
            // Check if the request was successful
            if (response.ok) {
               
                // Handle success, e.g., show a success message or redirect
                console.log('User data submitted successfully');
                
                
    
                swal("Submited Successfully!");
                setUser({
                    email: "",
                    phone: "",
                    message: "",
                });
            
                // alert("Thanks, I'll replay ASAP :)")
            } else {
                // Handle errors, e.g., show an error message
                 console.error('Error submitting user data');
                
            }
        } catch (error) {
            console.error('An error occurred during the fetch:', error);
        }finally{
            setLoading(false);
        }
    };
    
   

    

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
                   <button type="submit" className="btn btn-submit" disabled={loading} >{loading ? 'Submitting Plz Wait...':'Submit'}</button>

              </form>
              {loading && (
          <div className="fullscreen-loader">
            <Spinner />
          </div>
        )}
            </div>

        </div>
    )
}