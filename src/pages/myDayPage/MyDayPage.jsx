import { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import AddNewForm from "../../components/addNewForm/AddNewForm";
import FailureSearchText from "../../components/failureSearchText/FailureSearchText";
import Task from "../../components/task/Task";
import MainContext from "../../contexts/MainContext";
import styles from "./MyDayPage.module.scss";
import AddTaskBtn from "./components/addTaskBtn/AddTaskBtn";

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

  // func
  const handelAdd = (formData) => {
    const newItem = {
      id: crypto.randomUUID(),
      name: formData.get("taskName"),
      date: formData.get("taskDate"),
      done: false,
      important: formData.get("isImportant"),
    };

    if (newItem.name !== "" && newItem.date !== "") {
      fetch("http://localhost:8000/tasks", {
        method: "POST",
        body: JSON.stringify(newItem),
      }).then((res) => {
        if (res.ok) {
          toast.success("added", { autoClose: 1000 });
          setTasks((prev) => [...prev, newItem]);
        }
      });

      setIsFormOpen(false);
    } else {
      if (newItem.name === "" && newItem.date === "") {
        toast.error("enter the task name");
        toast.error("choose a date for the task");
      } else if (newItem.name === "") {
        toast.error("enter the task name");
      } else if (newItem.date === "") {
        toast.error("choose a date for the task");
      }
    }
  };


  return (
    <div className={styles.king}>
      {searchInputVal !== "" && tasks.length === 0 ? (
        <FailureSearchText searchedText={searchInputVal} />
      ) : (
        <>
          {tasks.map((task) => (
            <Task
              tasks={tasks}
              task={task}
              onSetNewList={(val) => {
                setTasks(val);
              }}
              key={task.id}
            />
          ))}
          <AddTaskBtn
            onPress={(val) => {
              setIsFormOpen(val);
            }}
          />
          {isFormOpen && (
            <AddNewForm onClose={(val) => {
              setIsFormOpen(val);
            }}
              onAdd={handelAdd} />
          )}
        </>
      )}
    </div>
  );
}
