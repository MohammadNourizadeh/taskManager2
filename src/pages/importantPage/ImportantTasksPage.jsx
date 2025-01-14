import { useContext, useEffect } from "react";
import Task from "../../components/task/Task";
import styles from "./ImportantTasksPage.module.scss";
import MainContext from "../../contexts/MainContext";
import EmptyPageText from "../../components/emptyPageText/EmptyPageText";

export default function ImportantTasksPage() {
  // context
  const { tasks, setTasks } = useContext(MainContext);

  // side effect
  useEffect(() => {
    fetch("http://localhost:8000/tasks")
      .then((res) => res.json())
      .then((data) => {
        const importantTasks = data.filter((item) => item.important === "yes");
        setTasks(importantTasks);
      });
  }, []);

  console.log(tasks.length);

  return (
    <>
      {tasks.length > 0 ? (
        <div className={styles.king}>
          {tasks.map((task) => {
            if (task.important === "yes") {
              return <Task task={task} key={task.id} />;
            }
          })}
        </div>
      ) : (
        <EmptyPageText text={"starred task"} />
      )}
    </>
  );
}
