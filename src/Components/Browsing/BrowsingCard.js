import React from "react";
import { Link } from "react-router-dom";
import "./BrowsingCard.css";

const BrowsingCard = (props) => {
  const { imgUrl, title, description } = props.item;

  return (
    <div className="single_item">
      <div className="browsing_card">
        <div className="browsing_img">
          <img src={imgUrl} alt=""/>
        </div>

        <div className="Title_Name">
          {title}
        </div>

        <div className="item_description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BrowsingCard;