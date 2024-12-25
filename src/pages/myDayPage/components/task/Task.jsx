import { faMultiply, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import MainContext from "../../../../contexts/MainContext";
import styles from "./Task.module.scss";

export default function Task({ task }) {
  // context
  const { tasks, setTasks } = useContext(MainContext);

  // func
  const handleRemoveTask = () => {
    fetch(`http://localhost:8000/tasks/${task.id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        const temp = tasks.filter((item) => item.id !== task.id);
        setTasks(temp);
      }
    });
  };

  return (
    <div className={styles.king}>
      <div className={styles.checkBoxContainer}>
        <label className={styles.myCheck}>
          <input type="checkbox" checked={task.done} />
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
        >
          <FontAwesomeIcon icon={faStar} />
        </button>
        <button className={styles.removeIcon} onClick={handleRemoveTask}>
          <FontAwesomeIcon icon={faMultiply} />
        </button>
      </div>
    </div>
  );
}
