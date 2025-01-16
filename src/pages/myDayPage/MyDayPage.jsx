import { useContext, useEffect } from "react";
import Task from "../../components/task/Task";
import MainContext from "../../contexts/MainContext";
import styles from "./MyDayPage.module.scss";
import AddTaskBtn from "./components/addTaskBtn/AddTaskBtn";
import NewTaskForm from "./components/newTaskForm/NewTaskForm";

export default function MyDayPage() {
  // context
  const { tasks, setTasks, isFormOpen, setIsFormOpen, searchInputVal } =
    useContext(MainContext);

  // side effect
  useEffect(() => {
    fetch(`http://localhost:8000/tasks/?name=${searchInputVal}`)
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, [searchInputVal]);

  return (
    <div className={styles.king}>
      {tasks.map((task) => (
        <Task
          tasks={tasks}
          task={task}
          onSetNewList={(val) => {
            setTasks(val);
          }}
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
