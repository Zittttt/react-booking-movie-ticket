import React from "react";
import { NavLink } from "react-router-dom";
import MovieTitle from "../../../components/MovieTitle/MovieTitle";
import playButton from "../../../assets/img/playButton.png";

export default function Movie(props) {
  const trailer = "";
  const buyTicket = "";

  const renderMovie = () => {
    return props.arrMovie.map((movie, index) => {
      return (
        <div
          className="w-[248px] h-[416px] rounded-md shadow-md overflow-hidden content"
          key={index}
        >
          <div className="movieImg h-[314px] w-full relative">
            <img
              src={movie.hinhAnh}
              alt="..."
              className="object-cover object-center w-full h-full "
            />
            <div className="dark">
              <NavLink to={trailer} className="playButton w-[72px] ">
                <img src={playButton} alt="..." />
              </NavLink>
            </div>
          </div>
          <div className="px-0 relative description h-[80px]">
            <MovieTitle movieName={movie.tenPhim} />
            <p className="dark:text-coolGray-100 text-[#757575] font-[600]">
              {movie.moTa}
            </p>
            <NavLink
              to={buyTicket}
              className="buyTicket rounded-md p-4 w-full font-[600] text-[18px] bg-purple"
            >
              BUY TICKET
            </NavLink>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="flex justify-center flex-wrap mt-10">
      <div className="grid grid-cols-4 gap-5">
        {renderMovie()}
        {/* <div className="w-[248px] h-[416px] rounded-md shadow-md overflow-hidden content">
          <div className="movieImg h-[314px] w-full relative">
            <img
              src={hinhAnh}
              alt="..."
              className="object-cover object-center w-full h-full "
            />
            <div className="dark">
              <NavLink to={trailer} className="playButton w-[72px] ">
                <img src={playButton} alt="..." />
              </NavLink>
            </div>
          </div>
          <div className="px-0 relative description h-[80px]">
            <MovieTitle movieName={tenPhim} />
            <p className="dark:text-coolGray-100 text-[#757575] font-[600]">
              {moTa}
            </p>
            <NavLink
              to={buyTicket}
              className="buyTicket rounded-md p-4 w-full font-[600] text-[18px] bg-purple"
            >
              BUY TICKET
            </NavLink>
          </div>
        </div> */}
      </div>
    </div>
  );
}
