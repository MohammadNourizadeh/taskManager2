import AddNewNoteBtn from "./components/addNewNoteBtn/AddNewNoteBtn";
import styles from "./NotesPage.module.scss";

export default function NotesPage() {
  return (
    <div className={styles.king}>
      <AddNewNoteBtn />
    </div>
  );
}
