import styles from "./NewTaskForm.module.scss";

export default function NewTaskForm() {
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
            <option value="no" selected>
              no
            </option>
            <option value="yes">yes</option>
          </select>
        </div>
        <hr />
        <div className={styles.addBtnContainer}>
          <button>add</button>
        </div>
      </form>
    </div>
  );
}
