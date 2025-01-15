import styles from "./SubmitRemoveTask.module.scss";

export default function SubmitRemoveTask() {
  return (
    <div className={styles.king}>
      <div className={styles.container}>
        <span>are you sure ?</span>
        <div className={styles.btnsContainer}>
          <button id={styles.yesBtn}>yes</button>
          <button id={styles.noBtn}>no</button>
        </div>
      </div>
    </div>
  );
}
