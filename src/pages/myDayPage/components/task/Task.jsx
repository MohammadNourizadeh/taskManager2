import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Task.module.scss";

export default function Task({ taskName, date, isDone, isImportant }) {
  return (
    <div className={styles.king}>
      <div className={styles.checkBoxContainer}>
        <label className={styles.myCheck}>
          <input type="checkbox" checked={isDone} />
          <span className={styles.handle}></span>
        </label>
      </div>
      <div className={styles.taskInfo}>
        <div className={styles.taskName}>{taskName}</div>
        <div className={styles.taskDate}>{date}</div>
      </div>
      <div className={styles.starIcon} id={isImportant ? styles.blueStar : ""}>
        <FontAwesomeIcon icon={faStar} />
      </div>
    </div>
  );
}
