import { faMoon, faUserCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import MainContext from "../../../../../../../../../contexts/MainContext";
import styles from "./SettingForm.module.scss";

export default function SettingForm() {
  // context
  const { appSetting } = useContext(MainContext);

  // state
  const [isEditingUsername, setIsEditingUsername] = useState(false);
  const [isFormSaveBtnOpen, setIsFormSaveBtnOpen] = useState(false);

  return (
    <form className={styles.king}>
      <ul className={styles.settingOptionsList}>
        <li>
          <div className={styles.dropDownIconContainer}>
            <FontAwesomeIcon icon={faUserCog} />
          </div>
          <div className={styles.dropDownUsernameContainer}>
            {isEditingUsername ? (
              <input type="text" placeholder="username..." name="username" />
            ) : (
              <span>{appSetting.username}</span>
            )}
          </div>
          <div className={styles.dropDownBtnContainer}>
            <button onClick={handleEdit}>
              {isEditingUsername ? "done" : "edit"}
            </button>
          </div>
        </li>
        <li>
          <div className={styles.dropDownIconContainer}>
            <FontAwesomeIcon icon={faMoon} />
          </div>
          <div className={styles.dropDownItemNameContainer}>theme</div>
          <div className={styles.dropDownBtnContainer}>
            <select
              name="theme"
              id="darkAndLightMode"
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
          <button className={styles.saveBtn}>save</button>
          <button className={styles.resetBtn}>reset</button>
        </div>
      )}
    </form>
  );
}
