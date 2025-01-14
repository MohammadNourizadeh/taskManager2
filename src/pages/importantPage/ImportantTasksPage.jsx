import { useContext, useEffect, useState } from "react";
import EmptyPageText from "../../components/emptyPageText/EmptyPageText";
import Task from "../../components/task/Task";
import MainContext from "../../contexts/MainContext";
import styles from "./ImportantTasksPage.module.scss";

export default function ImportantTasksPage() {
  // state
  const [importantTasksList, setImportantTasksList] = useState([]);

  // context
  const { tasks, setTasks } = useContext(MainContext);

  // side effect
  useEffect(() => {
    fetch("http://localhost:8000/tasks")
      .then((res) => res.json())
      .then((data) => {
        const importantTasks = data.filter((item) => item.important === "yes");
        setImportantTasksList(importantTasks);
      });
  }, [tasks]);

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
                  setTasks(val);
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
