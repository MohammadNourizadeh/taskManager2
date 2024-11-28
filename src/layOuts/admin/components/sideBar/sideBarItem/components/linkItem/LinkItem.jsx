import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styles from "./LinkItem.module.scss";

export default function LinkItem({ linkAddress, iconColor, iconName , itemName }) {
  return (
    <li>
      <Link to={linkAddress} className={styles.king}>
        <span style={{ color: iconColor }}>
          <FontAwesomeIcon icon={iconName} />
        </span>
        {itemName}
      </Link>
    </li>
  );
}
