import {
    faCalendarAlt,
    faCog,
    faNoteSticky,
    faStar,
    faSun,
    faTasks,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./SideBar.module.scss";

export default function SideBar() {
  return (
    <ul className={styles.king}>
      <li>
        <div>user</div>
      </li>
      <li>
        <span>
          <FontAwesomeIcon icon={faSun} />
        </span>
        my day
      </li>
      <li>
        <span>
          <FontAwesomeIcon icon={faStar} />
        </span>
        important
      </li>
      <li>
        <span>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </span>
        planned
      </li>
      <li>
        <span>
          <FontAwesomeIcon icon={faNoteSticky} />
        </span>
        notes
      </li>
      <li>
        <span>
          <FontAwesomeIcon icon={faTasks} />
        </span>
        checked
      </li>
      <li>
        <span>
          <FontAwesomeIcon icon={faCog} />
        </span>
        setting
      </li>
    </ul>
  );
}
