import { faMoon, faUserCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import MainContext from "../../../../../../../../../contexts/MainContext";
import styles from "./SettingForm.module.scss";

export default function SettingForm() {
  // context
  const { appSetting, setNewAppSetting } = useContext(MainContext);

  // state
  const [isFormSaveBtnOpen, setIsFormSaveBtnOpen] = useState(false);
  const [isEditingUsername, setIsEditingUsername] = useState(false);
  const [inputText, setInputText] = useState(appSetting.username);
  const [selectVal, setSelectVal] = useState(appSetting.theme);

  // func
  const handleSaveChanges = () => {
    fetch("http://localhost:8000/setting", {
      method: "PUT",
      body: JSON.stringify({ username: inputText, theme: selectVal }),
    }).then((res) => {
      if (res.ok) {
        setNewAppSetting({ username: inputText, theme: selectVal });
      }
    });
    setIsFormSaveBtnOpen(false);
  };

  const handleDiscardChanges = () => {
    setInputText(appSetting.username);
    setSelectVal(appSetting.theme);
    setIsEditingUsername(false);
    setIsFormSaveBtnOpen(false);
  };

  const handleEdit = () => {
    if (inputText !== appSetting.username) {
      setIsFormSaveBtnOpen(true);
    } else if (
      inputText === appSetting.username &&
      selectVal === appSetting.theme
    ) {
      setIsFormSaveBtnOpen(false);
    }
    setIsEditingUsername((prev) => !prev);
  };

  const handleChangeAppTheme = (e) => {
    setSelectVal(e.target.value);
    if (selectVal === appSetting.theme) {
      setIsFormSaveBtnOpen(true);
    } else if (
      inputText === appSetting.username &&
      selectVal !== appSetting.theme
    ) {
      setIsFormSaveBtnOpen(false);
    }
  };

  return (
    <div
      className={styles.king}
      id={appSetting.theme === "light" ? styles.lightMode : ""}
    >
      <ul className={styles.settingOptionsList}>
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
      </ul>
      {isFormSaveBtnOpen && (
        <div className={styles.settingFormBtns}>
          <button className={styles.saveBtn} onClick={handleSaveChanges}>
            save
          </button>
          <button className={styles.resetBtn} onClick={handleDiscardChanges}>
            discard
          </button>
        </div>
      )}
    </div>
  );
}
