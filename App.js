import React from "react";
import "./App.css";

const Card = ({ title, year, image }) => (
  <div className="card">
    <img src={image} alt={title} className="card-image" />
    <div className="card-text">
      <h3>{title}</h3>
      <p>{year}</p>
    </div>
  </div>
);

export default function InnovationsInsights() {
  const innovations = [
    { title: "ALAKNANDA", year: "2025", image: "roboDuelist.jpg" },
    { title: "BHAGIRATHI", year: "2024", image: "3-Z4XI1j4i.png" },
    { title: "MANDAKINI", year: "2023", image: "1-BrZcJz6s.jpeg" },
  ];
    const innovations2=[{ title: "MARVIN", year: "2024", image: "4-O3EFzGpI.png" },
      { title: "ROBO DUELIST", year: "2024", image: "robo1.png" },
      { title: "ROBOMUSE", year: "2023", image: "robomuse.jpeg" },
  ];

  return (
    <div className="container">
      {/* Innovations Section */}
      <div ><div className="ino">
        <div className="line1"></div>
        <h2 className="section-title red" >INNOVATIONS</h2><div className="line2"></div></div>
        <div className="card-grid">
         <div className="innovations">{innovations.map((item, idx) => (
            <Card key={idx} title={item.title} year={item.year} image={item.image} />
          ))}</div><div className="innovations">
          {innovations2.map((item, idx) => (
            <Card key={idx} title={item.title} year={item.year} image={item.image} />
          ))}</div>
        </div>
      </div><br/><br/><div className="insightline">
      <div className="line3"></div>
        <h2 className="section-title orange">INSIGHTS</h2><div className="line4"></div></div>
        <div className="insights">

        <div className="insights-grid">
          <div><div className="insights-text">
            <p className="insight-highlight orange1">OPEN <font color="white">MINDS</font></p>
            <p className="insight-highlight orange1">IGNITE <font color="white">SPARKS</font></p>
            <p className="insight-highlight orange1">CREATE <font color="white">CHANGE</font></p>
           </div> <p className="insight-description">
              From tech deep-dives and event recaps to student spotlights and artistic expressions, our magazine captures the spirit, passion, and pulse of our community — one page at a time.
            </p></div>
          </div>
       
          <div className="mag"
            style={{
              position: "relative",
              paddingTop: "max(50%, 10px)",
              width: "100%",
            
              height: 0,
              marginTop: "1rem",
            }}
          >
            <iframe
              style={{
                position: "absolute",
                border: "none",

                width: "60%",
                height: "100%",
                right: 0,
                top: 0,
              }}
              src="https://online.fliphtml5.com/jvirk/defp/"
              seamless="seamless"
              scrolling="no"
              frameBorder="0"
              allowTransparency="false"
              allowFullScreen={true}
              title="Insights Magazine"
            ></iframe></div>
        </div>
        <div className="insightline">
      <div className="line3"></div>
        <h2 className="section-title orange">Publications</h2><div className="line4"></div></div>
        <div className="ourpub"><div className="publications"> OUR PUBLICATIONS </div>
        <p className="pubpara">MARS Society is not just limited to participating and winning international competition but also towards promoting research driven initiatives in the field
          of robotics and automation. Diving deep into core concepts of robotics consisting of various fields like Mechanical, Electronics, Biochemistry, Biotech,
          Embedded systems, Control System and Signal Processing. We here have demonstrated few of our publications below out in archives. </p></div>
          <div className="authors">
            <div className="publine"><div className="title"><b>Title :  </b> </div><div className="pubdes" ><b>Design and Analysis of a Mars Rover with Rocker-Bogie Suspension carrying a 5-DOF Robotic Arm</b></div></div><br/>
            <div className="publine"> <div className="title"><b>Authors : </b></div><div className="pubdes" >Manish Jain, Ekam Singh, Shyam Sundar Mallampalli, Anant Tomar, Dr. Sachin Kansal, Dr. Ashish Singla</div></div><br/>
            <div className="publine"><div className="title"><b>Conference : </b></div><div className="pubdes">Advances in Robotics (AIR)'2025, IIT Jodhpur</div></div>

          </div>
          <div className="authors">
          <div className="publine"><div className="title"><b>Title :  </b> </div><div className="pubdes" ><b>Designed and Field Tested Electrical Architecture for a Multi-Subsystem Rover </b></div></div><br/>
            <div className="publine"> <div className="title"><b>Authors : </b></div><div className="pubdes" >Pranjay Dhawan, Pranav Chaudhary, Madhav Katyal, Yachit Guliani, Astik Thukral, Dr. Sachin Kansal, Dr. Ashish Singla</div></div><br/>
            <div className="publine"><div className="title"><b>Conference : </b></div><div className="pubdes">Advances in Robotics (AIR)'2025, IIT Jodhpur</div></div>


          </div>


      </div>
    
  );
}
