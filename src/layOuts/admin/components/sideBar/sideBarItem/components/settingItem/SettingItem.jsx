import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styles from "./SettingItem.module.scss";
import SettingForm from "./components/settingDropDown/SettingForm";

export default function SettingItem({ iconName, itemName }) {
  // state
  const [isSettingItemSelected, setIsSettingItemSelected] = useState(false);

  return (
    <>
      <li
        className={isSettingItemSelected ? styles.selected : styles.unSelected}
        onClick={() => {
          setIsSettingItemSelected((prev) => !prev);
        }}
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
