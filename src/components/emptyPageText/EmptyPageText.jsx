import { faSadTear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import MainContext from "../../contexts/MainContext";
import styles from "./EmptyPageText.module.scss";

export default function EmptyPageText({ text, icon = faSadTear }) {
  // context
  const { appSetting } = useContext(MainContext );

  return (
    <div
      className={styles.king}
      id={appSetting.theme === "light" ? styles.lightMode : ""}
    >
      {text}
      <FontAwesomeIcon icon={icon} />
    </div>
  );
}
