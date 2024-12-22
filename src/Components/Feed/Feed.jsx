import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import thumbnail1 from "../../assets/thumbnail1.png";
import thumbnail2 from "../../assets/thumbnail2.png";
import thumbnail3 from "../../assets/thumbnail3.png";
import thumbnail4 from "../../assets/thumbnail4.png";
import thumbnail5 from "../../assets/thumbnail5.png";
import thumbnail6 from "../../assets/thumbnail6.png";
import thumbnail7 from "../../assets/thumbnail7.png";
import thumbnail8 from "../../assets/thumbnail8.png";

import "./Feed.css";
import { Link } from "react-router-dom";
import { API_KEY, valueConverter } from "../../data";

function Feed({ category }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const BASE_URL = "https://youtube.googleapis.com/youtube/v3/videos";

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(BASE_URL, {
        params: {
          part: "snippet,contentDetails,statistics",
          chart: "mostPopular",
          maxResults: 50,
          regionCode: "IN",
          videoCategoryId: category,
          key: API_KEY,
        },
      });
      setData(response.data.items || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [category]);

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
    <div className="feed">
      {loading && <div className="loader">Loading...</div>}
      {error && <p className="error-message">{error}</p>}
      {!loading &&
        !error &&
        data.map((item, index) => (
          <Link
            to={`video/${item.snippet.categoryId}/${item.id}`}
            className="card"
            key={index}
          >
            <img
              src={item.snippet.thumbnails.medium.url}
              alt={`Thumbnail ${index + 1}`}
            />
            <h2>{item.snippet.title}</h2>
            <h3>{item.snippet.channelTitle}</h3>
            <p>
              {valueConverter(item.statistics.viewCount)} views &bull;{" "}
              {moment(item.snippet.publishedAt).fromNow()}
            </p>
          </Link>
        ))}
      {!loading && !error && data.length === 0 && (
        <p className="no-results">No videos found.</p>
      )}
    </div>
  );
}

export default Feed;
