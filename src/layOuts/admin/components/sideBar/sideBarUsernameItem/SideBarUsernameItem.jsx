import { faCircleUser, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./SideBarUsernameItem.module.scss";

export default function SideBarUsernameItem({ username }) {
  return (
    <li className={styles.king}>
      <span>
        <FontAwesomeIcon icon={faCircleUser} />
      </span>
      <div>{username}</div>
    </li>
  );
}
