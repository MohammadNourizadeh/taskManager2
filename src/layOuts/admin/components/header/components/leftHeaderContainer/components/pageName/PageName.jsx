import { useContext } from "react";
import MainContext from "../../../../../../../../contexts/MainContext";
import styles from "./PageName.module.scss";

export default function PageName() {
  // context
  const { selectedItem } = useContext(MainContext);

  return <div className={styles.king}>{selectedItem}</div>;
}
