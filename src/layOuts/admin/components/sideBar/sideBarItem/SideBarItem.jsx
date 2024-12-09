import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./SideBarItem.module.scss";
import LinkItem from "./components/linkItem/LinkItem";
import DisableItem from "./components/disableItem/DisableItem";
import { useState } from "react";

export default function SideBarItem({
  itemName,
  iconName,
  iconColor,
  isLink,
  linkAddress,
  disable,
}) {
  // state
  const [selectedItem, setSelectedItem] = useState("my day");

  return disable ? (
    <DisableItem
      iconColor={iconColor}
      iconName={iconName}
      itemName={itemName}
    />
  ) : isLink ? (
    <LinkItem
      linkAddress={linkAddress}
      iconColor={iconColor}
      itemName={itemName}
      iconName={iconName}
      selectedItem={selectedItem}
      onSelect={(itemName) => {
        setSelectedItem(itemName);
      }}
    />
  ) : (
    <li className={styles.king}>
      <span style={{ color: iconColor }}>
        <FontAwesomeIcon icon={iconName} />
      </span>
      {itemName}
    </li>
  );
}
