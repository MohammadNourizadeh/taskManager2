import EmptyPageText from "../../components/emptyPageText/EmptyPageText";
import AddNewNoteBtn from "./components/addNewNoteBtn/AddNewNoteBtn";
import NoteBox from "./components/noteBox/NoteBox";
import styles from "./NotesPage.module.scss";

export default function NotesPage() {
  return (
    <div className={styles.king}>
      <NoteBox />
      <AddNewNoteBtn />
    </div>
  );
}
