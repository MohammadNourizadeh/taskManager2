import { faCircleUser, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./SideBarUsernameItem.module.scss";
import { useContext } from "react";
import MainContext from "../../../../../contexts/MainContext";

export default function SideBarUsernameItem({ username }) {
  // context
  const { appSetting } = useContext(MainContext);

  return (
    <li
      className={styles.king}
      id={appSetting.theme === "light" ? styles.lightMode : ""}
    >
      <span>
        <FontAwesomeIcon icon={faCircleUser} />
      </span>
      <div>{username}</div>
    </li>
  );
}
