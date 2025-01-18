import { useContext, useEffect } from "react";
import styles from "./SideBar.module.scss";
import SideBarItem from "./sideBarItem/SideBarItem";
import { sideBarItems } from "./sideBarItems";
import SideBarUsernameItem from "./sideBarUsernameItem/SideBarUsernameItem";
import MainContext from "../../../../contexts/MainContext";

export default function SideBar() {
  // context
  const { appSetting, setAppSetting } = useContext(MainContext);

  // side effect
  useEffect(() => {
    fetch("http://localhost:8000/setting")
      .then((res) => res.json())
      .then((data) => {
        setAppSetting(data);
      });
  }, []);

  return (
    <ul className={styles.king}>
      <SideBarUsernameItem username={appSetting.username} />
      <hr />
      {sideBarItems.map((sideBarItem, index) => (
        <SideBarItem
          key={index}
          iconName={sideBarItem.iconName}
          itemName={sideBarItem.itemName}
          iconColor={sideBarItem.iconColor ? sideBarItem.iconColor : ""}
          isLink={sideBarItem.isLink ? sideBarItem.isLink : ""}
          linkAddress={sideBarItem.linkAddress ? sideBarItem.linkAddress : ""}
          disable={sideBarItem.disable ? sideBarItem.disable : ""}
        />
      ))}
    </ul>
  );
}
