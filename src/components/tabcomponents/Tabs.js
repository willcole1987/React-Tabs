import React, { useState } from "react";
import TabNavItem from "./TabNavItem";
import TabContent from "./TabContent";
import ButtonNavigation from "./ButtonNavigation";

const Tabs = () => {
  const [currentId, setCurrentId] = useState(2);
  const [activeTab, setActiveTab] = useState("tab1");
  const [tabList, setTabList] = useState([{ title: "Tab 1", id: "tab1" }]);

  const addTab = () => {
    if (currentId < 10) {
      setCurrentId(currentId + 1);
      const newTabList = [...tabList];
      const newTab = "Tab " + currentId;
      const newId = "tab" + currentId;
      newTabList.push({ title: newTab, id: newId });
      Object.freeze(newTabList);
      setTabList(newTabList);
    }
  };

  const forwardTab = () => {
    console.log("working");
    const i = tabList.findIndex((x) => x.id === activeTab) + 1;
    const max = i > tabList.length ? tabList.length : i;
    setActiveTab(tabList[max].id);
  };

  const backTab = () => {
    const i = tabList.findIndex((x) => x.id === activeTab);
    if (i > 0) {
      setActiveTab(tabList[i - 1].id);
    }
  };

  return (
    <div className="Tabs">
      <ul className="nav">
        {tabList.map((x) => (
          <TabNavItem
            title={x.title}
            id={x.id}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        ))}
      </ul>

      <div className="text-center">
        <ButtonNavigation backTab={backTab} forwardTab={forwardTab} />
      </div>

      <div className="outlet">
        {tabList.map((x) => (
          <TabContent id={x.id} activeTab={activeTab}>
            <p>{x.title}</p>
          </TabContent>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
