import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import AddNewForm from "../../components/addNewForm/AddNewForm";
import AddNewNoteBtn from "./components/addNewNoteBtn/AddNewNoteBtn";
import NoteBox from "./components/noteBox/NoteBox";
import styles from "./NotesPage.module.scss";

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

  // func
  const handelAddNewNote = (formData) => {
    const newNote = {
      id: crypto.randomUUID(),
      text: formData.get("note"),
      important: formData.get("isImportant")
    }

    if (newNote.text) {
      fetch('http://localhost:8000/notes', {
        method: "POST",
        body: JSON.stringify(newNote)
      }).then(res => {
        if (res.ok) {
          toast.success("added", { autoClose: 1000 });
          setNotes(prev => [...prev, newNote])
        }
      })
      setIsFormOpen(false)
    } else {
      if (!newNote.text) {
        toast.error("enter a note");
      }
    }
  }



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
      {isFormOpen && <AddNewForm onAdd={handelAddNewNote} onClose={(val) => { setIsFormOpen(val) }} />}
    </div>
  );
}
