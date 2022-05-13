import React from "react";
import { Carousel } from "antd";

const contentStyle = {
  height: "800px",
};

export default function HomeCarousel() {
  const img = (
    <img src="https://picsum.photos/2000/800" className="h-full w-full" />
  );
  return (
    <Carousel autoplay>
      <div>
        <h3 style={contentStyle}>{img}</h3>
      </div>
      <div>
        <h3 style={contentStyle}>{img}</h3>
      </div>
      <div>
        <h3 style={contentStyle}>{img}</h3>
      </div>
      <div>
        <h3 style={contentStyle}>{img}</h3>
      </div>
    </Carousel>
  );
}
