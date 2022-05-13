import React from "react";
import { Route } from "react-router-dom";
import HeaderHome from "../HomeTemplate/HeaderTemplate/HeaderHome/HeaderHome";

export default function UserTemplate(props) {
  let { Component, path } = props;

  return (
    <Route
      exact
      path={path}
      render={(propsRoute) => {
        return (
          <div>
            <Component {...propsRoute} />
          </div>
        );
      }}
    ></Route>
  );
}
