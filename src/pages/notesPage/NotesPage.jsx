import { useEffect, useState } from "react";
import AddNewNoteBtn from "./components/addNewNoteBtn/AddNewNoteBtn";
import NewNoteForm from "./components/newNoteForm/NewNoteForm";
import NoteBox from "./components/noteBox/NoteBox";
import styles from "./NotesPage.module.scss";
import AddNewForm from "../../components/addNewForm/AddNewForm";

export default function NotesPage() {
  // state
  const [notes, setNotes] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false)

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
      <AddNewNoteBtn onOpenForm={(val) => { setIsFormOpen(val) }} />
      {isFormOpen && <AddNewForm onClose={(val) => { setIsFormOpen(val) }} />}
    </div>
  );
}
