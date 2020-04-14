import React from "react";
// import '~video-react/dist/video-react.css';
import { Player } from "video-react";

function Course() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://video-react.github.io/assets/video-react.css"
      />
      we need a video display and a table that shows title and sub-titles. and
      we do need Course description and coursetitle in display.   
      <br/>
      we also need to add " Add Topics here for admin and those topics can have the sub topics"
      <div style={{width:"800px",height:"800px"}}>
        <Player
          playsInline
          poster="/assets/poster.png"
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        />
      </div>
    </div>
  );
}
export default Course;
