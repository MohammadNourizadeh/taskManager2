import styles from "./Header.module.scss";

export default function Header() {
  return (
    <div className={styles.king}>
      <div className={styles.leftContainer}>
        <div className={styles.pageNameAndDateContainer}>
          <div className={styles.pageNameContainer}>my day</div>
          <div className={styles.dateContainer}>Monday, December 9</div>
        </div>
      </div>

      <div className={styles.rightContainer}></div>
    </div>
  );
}
