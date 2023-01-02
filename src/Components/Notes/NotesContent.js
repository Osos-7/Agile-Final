import React from "react";
import { Link } from "react-router-dom";
import './NotesContent.css';

const VideosContent = (props) => {
  const { imgUrl, title, path } = props.item;

  return (
    <div className="single_item">
      <div className="notes_card">
      <Link to={path} style={{ textDecoration: 'none', color:"black" }}>
        <div className="notes_section">
            <img  src={imgUrl} className="notes_img" />
        </div>
        <div className="notes_title">
          {title}
        </div>
        </Link>
        {/* <div className="notes_description">
          <p>{description}</p>
        </div> */}
      </div>
    </div>
  );
};

export default VideosContent;
