import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import MainContext from "../../contexts/MainContext";
import styles from "./FailureSearchText.module.scss";

export default function FailureSearchText({ searchedText }) {
  // context
  const { appSetting } = useContext(MainContext);

  return (
    <div
      className={styles.king}
      id={appSetting.theme === "light" ? styles.lightMode : ""}
    >
      <div className={styles.messageContainer}>
        Your search - <span className={styles.inputText}>{searchedText}</span> -
        did not match any documents.
      </div>
      <div className={styles.suggestionsContainer}>
        Suggestions:
        <ul>
          <li>Make sure that all words are spelled correctly.</li>
          <li>Try different keywords.</li>
          <li>Try more general keywords.</li>
        </ul>
      </div>
      <div className={styles.iconContainer}>
        <FontAwesomeIcon icon={faExclamationTriangle} />
      </div>
    </div>
  );
}
