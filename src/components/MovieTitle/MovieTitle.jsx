import React from "react";

export default function MovieTitle(props) {
  const { movieName } = props;

  return (
    <h2 className="text-[18px] font-bold">
      <span className="text-[16px] mr-2 bg-red-500 px-[5px] py-[3px] text-white rounded-md">
        C18
      </span>
      {movieName}
    </h2>
  );
}
