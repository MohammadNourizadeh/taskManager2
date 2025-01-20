import styles from "./SideBar.module.scss";
import SideBarItem from "./sideBarItem/SideBarItem";
import { sideBarItems } from "./sideBarItems";
import SideBarUsernameItem from "./sideBarUsernameItem/SideBarUsernameItem";

export default function SideBar({ sidebarUsername }) {
  return (
    <ul className={styles.king}>
      <SideBarUsernameItem username={sidebarUsername} />
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
