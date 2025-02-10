import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import MainContext from "../../../../contexts/MainContext";
import styles from "./AddNewNoteBtn.module.scss";

export default function AddNewNoteBtn({ onOpenForm }) {
  // context
  const { appSetting } = useContext(MainContext);

  return (
    <button
      className={styles.king}
      id={appSetting.theme === "light" ? styles.lightMode : ""}
      onClick={() => {
        onOpenForm(true)
      }}
    >
      <span><FontAwesomeIcon icon={faAdd} /></span>
    </button>
  );
}
