import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Link } from "react-router-dom";
import MainContext from "../../../../../../../contexts/MainContext";
import styles from "./LinkItem.module.scss";

export default function LinkItem({
  linkAddress,
  iconColor,
  iconName,
  itemName,
  selectedItem,
  onSelect,
}) {
  // context
  const { appSetting } = useContext(MainContext);

  return (
    <li
      className={styles.king}
      onClick={() => {
        onSelect(itemName);
      }}
      id={appSetting.theme === "light" ? styles.lightMode : ""}
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
      </Link>
    </li>
  );
}
