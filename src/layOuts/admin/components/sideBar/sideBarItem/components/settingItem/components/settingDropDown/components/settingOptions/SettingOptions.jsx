import { faMoon, faUserCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import MainContext from "../../../../../../../../../../../contexts/MainContext";
import styles from "./SettingOptions.module.scss";

export default function SettingOptions({ onOpenSaveBtn }) {
  // context
  const { appSetting } = useContext(MainContext);

  // state
  const [isEditingUsername, setIsEditingUsername] = useState(false);
  const [inputText, setInputText] = useState(appSetting.username);
  const [selectVal, setSelectVal] = useState(appSetting.theme);

  // func
  const handleEdit = () => {
    if (inputText !== appSetting.username) {
      onOpenSaveBtn(true);
    } else if (
      inputText === appSetting.username &&
      selectVal === appSetting.theme
    ) {
      onOpenSaveBtn(false);
    }
    setIsEditingUsername((prev) => !prev);
  };

  const handleChangeAppTheme = (e) => {
    setSelectVal(e.target.value);
    if (selectVal === appSetting.theme) {
      onOpenSaveBtn(true);
    } else if (
      inputText === appSetting.username &&
      selectVal !== appSetting.theme
    ) {
      onOpenSaveBtn(false);
    }
  };
  return (
    <>
      <li className={styles.king}>
        <div className={styles.dropDownIconContainer}>
          <FontAwesomeIcon icon={faUserCog} />
        </div>
        <div className={styles.dropDownUsernameContainer}>
          {isEditingUsername ? (
            <input
              type="text"
              name="username"
              value={inputText}
              onChange={(e) => {
                setInputText(e.target.value);
              }}
            />
          ) : (
            <span>{inputText}</span>
          )}
        </div>
        <div className={styles.dropDownBtnContainer}>
          <button onClick={handleEdit}>
            {isEditingUsername ? "done" : "edit"}
          </button>
        </div>
      </li>
      <li className={styles.king}>
        <div className={styles.dropDownIconContainer}>
          <FontAwesomeIcon icon={faMoon} />
        </div>
        <div className={styles.dropDownItemNameContainer}>theme</div>
        <div className={styles.dropDownBtnContainer}>
          <select
            name="theme"
            id="darkAndLightMode"
            value={selectVal}
            onChange={handleChangeAppTheme}
          >
            <option value="dark">dark</option>
            <option value="light">light</option>
          </select>
        </div>
      </li>
    </>
  );
}
