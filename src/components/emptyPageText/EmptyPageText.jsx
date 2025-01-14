import { faSadCry } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./EmptyPageText.module.scss";

export default function EmptyPageText({ text }) {
  return (
    <div className={styles.king}>
      no {text}
      <FontAwesomeIcon icon={faSadCry} />
    </div>
  );
}
