import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import MainContext from "../../../../../../../../contexts/MainContext";
import styles from "./SearchInput.module.scss";

export default function SearchInput() {
  // context
  const { setSearchInputVal } = useContext(MainContext);

  // func
  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setSearchInputVal(formData.get("searchedText"));
  };

  return (
    <form className={styles.king} onSubmit={handleSearch}>
      <button type="submit">
        <FontAwesomeIcon icon={faSearch} />
      </button>
      <input type="text" placeholder="search" name="searchedText" />
    </form>
  );
}
