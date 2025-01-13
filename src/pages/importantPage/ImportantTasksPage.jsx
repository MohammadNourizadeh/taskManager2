import { useContext } from "react";
import MainContext from "../../contexts/MainContext";
import Task from "../../components/task/Task";
import styles from "./ImportantTasksPage.module.scss";

export default function ImportantTasksPage() {
  // context
  const { tasks } = useContext(MainContext);

  return (
    <div className={styles.king}>
      {tasks.map((task) => {
        if (task.important === "yes") {
          return <Task task={task} key={task.id} />;
        }
      })}
    </div>
  );
}
