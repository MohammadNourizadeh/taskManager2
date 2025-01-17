import styles from "./FailureSearchText.module.scss";

export default function FailureSearchText({ searchedText }) {
  return (
    <div className={styles.king}>
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
    </div>
  );
}
