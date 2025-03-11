import React from "react";
import "./PlayVideo.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ShareIcon from "@mui/icons-material/Share";
import SaveIcon from "@mui/icons-material/Save";
import PersonIcon from "@mui/icons-material/Person";

const PlayVideo = () => {
  return (
    <div className="play-video">
      <video controls autoPlay muted></video>
      <h3> Fake video</h3>
      <div className="play-video-info">
        <p>1525 views &bull; 2 days ago</p>
        <div>
          <span>
            <ThumbUpIcon/> 125
          </span>

          <span>
            <ThumbDownIcon /> 12
          </span>

          <span>
            <ShareIcon/> Share
          </span>

          <span>
            <SaveIcon/> Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <PersonIcon />
        <div>
          <p>Im a youtube video</p>
          <span>1m Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>Channel info</p>
        <p>Subscribe for more info</p>
        <hr />
        <h4> 130 Comments</h4>
        <div className="comment">
          <PersonIcon />
          <div>
            <h3>Jack</h3>
            <span>1 day ago</span>
            <p> random comment here </p>
            <div className="comment-action">
              <ThumbUpIcon />
              <span>244</span>
              <ThumbDownIcon/>
              <span>12</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
