import React from "react";
import { NavLink } from "react-router-dom";
import MovieTitle from "../../../components/MovieTitle/MovieTitle";

export default function Movie() {
  return (
    <div className="flex justify-center flex-wrap mt-10">
      <div className="grid grid-cols-4 gap-5">
        <NavLink
          to={"/"}
          className="w-[248px] h-[416px] rounded-md dark:bg-coolGray-900 dark:text-coolGray-50 shadow-md"
        >
          <img
            src="https://source.unsplash.com/random/300x300/?1"
            alt="..."
            className="object-cover object-center w-full h-[314px] dark:bg-coolGray-500 "
          />
          <div className="px-0">
            <MovieTitle />
            <p className="dark:text-coolGray-100 text-[#757575] font-[600]">
              Mauris et lorem at elit tristique dignis et ullamcorper elit.
            </p>
          </div>
        </NavLink>
        <NavLink
          to={"/"}
          className="w-[248px] h-[416px] rounded-md dark:bg-coolGray-900 dark:text-coolGray-50 shadow-md"
        >
          <img
            src="https://source.unsplash.com/random/300x300/?1"
            alt="..."
            className="object-cover object-center w-full h-[314px] dark:bg-coolGray-500 "
          />
          <div className="px-0">
            <MovieTitle />
            <p className="dark:text-coolGray-100 text-[#757575] font-[600]">
              Mauris et lorem at elit tristique dignis et ullamcorper elit.
            </p>
          </div>
        </NavLink>{" "}
        <NavLink
          to={"/"}
          className="w-[248px] h-[416px] rounded-md dark:bg-coolGray-900 dark:text-coolGray-50 shadow-md"
        >
          <img
            src="https://source.unsplash.com/random/300x300/?1"
            alt="..."
            className="object-cover object-center w-full h-[314px] dark:bg-coolGray-500 "
          />
          <div className="px-0">
            <MovieTitle />
            <p className="dark:text-coolGray-100 text-[#757575] font-[600]">
              Mauris et lorem at elit tristique dignis et ullamcorper elit.
            </p>
          </div>
        </NavLink>{" "}
        <NavLink
          to={"/"}
          className="w-[248px] h-[416px] rounded-md dark:bg-coolGray-900 dark:text-coolGray-50 shadow-md"
        >
          <img
            src="https://source.unsplash.com/random/300x300/?1"
            alt="..."
            className="object-cover object-center w-full h-[314px] dark:bg-coolGray-500 "
          />
          <div className="px-0">
            <MovieTitle />
            <p className="dark:text-coolGray-100 text-[#757575] font-[600]">
              Mauris et lorem at elit tristique dignis et ullamcorper elit.
            </p>
          </div>
        </NavLink>{" "}
        <NavLink
          to={"/"}
          className="w-[248px] h-[416px] rounded-md dark:bg-coolGray-900 dark:text-coolGray-50 shadow-md"
        >
          <img
            src="https://source.unsplash.com/random/300x300/?1"
            alt="..."
            className="object-cover object-center w-full h-[314px] dark:bg-coolGray-500 "
          />
          <div className="px-0">
            <MovieTitle />
            <p className="dark:text-coolGray-100 text-[#757575] font-[600]">
              Mauris et lorem at elit tristique dignis et ullamcorper elit.
            </p>
          </div>
        </NavLink>{" "}
        <NavLink
          to={"/"}
          className="w-[248px] h-[416px] rounded-md dark:bg-coolGray-900 dark:text-coolGray-50 shadow-md"
        >
          <img
            src="https://source.unsplash.com/random/300x300/?1"
            alt="..."
            className="object-cover object-center w-full h-[314px] dark:bg-coolGray-500 "
          />
          <div className="px-0">
            <MovieTitle />
            <p className="dark:text-coolGray-100 text-[#757575] font-[600]">
              Mauris et lorem at elit tristique dignis et ullamcorper elit.
            </p>
          </div>
        </NavLink>{" "}
        <NavLink
          to={"/"}
          className="w-[248px] h-[416px] rounded-md dark:bg-coolGray-900 dark:text-coolGray-50 shadow-md"
        >
          <img
            src="https://source.unsplash.com/random/300x300/?1"
            alt="..."
            className="object-cover object-center w-full h-[314px] dark:bg-coolGray-500 "
          />
          <div className="px-0">
            <MovieTitle />
            <p className="dark:text-coolGray-100 text-[#757575] font-[600]">
              Mauris et lorem at elit tristique dignis et ullamcorper elit.
            </p>
          </div>
        </NavLink>{" "}
        <NavLink
          to={"/"}
          className="w-[248px] h-[416px] rounded-md dark:bg-coolGray-900 dark:text-coolGray-50 shadow-md"
        >
          <img
            src="https://source.unsplash.com/random/300x300/?1"
            alt="..."
            className="object-cover object-center w-full h-[314px] dark:bg-coolGray-500 "
          />
          <div className="px-0">
            <MovieTitle />
            <p className="dark:text-coolGray-100 text-[#757575] font-[600]">
              Mauris et lorem at elit tristique dignis et ullamcorper elit.
            </p>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
