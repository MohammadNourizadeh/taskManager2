import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./DisableItem.module.scss";

export default function DisableItem({ iconColor, iconName, itemName }) {
  return (
    <li className={styles.king}>
      <span style={{ color: iconColor }}>
        <FontAwesomeIcon icon={iconName} />
      </span>
      {itemName}
    </li>
  );
}
