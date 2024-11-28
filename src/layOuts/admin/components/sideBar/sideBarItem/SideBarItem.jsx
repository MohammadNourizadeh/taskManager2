import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styles from "./SideBarItem.module.scss";

export default function SideBarItem({
  itemName,
  iconName,
  iconColor,
  isLink,
  linkAddress,
}) {
  return isLink ? (
    <li>
      <Link to={linkAddress} className={styles.link}>
        <span style={{ color: iconColor }}>
          <FontAwesomeIcon icon={iconName} />
        </span>
        {itemName}
      </Link>
    </li>
  ) : (
    <li className={styles.king}>
      <span style={{ color: iconColor }}>
        <FontAwesomeIcon icon={iconName} />
      </span>
      {itemName}
    </li>
  );
}
