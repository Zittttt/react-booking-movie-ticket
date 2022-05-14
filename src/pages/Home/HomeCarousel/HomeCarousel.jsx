import React from "react";
import { Carousel } from "antd";

const contentStyle = {
  height: "800px",
  width: "100%",
};

export default function HomeCarousel(props) {
  const { arrBanner } = props;

  return (
    <Carousel autoplay>
      {arrBanner.map((banner, index) => (
        <div key={index}>
          <img src={banner.hinhAnh} style={contentStyle} />
        </div>
      ))}
    </Carousel>
  );
}
