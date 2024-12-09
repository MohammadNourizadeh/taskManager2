import HeaderDate from "./components/headerDate/HeaderDate";
import PageName from "./components/pageName/PageName";
import styles from "./LeftHeaderContainer.module.scss";

export default function LeftHeaderContainer() {
  return (
    <div className={styles.king}>
      <div className={styles.pageNameAndDateContainer}>
        <PageName />
        <HeaderDate />
      </div>
    </div>
  );
}
