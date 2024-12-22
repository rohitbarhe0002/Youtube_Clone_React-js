import React, { useEffect, useState } from "react";
import "./PlayVideo.css";
import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislke from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/rohit.jpg";
import user_profile from "../../assets/user_profile.jpg";
import { API_KEY, valueConverter } from "../../data";
import axios from "axios";
import moment from 'moment'

function PlayVideo({ videoId }) {
  const [apiData, setApiData] = useState(null);
  const [error, setError] = useState(null);
  const fetchVideoData = async () => {
    try {
      const videoDetailsUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${API_KEY}`;
      const res = await axios.get(videoDetailsUrl);
      console.log(res.data, "API Response");
      setApiData(res.data.items[0]); 
    } catch (err) {
      console.error("Error fetching video data:", err);
      setError("Failed to fetch video data.");
    }
  };
console.log(apiData.statistics,"data is here")
  useEffect(() => {
    if (videoId) {
      fetchVideoData();
    }
  }, [videoId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!apiData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="play-video">
      {/* <video src={video1} controls autoPlay muted>
        {" "}
      </video> */}
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <h3> {apiData?apiData.snippet.title:"Title Here"}</h3>
      <div className="play-video-info">
        <p> {apiData? valueConverter( apiData.statistics.viewCount):"16k"} Views &bull; {moment(apiData.snippet.publishedAt).fromNow()} </p>
        <div>
          <span>
            {" "}
            <img src={like} alt="" />
            {apiData.statistics.likeCount}
          </span>
          <span>
            {" "}
            <img src={dislke} alt="" />
            {apiData.statistics.dislikeCount}
          </span>

          <span>
            {" "}
            <img src={share} alt="" />
            Share
          </span>
          <span>
            {" "}
            <img src={save} alt="" />
            Save
          </span>
        </div>
      </div>
      <hr />

      <div className="publisher">
        <img src={jack} alt="" />
        <div>
          <p> {apiData.snippet.channelTitle}</p>
          <span>1 M Subscriber</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>{apiData.snippet.description.slice(0,250)}</p>
        <p>
          subscribe to greatstack to watch more tutorials on this webdevelopment
          series{" "}
        </p>
        <hr />
        <h4> {apiData.statistics.commentCount} comments</h4>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              {" "}
              Lokesh Patel <span> 1 day ago </span>
            </h3>
            <p>
              {" "}
              this is very good channel to learn new things on web development
              thanks to rohit barche to making this channel!
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>224</span>
              <img src={dislke} alt="" />
            </div>
          </div>
        </div>

        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              {" "}
              Lokesh Patel <span> 1 day ago </span>
            </h3>
            <p>
              {" "}
              this is very good channel to learn new things on web development
              thanks to rohit barche to making this channel!
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>224</span>
              <img src={dislke} alt="" />
            </div>
          </div>
        </div>

        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              {" "}
              Lokesh Patel <span> 1 day ago </span>
            </h3>
            <p>
              {" "}
              this is very good channel to learn new things on web development
              thanks to rohit barche to making this channel!
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>224</span>
              <img src={dislke} alt="" />
            </div>
          </div>
        </div>

        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              {" "}
              Lokesh Patel <span> 1 day ago </span>
            </h3>
            <p>
              {" "}
              this is very good channel to learn new things on web development
              thanks to rohit barche to making this channel!
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>224</span>
              <img src={dislke} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayVideo;
