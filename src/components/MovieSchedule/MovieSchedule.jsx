import React from "react";
import MovieTitle from "../MovieTitle/MovieTitle";

export default function MovieSchedule(props) {
  return (
    <div className="max-w-full flex items-center h-full border-b-2 border-gray-100 pb-10">
      <img
        src="https://source.unsplash.com/random/300x300/?2"
        alt="..."
        className="object-cover h-[126px] w-[100px]"
      />
      <div className="h-full w-full p-0 pl-5 flex flex-col">
        <MovieTitle />
        <div className="m-0 grid grid-cols-2 gap-2">
          <button
            type="button"
            className="bg-gray-50 p-2 rounded-md border-[1px] border-gray-200"
          >
            <span className="text-[#108f3e] font-[600]">01-01-2019</span>~
            <span className="text-base text-[#fb4226] font-[600]">10:10</span>
          </button>
          <button
            type="button"
            className="bg-gray-50 p-2 rounded-md border-[1px] border-gray-200"
          >
            <span className="text-[#108f3e] font-[600]">01-01-2019</span>~
            <span className="text-base text-[#fb4226] font-[600]">10:10</span>
          </button>
          <button
            type="button"
            className="bg-gray-50 p-2 rounded-md border-[1px] border-gray-200"
          >
            <span className="text-[#108f3e] font-[600]">01-01-2019</span>~
            <span className="text-base text-[#fb4226] font-[600]">10:10</span>
          </button>
          <button
            type="button"
            className="bg-gray-50 p-2 rounded-md border-[1px] border-gray-200"
          >
            <span className="text-[#108f3e] font-[600]">01-01-2019</span>~
            <span className="text-base text-[#fb4226] font-[600]">10:10</span>
          </button>
        </div>
      </div>
    </div>
  );
}
