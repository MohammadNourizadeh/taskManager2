import {
  faEdit,
  faStar,
  faXmark
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import MainContext from "../../../../contexts/MainContext";
import styles from "./NoteBox.module.scss";

export default function NoteBox({ notes, note, onNewList }) {
  // context
  const { appSetting } = useContext(MainContext);

  // state
  const [isEditingNote, setIsEditingNote] = useState(false)
  const [inputText, setInputText] = useState(note.text)

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

  const handleDiscard = () => {
    setInputText(note.text)
    setIsEditingNote(false)
  }

  const handleSaveNewNote = () => {
    fetch(`http://localhost:8000/notes/${note.id}`, {
      method: "PATCH",
      body: JSON.stringify({ text: inputText })
    }).then(res => {
      if (res.ok) {
        const temp = [...notes]
        const index = temp.findIndex(item => item.id === note.id)
        const changedItem = temp[index]
        changedItem.text = inputText
        temp[index] = changedItem
        onNewList(temp)
      }
    })
    setIsEditingNote(false)
  }


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
      {isEditingNote ?
        <div className={styles.textareaContainer}>
          <textarea autoFocus name="note" id="note" value={inputText} onChange={(e) => { setInputText(e.target.value) }} />
        </div>
        :
        <p>{inputText}</p>
      }
      {isEditingNote ?
        <div className={styles.saveAndDiscardBtnsContainer}>
          <button className={styles.saveBtn} onClick={() => inputText !== note.text && handleSaveNewNote()} id={inputText === note.text ? styles.disableSaveBtn : styles.activeSaveBtn}>
            save
          </button>
          <button className={styles.discardBtn} onClick={handleDiscard}>
            discard
          </button>
        </div>
        :
        <div className={styles.btnsContainer}>
          <button
            className={styles.starBtn}
            id={note.important === "yes" ? styles.checkedStarBtn : ""}
          >
            <FontAwesomeIcon icon={faStar} onClick={handleNoteImportance} />
          </button>
          <button className={styles.editBtn} onClick={() => { setIsEditingNote(true) }}>
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button className={styles.removeBtn} onClick={handleRemove}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
      }
    </div>
  );
}
