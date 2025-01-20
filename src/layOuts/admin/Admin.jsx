import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import MainContext from "../../contexts/MainContext";
import styles from "./Admin.module.scss";
import Header from "./components/header/Header";
import SideBar from "./components/sideBar/SideBar";

export default function Admin() {
  // context
  const { appSetting, setAppSetting, newAppSetting } = useContext(MainContext);

  // side effect
  useEffect(() => {
    fetch("http://localhost:8000/setting")
      .then((res) => res.json())
      .then((data) => {
        setAppSetting(data);
      });
  }, [newAppSetting]);

  return (
    <div
      className={styles.king}
      id={appSetting.theme === "light" ? styles.lightMode : ""}
    >
      <div className={styles.sideBarContainer}>
        <SideBar sidebarUsername={appSetting.username} />
      </div>
      <div className={styles.headerAndMainContentContainer}>
        <div className={styles.headerContainer}>
          <Header />
        </div>
        <div className={styles.mainContentContainer}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
