import { faCircleUser, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./SideBarUsernameItem.module.scss";

export default function SideBarUsernameItem() {
  return (
    <li className={styles.king}>
      <span>
        <FontAwesomeIcon icon={faCircleUser} />
      </span>
      <div>user</div>
    </li>
  );
}
