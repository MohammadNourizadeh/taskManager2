import { useState } from "react";
import AddTaskBtn from "./components/addTaskBtn/AddTaskBtn";
import NewTaskForm from "./components/newTaskForm/NewTaskForm";
import styles from "./MyDayPage.module.scss";

export default function MyDayPage() {
  // state
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className={styles.king}>
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
