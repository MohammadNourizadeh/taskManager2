import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styles from "./LinkItem.module.scss";

export default function LinkItem({
  linkAddress,
  iconColor,
  iconName,
  itemName,
  selectedItem,
  onSelect,
}) {
  return (
    <li
      onClick={() => {
        onSelect(itemName);
      }}
    >
      <Link
        to={linkAddress}
        className={selectedItem === itemName ? styles.selected : styles.king}
      >
        <span style={{ color: iconColor }}>
          <FontAwesomeIcon icon={iconName} />
        </span>
        {itemName}
      </Link>
    </li>
  );
}
