import { useContext, useEffect, useState } from "react";
import MainContext from "../../contexts/MainContext";
import AddTaskBtn from "./components/addTaskBtn/AddTaskBtn";
import NewTaskForm from "./components/newTaskForm/NewTaskForm";
import Task from "./components/task/Task";
import styles from "./MyDayPage.module.scss";
import { useLoaderData } from "react-router-dom";

export const fetchData = async () => {
  const res = await fetch("http://localhost:8000/tasks");
  const data = res.json();

  return data;
};

export default function MyDayPage() {
  // var
  const tasks = useLoaderData();

  // state
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className={styles.king}>
      {tasks.map((task) => (
        <Task
          taskName={task.name}
          date={task.date}
          isDone={task.done}
          isImportant={task.important}
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
