import React, { useState, useEffect } from "react";
import axios from "../resources/axios";
import requests from "../resources/requests";
import "../styles/Banner.css";

const baseURL = "https://image.tmdb.org/t/p/original/";

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      const index = Math.floor(Math.random() * request.data.results.length - 1);
      setMovie(request.data.results[index]);
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className={"banner"}
      style={{
        backgroundImage: `url(${baseURL}${movie?.backdrop_path})`,
      }}
    >
      <div className={"banner-contents"}>
        <h1 className={"banner-title"}>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
          <h1 className="banner-description">
            {truncate(movie?.overview, 150)}
          </h1>
        </div>
      </div>
      <div className="banner-fade-bottom"></div>
    </header>
  );
}

export default Banner;
