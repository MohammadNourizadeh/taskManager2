import { faMultiply, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useId } from "react";
import MainContext from "../../contexts/MainContext";
import styles from "./Task.module.scss";

export default function Task({ tasks, task, onSetNewList }) {
  // context
  const { selectedItem } = useContext(MainContext);

  // func
  const handleRemoveTask = () => {
    fetch(`http://localhost:8000/tasks/${task.id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        const temp = tasks.filter((item) => item.id !== task.id);
        onSetNewList(temp);
      }
    });
  };

  const handleIsDone = () => {
    fetch(`http://localhost:8000/tasks/${task.id}`, {
      method: "PATCH",
      body: JSON.stringify({ done: !task.done }),
    }).then((res) => {
      if (res.ok) {
        const itemIndex = tasks.findIndex((item) => item.id === task.id);
        const temp = [...tasks];
        const changedItem = temp[itemIndex];
        changedItem.done = !task.done;
        temp[itemIndex] = changedItem;
        onSetNewList(temp);
      }
    });
  };

  const handleIsImportant = () => {
    const isTaskImportant = task.important === "no" ? "yes" : "no";
    fetch(`http://localhost:8000/tasks/${task.id}`, {
      method: "PATCH",
      body: JSON.stringify({ important: isTaskImportant }),
    }).then((res) => {
      if (res.ok) {
        const itemIndex = tasks.findIndex((item) => item.id === task.id);
        const temp = [...tasks];
        const changedItem = temp[itemIndex];
        changedItem.important = isTaskImportant;
        temp[itemIndex] = changedItem;
        onSetNewList(temp);
      }
    });
  };

  // var
  const checkboxId = useId();

  return (
    <div className={styles.king}>
      <div className={styles.checkBoxContainer}>
        <label className={styles.myCheck} htmlFor={checkboxId}>
          <input
            type="checkbox"
            checked={task.done}
            id={checkboxId}
            onChange={handleIsDone}
          />
          <span className={styles.handle}></span>
        </label>
      </div>
      <div className={styles.taskInfo}>
        <div className={styles.taskName}>{task.name}</div>
        <div className={styles.taskDate}>{task.date}</div>
      </div>
      <div className={styles.starAndRemoveBtnIcon}>
        <button
          className={styles.starIcon}
          id={task.important === "yes" ? styles.blueStar : ""}
          onClick={handleIsImportant}
        >
          <FontAwesomeIcon icon={faStar} />
        </button>
        {selectedItem === "my day" && (
          <button className={styles.removeIcon} onClick={handleRemoveTask}>
            <FontAwesomeIcon icon={faMultiply} />
          </button>
        )}
      </div>
    </div>
  );
}
