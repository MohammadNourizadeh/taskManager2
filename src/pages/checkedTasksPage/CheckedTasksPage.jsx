import { useEffect, useState } from "react";
import EmptyPageText from "../../components/emptyPageText/EmptyPageText";
import Task from "../../components/task/Task";
import styles from "./CheckedTasksPage.module.scss";

export default function CheckedTasksPage() {
  // state
  const [checkedTasksList, setCheckedTasksList] = useState([]);

  // side effect
  useEffect(() => {
    fetch("http://localhost:8000/tasks")
      .then((res) => res.json())
      .then((data) => {
        const checkedTasks = data.filter((item) => item.done === true);
        setCheckedTasksList(checkedTasks);
      });
  }, []);

  return (
    <>
      {checkedTasksList.length > 0 ? (
        <div className={styles.king}>
          {checkedTasksList.map((task) => (
            <Task
              task={task}
              tasks={checkedTasksList}
              onSetNewList={(val) => {
                setCheckedTasksList(val);
              }}
              key={task.id}
            />
          ))}
        </div>
      ) : (
        <EmptyPageText text={"checked task"} />
      )}
    </>
  );
}
