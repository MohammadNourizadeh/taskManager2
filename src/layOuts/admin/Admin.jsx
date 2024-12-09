import styles from "./Admin.module.scss";
import Header from "./components/header/Header";
import SideBar from "./components/sideBar/SideBar";

export default function Admin() {
  return (
    <div className={styles.king}>
      <div className={styles.sideBarContainer}>
        <SideBar />
      </div>
      <div className={styles.headerAndMainContentContainer}>
        <div className={styles.headerContainer}>
          <Header />
        </div>
        <div className={styles.mainContentContainer}></div>
      </div>
    </div>
  );
}
