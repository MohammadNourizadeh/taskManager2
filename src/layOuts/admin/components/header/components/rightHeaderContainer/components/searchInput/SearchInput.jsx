import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import MainContext from "../../../../../../../../contexts/MainContext";
import styles from "./SearchInput.module.scss";

export default function SearchInput() {
  // context
  const { setSearchInputVal } = useContext(MainContext);

  // state
  const [inputVal, setInputVal] = useState("");

  // func
  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setSearchInputVal(formData.get("searchedText"));
    setInputVal("");
  };

  return (
    <form className={styles.king} onSubmit={handleSearch}>
      <button type="submit">
        <FontAwesomeIcon icon={faSearch} />
      </button>
      <input
        type="text"
        placeholder="search"
        name="searchedText"
        value={inputVal}
        onChange={(e) => {
          setInputVal(e.target.value);
        }}
      />
    </form>
  );
}
