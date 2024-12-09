import HeaderDate from "./components/headerDate/HeaderDate";
import PageName from "./components/pageName/PageName";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <div className={styles.king}>
      <div className={styles.leftContainer}>
        <div className={styles.pageNameAndDateContainer}>
          <PageName />
          <HeaderDate />
        </div>
      </div>

      <div className={styles.rightContainer}></div>
    </div>
  );
}
