import { useContext, useEffect, useState } from "react";
import Task from "../../components/task/Task";
import MainContext from "../../contexts/MainContext";
import styles from "./CheckedTasksPage.module.scss";
import EmptyPageText from "../../components/emptyPageText/EmptyPageText";

export default function CheckedTasksPage() {
  // context
  const { tasks, setTasks } = useContext(MainContext);

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
  }, [tasks]);

  return (
    <>
      {checkedTasksList.length > 0 ? (
        <div className={styles.king}>
          {checkedTasksList.map((task) => (
            <Task
              task={task}
              tasks={tasks}
              onSetNewList={(val) => {
                setTasks(val);
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
