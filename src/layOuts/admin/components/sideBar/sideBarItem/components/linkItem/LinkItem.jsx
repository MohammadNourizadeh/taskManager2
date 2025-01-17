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
  pageItemsCount,
}) {
  return (
    <li
      className={styles.king}
      onClick={() => {
        onSelect(itemName);
      }}
    >
      <Link
        to={linkAddress}
        className={
          selectedItem === itemName ? styles.selected : styles.unSelected
        }
      >
        <span className={styles.iconContainer} style={{ color: iconColor }}>
          <FontAwesomeIcon icon={iconName} />
        </span>
        <span>{itemName}</span>
        {pageItemsCount > 0 && (
          <span className={styles.numContainer}>{pageItemsCount}</span>
        )}
      </Link>
    </li>
  );
}
