import { useContext, useEffect, useState } from "react";
import Task from "../../components/task/Task";
import styles from "./ImportantTasksPage.module.scss";
import MainContext from "../../contexts/MainContext";
import EmptyPageText from "../../components/emptyPageText/EmptyPageText";

export default function ImportantTasksPage() {
  // context
  const { tasks } = useContext(MainContext);

  // state
  const [importantTasksList, setImportantTasksList] = useState([]);

  // side effect
  useEffect(() => {
    fetch("http://localhost:8000/tasks")
      .then((res) => res.json())
      .then((data) => {
        const importantTasks = data.filter((item) => item.important === "yes");
        setImportantTasksList(importantTasks);
      });
  }, []);

  return (
    <>
      {importantTasksList.length > 0 ? (
        <div className={styles.king}>
          {importantTasksList.map((task) => {
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
