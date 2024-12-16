import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Task.module.scss";

export default function Task() {
  return (
    <div className={styles.king}>
      <div className={styles.checkBoxContainer}>
        <label class={styles.myCheck}>
          <input type="checkbox" /> <span class={styles.handle}></span>
        </label>
      </div>
      <div className={styles.taskInfo}>
        <div className={styles.taskName}>awd</div>
        <div className={styles.taskDate}>2024-12-17</div>
      </div>
      <div className={styles.starIcon}>
        <FontAwesomeIcon icon={faStar} />
      </div>
    </div>
  );
}
