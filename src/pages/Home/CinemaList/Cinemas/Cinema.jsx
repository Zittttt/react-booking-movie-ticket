import React, { useState } from "react";
import { Tabs, Radio, Space } from "antd";
import { NavLink } from "react-router-dom";
import MovieSchedule from "../../../../components/MovieSchedule/MovieSchedule";

export default function Cinema(props) {
  const [state, setState] = useState({
    tabPosition: "left",
  });
  const { TabPane } = Tabs;

  const { tabPosition } = state;
  return (
    <div id="cinemas">
      <Tabs tabPosition={tabPosition}>
        <TabPane
          tab={
            <NavLink to="#" className={"text-left"}>
              <h3 className="mb-0">BHD STAR CINEPLEX - PHẠM HÙNG</h3>
              <p className="text-[12px] mb-0">
                L4-SATRA PHẠM HÙNG, C6/27 PHẠM HÙNG
              </p>
              <span className="text-[12px]">Chi tiết</span>
            </NavLink>
          }
          key="1"
          className="p-5"
        >
          <ul>
            <li>
              <MovieSchedule />
            </li>
            <li>
              <MovieSchedule />
            </li>
            <li>
              <MovieSchedule />
            </li>
            <li>
              <MovieSchedule />
            </li>
          </ul>
        </TabPane>
      </Tabs>
    </div>
  );
}
