import {useState} from "react";
import "./educations.scss"

export default function Education() {
  const [currentSlide,setCurrentSlide] = useState(0);

    const data = [
        {
            id: "1",
            // icon:"./assets/b_tech_small.png",
            position:"B.tech",
            title:"Einstein Academy of Technology & Management, Bhubaneswar",
            desc:"(2015-2018)",
            marksecured:"76.22%",
            img:"https://i.ibb.co/7yqmqYq/Graduation-mortar-on-top-of-books.jpg",
        },
        {
            id: "2",
            // icon:"./assets/Bundesautobahn_12_number.svg.png",
            position:"12th Class",
            title:"Academya International college of Science, Cuttack",
            desc:"(2013-2014)",
            marksecured:"53.34%",
             img:"https://i.ibb.co/7yqmqYq/Graduation-mortar-on-top-of-books.jpg",
        },
        {
            id: "3",
            // icon:"./assets/download.jpg",
            title:"A.A.K.B.N,Telangapada, Puri",
            position:"10th Class",
            desc:"(2009-2012)",
            marksecured:"69.11%",
             img:"https://i.ibb.co/7yqmqYq/Graduation-mortar-on-top-of-books.jpg",
        }

    ]
    const handleClick = (way)=>{
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) :
        setCurrentSlide(currentSlide<data.length -1 ? currentSlide +1 : 0);
    };
  return (
    <div className="educations" id="educations">
        <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
                {data.map((d)=>(
                 <div className="container">
                    <div className="item">
                        <div className="first">
                            <div className="firstContainer">
                                {/* <div className="imgContainer">
                                    <img src={d.icon} alt=""/>
                                </div> */}
                                <h1>{d.position}</h1>
                                <h2>{d.title}</h2>
                                <h3>{d.marksecured}</h3>
                                <p>{d.desc}</p>
                               
                            </div>
                        </div>
                        <div className="second">
                            <img src="assets/education-2-300x228.jpg" alt="" />
                        </div>
                       

                    </div>

                </div>
                ))}

            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="arrow left" onClick={() => handleClick("left")}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="arrow right" onClick={() => handleClick()}>
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
    </div>
  )
}




