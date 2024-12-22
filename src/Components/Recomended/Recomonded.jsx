import React from "react";
import thumbnail1 from "../../assets/thumbnail1.png";
import thumbnail2 from "../../assets/thumbnail2.png";
import thumbnail3 from "../../assets/thumbnail3.png";
import thumbnail4 from "../../assets/thumbnail4.png";
import thumbnail5 from "../../assets/thumbnail5.png";
import thumbnail6 from "../../assets/thumbnail6.png";
import thumbnail7 from "../../assets/thumbnail7.png";
import thumbnail8 from "../../assets/thumbnail8.png";

import "./Recomended.css";

function Recomonded() {

    const thumbnails = [
        thumbnail1,
        thumbnail2,
        thumbnail3,
        thumbnail4,
        thumbnail5,
        thumbnail6,
        thumbnail7,
        thumbnail8,
      ];

  return (
    <div className="recomended">
{thumbnails.map((thumbnail, index) => (
     <div className="side-video-list">
     <img  src={thumbnail} alt={`Thumbnail ${index + 1}`} />
     <div className="vid-info">
       <h4>Channel that helps ypou to best web developer</h4>
       <p> GreatStack</p>
       <p>199k Views</p>
     </div>
   </div>
))}
     
    </div>
  );
}

export default Recomonded;
