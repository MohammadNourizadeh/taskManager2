import { useEffect, useState } from "react";
import AddNewNoteBtn from "./components/addNewNoteBtn/AddNewNoteBtn";
import NoteBox from "./components/noteBox/NoteBox";
import styles from "./NotesPage.module.scss";

export default function NotesPage() {
  // state
  const [notes, setNotes] = useState([]);

  // side effect
  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then((res) => res.json())
      .then((data) => {
        setNotes(data);
      });
  }, []);
  
  return (
    <div className={styles.king}>
      {notes.map((note) => (
        <NoteBox
          notes={notes}
          note={note}
          onNewList={(val) => {
            setNotes(val);
          }}
          key={note.id}
        />
      ))}
      <AddNewNoteBtn />
    </div>
  );
}
