import "./experience.scss";

export default function Experience() {
  const data = [
    {
      id: "1",
      date:"(13th May 2024 - Presently Working)",
      name:"Sheerdrive Private Limited",
      img:"https://i.ibb.co/Jy8jykb/sheerdrive.png",
      featured: true,
      
  },
  {
      id: "2",
      date:"(4th Mar 2021 - 30th Oct 2023)",
      name:"Tata Consultancy Services",
      img:"https://i.ibb.co/8rjGZgW/download-1.png",
      featured: true,
  },
  {
      id: "3",
      date:"(22th June 2020 - 31th Aug 2020)",
      name:"Dixit Infotech Services Pvt Ltd",
      img:"https://i.ibb.co/m5mTZ3XJ/dixit-infotech-services-pvt-ltd-logo.png",
      featured: true,
  },
  {
    id: "4",
    date:"(4th Sept 2019 - 30th Jan 2020)",
    name:"IDisha Info Labs Pvt Ltd",
    img:"https://i.ibb.co/JwJ1pwFj/images.png",
    featured: true,
},
{
  id: "5",
  date:"(9th July 2018 - 13th Oct 2018)",
  name:"Researchinn",
  img:"https://i.ibb.co/PGTfZg2D/researchinn-investment-advisor-vijay-nagar-indore-share-brokers-7dp7s.jpg",
  featured: true,
},

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
