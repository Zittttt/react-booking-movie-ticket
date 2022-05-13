import React, { useState } from "react";
import { Tabs, Radio, Space } from "antd";
import Cinema from "./Cinemas/Cinema";

export default function CinemaList() {
  const [state, setState] = useState({
    tabPosition: "left",
  });
  const { TabPane } = Tabs;

  const { tabPosition } = state;
  return (
    <div className="flex justify-center mt-10">
      <Tabs
        tabPosition={tabPosition}
        className="w-[960px] h-[720px] border-2 border-grey"
      >
        <TabPane
          tab={
            <img
              src="https://picsum.photos/200"
              className="rounded-full"
              width={65}
            />
          }
          key="1"
        >
          <Cinema />
        </TabPane>
        <TabPane
          tab={
            <img
              src="https://picsum.photos/200"
              className="rounded-full"
              width={65}
            />
          }
          key="2"
        >
          <Cinema />
        </TabPane>
        <TabPane
          tab={
            <img
              src="https://picsum.photos/200"
              className="rounded-full"
              width={65}
            />
          }
          key="3"
        >
          <Cinema />
        </TabPane>
        <TabPane
          tab={
            <img
              src="https://picsum.photos/200"
              className="rounded-full"
              width={65}
            />
          }
          key="4"
        >
          <Cinema />
        </TabPane>
        <TabPane
          tab={
            <img
              src="https://picsum.photos/200"
              className="rounded-full"
              width={65}
            />
          }
          key="5"
        >
          <Cinema />
        </TabPane>
        <TabPane
          tab={
            <img
              src="https://picsum.photos/200"
              className="rounded-full"
              width={65}
            />
          }
          key="6"
        >
          <Cinema />
        </TabPane>
      </Tabs>
    </div>
  );
}
