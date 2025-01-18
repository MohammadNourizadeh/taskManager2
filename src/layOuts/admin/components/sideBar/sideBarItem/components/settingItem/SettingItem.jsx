import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./SettingItem.module.scss";

export default function SettingItem({ iconName, itemName }) {
  return (
    <li className={styles.king}>
      <span>
        <FontAwesomeIcon icon={iconName} />
      </span>
      {itemName}
    </li>
  );
}
