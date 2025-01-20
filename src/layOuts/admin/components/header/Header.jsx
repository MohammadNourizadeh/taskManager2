import { useContext } from "react";
import MainContext from "../../../../contexts/MainContext";
import LeftHeaderContainer from "./components/leftHeaderContainer/LeftHeaderContainer";
import RightHeaderContainer from "./components/rightHeaderContainer/RightHeaderContainer";
import styles from "./Header.module.scss";

export default function Header() {
  // context
  const { appSetting } = useContext(MainContext);

  return (
    <div
      className={styles.king}
      id={appSetting.theme === "light" ? styles.lightMode : ""}
    >
      <LeftHeaderContainer />
      <RightHeaderContainer />
    </div>
  );
}
