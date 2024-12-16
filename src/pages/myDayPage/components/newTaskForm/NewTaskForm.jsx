import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./NewTaskForm.module.scss";
import { faMultiply } from "@fortawesome/free-solid-svg-icons";

export default function NewTaskForm({ onClose }) {
  return (
    <div className={styles.king}>
      <form>
        <div className={styles.inputContainer}>
          <label htmlFor="taskName">enter the task :</label>
          <input type="text" id="taskName" name="taskName" />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="taskDate">enter the date of the task :</label>
          <input type="date" id="taskDate" name="taskDate" />
        </div>
        <div className={styles.selectContainer}>
          <label htmlFor="isImportant">is the task important ?</label>
          <select name="isImportant" id="isImportant">
            <option value="no">no</option>
            <option value="yes">yes</option>
          </select>
        </div>
        <hr />
        <div className={styles.addBtnContainer}>
          <button>add</button>
        </div>
        <button
          className={styles.closeBtnContainer}
          onClick={() => {
            onClose(false);
          }}
        >
          <FontAwesomeIcon icon={faMultiply} />
        </button>
      </form>
    </div>
  );
}
