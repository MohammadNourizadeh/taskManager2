import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./EmptyPageText.module.scss";
import { faSadTear } from "@fortawesome/free-solid-svg-icons";

export default function EmptyPageText({ text, icon = faSadTear }) {
  return (
    <div className={styles.king}>
      {text}
      <FontAwesomeIcon icon={icon} />
    </div>
  );
}
