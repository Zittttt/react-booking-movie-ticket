import React, { Fragment } from "react";
import { Route, Router } from "react-router-dom";

export default function HomeTemplate(props) {
  let { Component, path } = props;

  return (
    <Route
      exact
      path={path}
      render={(propsRoute) => {
        return (
          <div>
            <h1 className="bg-black text-white h-10">Đây là header homepage</h1>
            <Component {...propsRoute} />
            <footer className="bg-black text-white h-10">
              Đây là footer homepage
            </footer>
          </div>
        );
      }}
    ></Route>
  );
}
