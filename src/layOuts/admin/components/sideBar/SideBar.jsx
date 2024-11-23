import styles from "./SideBar.module.scss";
import SideBarItem from "./sideBarItem/SideBarItem";
import { sideBarItems } from "./sideBarItems";

export default function SideBar() {
  return (
    <ul className={styles.king}>
      <li>
        <div>user</div>
      </li>
      {sideBarItems.map((sideBarItem, index) => (
        <SideBarItem
          key={index}
          iconName={sideBarItem.iconName}
          itemName={sideBarItem.itemName}
          iconColor={sideBarItem.iconColor ? sideBarItem.iconColor : ""}
        />
      ))}
    </ul>
  );
}
