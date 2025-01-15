import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./SideBarItem.module.scss";
import DisableItem from "./components/disableItem/DisableItem";
import LinkItem from "./components/linkItem/LinkItem";
import { useContext } from "react";
import MainContext from "../../../../../contexts/MainContext";

export default function SideBarItem({
  itemName,
  iconName,
  iconColor,
  isLink,
  linkAddress,
  disable,
}) {
  // context
  const { selectedItem, setSelectedItem } = useContext(MainContext);
  
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
