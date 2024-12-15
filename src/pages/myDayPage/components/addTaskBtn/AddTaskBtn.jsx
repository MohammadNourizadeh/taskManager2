import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./AddTaskBtn.module.scss";

export default function AddTaskBtn() {
  return (
    <button className={styles.king}>
      <FontAwesomeIcon icon={faPlus} />
      add new task
    </button>
  );
}
