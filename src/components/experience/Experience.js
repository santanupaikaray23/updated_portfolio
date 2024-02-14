import "./experience.scss";

export default function Experience() {
  const data = [
  //   {
  //     id: "1",
  //     date:"(9th July 2018 - 13th Oct 2018 )",
  //     name:"Researchinn",
  //     img:"https://i.ibb.co/1XHgyPr/logo.png",
  //     featured: true,
      
  // },
  // {
  //     id: "2",
  //     date:"(3rd September 2019 - 30th September 2019)",
  //     name:"Prince HR Services Private Limited",
  //     img:"https://i.ibb.co/FDmz84k/princehr.jpg",
  //     featured: true,
  // },
  // {
  //     id: "3",
  //     date:"(5th November 2019 - 30th January 2020)",
  //     name:"iDisha info Labs Pvt. Ltd.",
  //     img:"https://i.ibb.co/SXNj4sY/images.png",
  //     featured: true,
  // },
  {
    id: "1",
    date:"(4th March 2021 - 30th November 2021)",
    name:"Crown Solutions India Pvt. Ltd.",
    img:"https://i.ibb.co/93sv1BJ/logo-1.png",
    featured: true,
},
{
  id: "2",
  date:"(6th December 2021 - 30th October 2023)",
  name:"Tata Consultancy Services",
  img:"https://i.ibb.co/8rjGZgW/download-1.png",
  featured: true,
}


]
  return (
    <div className="experiences" id="experiences">
         <h1>Work Experiences</h1>
            <div className="container">
                {data.map((d)=>(

               
                <div className={d.featured ? "card featured" : "card"}>
                    <div className="top">
                        
                        
                        <img className="user" src={d.img} alt=""/>
                    </div>
                    <div className="center">
                       {d.name}
                    </div>
                    <div className="bottom">
                        <h3>{d.date}</h3>
                    </div>
                </div>
                 ))}
            </div>
      
    </div>
  )
}
