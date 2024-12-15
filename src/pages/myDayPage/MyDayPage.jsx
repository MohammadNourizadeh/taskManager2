import AddTaskBtn from "./components/addTaskBtn/AddTaskBtn";
import styles from "./MyDayPage.module.scss";

export default function MyDayPage() {
  return (
    <div className={styles.king}>
      <AddTaskBtn />
    </div>
  );
}
