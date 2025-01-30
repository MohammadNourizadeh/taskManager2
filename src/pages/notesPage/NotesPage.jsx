import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./NotesPage.module.scss";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

export default function NotesPage() {
  return (
    <div className={styles.king}>
      <div>
        <FontAwesomeIcon icon={faAdd} />
      </div>
    </div>
  );
}
