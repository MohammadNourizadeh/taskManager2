import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import MainContext from "../../../../../../../contexts/MainContext";
import styles from "./SettingItem.module.scss";
import SettingForm from "./components/settingDropDown/SettingForm";

export default function SettingItem({ iconName, itemName }) {
  // context
  const { appSetting } = useContext(MainContext);

  // state
  const [isSettingItemSelected, setIsSettingItemSelected] = useState(false);

  return (
    <>
      <li
        className={isSettingItemSelected ? styles.selected : styles.unSelected}
        onClick={() => {
          setIsSettingItemSelected((prev) => !prev);
        }}
        id={
          appSetting.theme === "light" && isSettingItemSelected
            ? styles.lightModeSelected
            : appSetting.theme === "light"
            ? styles.lightModeUnSelected
            : ""
        }
      >
        <span>
          <FontAwesomeIcon icon={iconName} />
        </span>
        {itemName}
      </li>
      {isSettingItemSelected && (
        <li>
          <SettingForm />
        </li>
      )}
    </>
  );
}
