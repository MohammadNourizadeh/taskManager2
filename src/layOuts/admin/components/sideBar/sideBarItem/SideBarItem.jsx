import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./SideBarItem.module.scss";
import LinkItem from "./components/linkItem/LinkItem";

export default function SideBarItem({
  itemName,
  iconName,
  iconColor,
  isLink,
  linkAddress,
}) {
  return isLink ? (
    <LinkItem
      linkAddress={linkAddress}
      iconColor={iconColor}
      itemName={itemName}
      iconName={iconName}
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
