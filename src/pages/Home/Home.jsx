import React from "react";
import FilmList from "./CinemaList/CinemaList";
import HomeCarousel from "./HomeCarousel/HomeCarousel";
import Movie from "./Movie/Movie";

export default function Home(props) {
  console.log(props.history);
  return (
    <div>
      <HomeCarousel />

      <Movie />
      <FilmList />
    </div>
  );
}
