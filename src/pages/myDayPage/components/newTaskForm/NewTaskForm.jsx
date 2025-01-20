import { faMultiply } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { toast } from "react-toastify";
import MainContext from "../../../../contexts/MainContext";
import styles from "./NewTaskForm.module.scss";

export default function NewTaskForm({ onClose }) {
  // context
  const { setTasks, setIsFormOpen, appSetting } = useContext(MainContext);

  // func
  const handelAdd = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
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
    <div
      className={styles.king}
      id={appSetting.theme === "light" ? styles.lightMode : ""}
    >
      <form onSubmit={handelAdd}>
        <div className={styles.inputContainer}>
          <label htmlFor="taskName">enter the task :</label>
          <input type="text" id="taskName" name="taskName" />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="taskDate">enter the date of the task :</label>
          <input type="date" id="taskDate" name="taskDate" />
        </div>
        <div className={styles.selectContainer}>
          <label htmlFor="isImportant">is the task important ?</label>
          <select name="isImportant" id="isImportant">
            <option value="no">no</option>
            <option value="yes">yes</option>
          </select>
        </div>
        <hr />
        <div className={styles.addBtnContainer}>
          <button type="submit">add</button>
        </div>
        <button
          className={styles.closeBtnContainer}
          onClick={() => {
            onClose(false);
          }}
        >
          <FontAwesomeIcon icon={faMultiply} />
        </button>
      </form>
    </div>
  );
}
