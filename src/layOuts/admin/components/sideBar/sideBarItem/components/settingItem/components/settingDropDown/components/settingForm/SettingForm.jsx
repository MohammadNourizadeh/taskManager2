import { faMoon, faUserCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./SettingForm.module.scss";

export default function SettingForm() {
  return (
    <form className={styles.king}>
      <ul className={styles.settingOptionsList}>
        <li>
          <div className={styles.dropDownIconContainer}>
            <FontAwesomeIcon icon={faUserCog} />
          </div>
          <div className={styles.dropDownItemNameContainer}>username</div>
          <div className={styles.dropDownBtnContainer}>
            <button>edit</button>
          </div>
        </li>
        <li>
          <div className={styles.dropDownIconContainer}>
            <FontAwesomeIcon icon={faMoon} />
          </div>
          <div className={styles.dropDownItemNameContainer}>theme</div>
          <div className={styles.dropDownBtnContainer}>
            <select name="theme" id="darkAndLightMode">
              <option value="dark">dark</option>
              <option value="light">light</option>
            </select>
          </div>
        </li>
      </ul>
    </form>
  );
}
