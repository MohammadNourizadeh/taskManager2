import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect } from "react";
import EmptyPageText from "../../components/emptyPageText/EmptyPageText";
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
      {searchInputVal !== "" && tasks.length === 0 ? (
        <div className={styles.searchResultContainer}>
          <EmptyPageText
            text={`your search - ${searchInputVal} - did not match any tasks`}
            icon={faXmarkCircle}
          />
        </div>
      ) : (
        tasks.map((task) => (
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
        ))
      )}
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
