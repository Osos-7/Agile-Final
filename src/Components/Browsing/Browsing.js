import React from "react";
import Archive from "../../Assets/Archive.png"
import Learning  from "../../Assets/Learning.png"
import Meetings  from "../../Assets/Meetings.png"
import { Container, Row, Col, Card } from "react-bootstrap";
// import BrowsingCard from "./BrowsingCard";
import "./Browsing.css";
import { Link } from "react-router-dom";


// const CardData = [
//   {
//     id: "01",
//     title: "Archive",
//     description:"Find hundreds of notes, sheets, past exams and model answers uploaded by other students and professional instructors.",
//     imgUrl:Archive,
//   },

//   {
//     id: "02",
//     title: "Learning Videos",
//     description:"Watch hundreds of videos uploaded by trusted instructors and students for helping you reach the needed level of understanding.",
//     imgUrl:Learning,
//   },

//   {
//     id: "03",
//     title: "Meetings and Chat Rooms",
//     description:"Having any questions? You can enter chat rooms with other students and intructors or organize a live meeting with them.",
//     imgUrl:Meetings,
//   },
// ];

const Browsing = () => {
  return (
    <div className="wrapper">
      <Link to="/archive">
        <CARD 
          img={Archive}
          title="Archive"
          description="Find hundreds of notes, sheets, past exams and model answers 
          uploaded by other students and professional instructors." 
        />
      </Link>

      <Link to ="/learning_videos">
        <CARD 
          img={Learning}
          title="Learning Videos"
          description="Watch hundreds of videos uploaded by trusted instructors and students
          for helping you reach the needed level of understanding." 
        />
      </Link>

      <CARD 
        img={Meetings}
        title="Meetings and Chat Rooms"
        description="Having any questions? You can enter chat rooms with other students and intructors
         or organize a live meeting with them." 
      />
    </div>

  );
};


function CARD(props){
  return(
    <div className="card" style={{border:"none"}}>
      <div className="card_body">
        <img src={props.img} className="card_image"></img>
        <h5 className="card_title">{props.title}</h5>
        <p className="card_description">{props.description}</p>
      </div>
    </div>
  )
}







export default Browsing;