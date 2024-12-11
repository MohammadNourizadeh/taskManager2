import SearchInput from "./components/searchInput/SearchInput";
import styles from "./RightHeaderContainer.module.scss";

export default function RightHeaderContainer() {
  return (
    <div className={styles.king}>
      <SearchInput />
    </div>
  );
}
