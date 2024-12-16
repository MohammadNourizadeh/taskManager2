import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./AddTaskBtn.module.scss";

export default function AddTaskBtn({ onPress }) {
  return (
    <button
      className={styles.king}
      onClick={() => {
        onPress(true);
      }}
    >
      <FontAwesomeIcon icon={faPlus} />
      add new task
    </button>
  );
}
