import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import MainContext from "../../../../../../../contexts/MainContext";
import styles from "./DisableItem.module.scss";

export default function DisableItem({ iconColor, iconName, itemName }) {
  // context
  const { appSetting } = useContext(MainContext);

  return (
    <li
      className={styles.king}
      id={appSetting.theme === "light" ? styles.lightMode : ""}
    >
      <span style={{ color: iconColor }}>
        <FontAwesomeIcon icon={iconName} />
      </span>
      {itemName}
    </li>
  );
}
