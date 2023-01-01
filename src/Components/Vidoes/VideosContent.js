import React from "react";
import { Link } from "react-router-dom";
import './VideosContent.css';

const VideosContent = (props) => {
  const { vidUrl, title, description } = props.item;

  return (
    <div className="single_item">
      <div className="video_card">
        <div className="video_url">
        <iframe
            className="youtube_video"
            // width="300"
            // height="300"
            src={vidUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
            />
        </div>
        <div className="video_title">
          {title}
        </div>
        <div className="video-description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default VideosContent;
