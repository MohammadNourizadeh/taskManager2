import { useContext, useEffect } from "react";
import MainContext from "../../contexts/MainContext";
import AddTaskBtn from "./components/addTaskBtn/AddTaskBtn";
import NewTaskForm from "./components/newTaskForm/NewTaskForm";
import Task from "./components/task/Task";
import styles from "./MyDayPage.module.scss";

export default function MyDayPage() {
  // context
  const { tasks, setTasks, isFormOpen, setIsFormOpen } =
    useContext(MainContext);

  // side effect
  useEffect(() => {
    fetch("http://localhost:8000/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, [tasks]);

  return (
    <div className={styles.king}>
      {tasks.map((task) => (
        <Task
          task={task}
          // taskName={task.name}
          // date={task.date}
          // isDone={task.done}
          // isImportant={task.important}
          key={task.id}
        />
      ))}
      <AddTaskBtn
        onPress={(val) => {
          setIsFormOpen(val);
        }}
      />
      {isFormOpen && (
        <NewTaskForm
          onClose={(val) => {
            setIsFormOpen(val);
          }}
        />
      )}
    </div>
  );
}
