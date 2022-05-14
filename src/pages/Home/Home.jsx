import React from "react";
import CinemaList from "./CinemaList/CinemaBrandList";
import HomeCarousel from "./HomeCarousel/HomeCarousel";
import Movie from "./Movie/Movie";
import { useSelector } from "react-redux";

export default function Home(props) {
  const { arrMovie } = useSelector((state) => state.movieReducer);
  const { arrBanner } = useSelector((state) => state.bannerReducer);
  const { arrCinemaBrand } = useSelector((state) => state.cinemaBrandReducer);

  console.log(arrBanner);

  return (
    <div>
      <HomeCarousel arrBanner={arrBanner} />
      <Movie arrMovie={arrMovie} />
      <CinemaList arrCinemaBrand={arrCinemaBrand} />
    </div>
  );
}
