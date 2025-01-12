import { useContext } from "react";
import styles from "./ImportantTasksPage/module.scss";
import MainContext from "../../contexts/MainContext";

export default function ImportantTasksPage() {
  // context
  const { tasks } = useContext(MainContext);

  return <div className={styles.king}>ImportantPage</div>;
}
