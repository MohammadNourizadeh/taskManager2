import AddTaskBtn from "./components/addTaskBtn/AddTaskBtn";
import NewTaskForm from "./components/newTaskForm/NewTaskForm";
import styles from "./MyDayPage.module.scss";

export default function MyDayPage() {
  return (
    <div className={styles.king}>
      <AddTaskBtn />
      <NewTaskForm />
    </div>
  );
}
