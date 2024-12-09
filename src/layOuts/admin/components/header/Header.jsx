import LeftHeaderContainer from "./components/leftHeaderContainer/LeftHeaderContainer";
import RightHeaderContainer from "./components/rightHeaderContainer/RightHeaderContainer";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <div className={styles.king}>
      <LeftHeaderContainer />
      <RightHeaderContainer />
    </div>
  );
}
