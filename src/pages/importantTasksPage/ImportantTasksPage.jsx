import { useEffect, useState } from "react";
import EmptyPageText from "../../components/emptyPageText/EmptyPageText";
import Task from "../../components/task/Task";
import styles from "./ImportantTasksPage.module.scss";

export default function ImportantTasksPage() {
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
      {importantTasksList.length !== 0 ? (
        <div className={styles.king}>
          {importantTasksList.map((task) => {
            return (
              <Task
                task={task}
                tasks={importantTasksList}
                onSetNewList={(val) => {
                  setImportantTasksList(val);
                }}
                key={task.id}
              />
            );
          })}
        </div>
      ) : (
        <EmptyPageText text={"starred task"} />
      )}
    </>
  );
}
