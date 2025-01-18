import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./SettingItem.module.scss";
import { faMoon, faPerson, faUserCog } from "@fortawesome/free-solid-svg-icons";

export default function SettingItem({ iconName, itemName }) {
  return (
    <>
      <li className={styles.king}>
        <span>
          <FontAwesomeIcon icon={iconName} />
        </span>
        {itemName}
      </li>
      <li className={styles.settingDropDown}>
        <form className={styles.settingForm}>
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
      </li>
    </>
  );
}
