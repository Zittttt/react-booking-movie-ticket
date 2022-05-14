import React, { useState } from "react";
import { Tabs, Radio, Space } from "antd";
import Cinema from "./Cinemas/Cinema";
import { useSelector } from "react-redux";

export default function CinemaList(props) {
  const [state, setState] = useState({
    tabPosition: "left",
  });
  const { TabPane } = Tabs;
  const { arrCinemaBrand } = props;
  const { tabPosition } = state;
  const { arrCinema } = useSelector((state) => state.cinemaListReducer);

  console.log(arrCinema);

  const renderCinemaBrand = () => {
    return arrCinemaBrand.map((cinema, index) => {
      // console.log(cinema.maHeThongRap);
      return (
        <TabPane
          tab={<img src={cinema.logo} className="rounded-full" width={65} />}
          key={index}
        >
          <Cinema maHeThongRap={cinema.maHeThongRap} arrCinema={arrCinema} />
        </TabPane>
      );
    });
  };

  return (
    <div className="flex justify-center mt-10">
      <Tabs
        tabPosition={tabPosition}
        className="w-[960px] h-[720px] border-2 border-grey"
      >
        {renderCinemaBrand()}
      </Tabs>
    </div>
  );
}
