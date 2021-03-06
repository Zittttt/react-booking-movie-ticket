import React from "react";
import { Route } from "react-router-dom";
import FooterHome from "./FooterHome/FooterHome";
import HeaderHome from "./HeaderTemplate/HeaderHome/HeaderHome";

export default function HomeTemplate(props) {
  let { Component, path } = props;

  return (
    <Route
      exact
      path={path}
      render={(propsRoute) => {
        return (
          <div>
            <HeaderHome {...propsRoute} />
            <Component {...propsRoute} />
            <FooterHome />
          </div>
        );
      }}
    ></Route>
  );
}
