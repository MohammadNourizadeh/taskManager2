import {
  faSquareUpRight,
  faStar,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import MainContext from "../../../../contexts/MainContext";
import styles from "./NoteBox.module.scss";

export default function NoteBox({ notes, note, onNewList }) {
  // context
  const { appSetting } = useContext(MainContext);

  // func
  const handleRemove = () => {
    fetch(`http://localhost:8000/notes/${note.id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        const temp = notes.filter((item) => item.id !== note.id);
        onNewList(temp);
      }
    });
  };

  const handleNoteImportance = () => {
    fetch(
      `http://localhost:8000/notes/${note.id}`,
      {
        method: "PATCH",
        body: JSON.stringify({ important: note.important === "yes" ? "no" : "yes" }),
      }).then((res) => {
        if (res.ok) {
          const temp = [...notes];
          const changedItemIndex = temp.findIndex(
            (item) => item.id === note.id
          );
          const changedItem = temp[changedItemIndex];
          changedItem.important = changedItem.important === "yes" ? "no" : "yes";
          temp[changedItemIndex] = changedItem;
          onNewList(temp)
        }
      })
  };
  
  return (
    <div
      className={styles.king}
      id={appSetting.theme === "light" ? styles.lightMode : ""}
    >
      <p>{note.text}</p>
      <div className={styles.btnsContainer}>
        <button
          className={styles.starBtn}
          id={note.important === "yes" ? styles.checkedStarBtn : ""}
        >
          <FontAwesomeIcon icon={faStar} onClick={handleNoteImportance} />
        </button>
        <button className={styles.squareBtn}>
          <FontAwesomeIcon icon={faSquareUpRight} />
        </button>
        <button className={styles.removeBtn} onClick={handleRemove}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    </div>
  );
}
