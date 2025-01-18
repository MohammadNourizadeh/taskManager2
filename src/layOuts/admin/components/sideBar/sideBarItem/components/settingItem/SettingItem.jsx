import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SettingDropDown from "./components/settingDropDown/SettingDropDown";
import styles from "./SettingItem.module.scss";

export default function SettingItem({
  iconName,
  itemName,
  selectedItem,
  onSelect,
}) {
  return (
    <>
      <li
        className={
          selectedItem === itemName ? styles.selected : styles.unSelected
        }
        onClick={() => {
          onSelect(itemName);
        }}
      >
        <span>
          <FontAwesomeIcon icon={iconName} />
        </span>
        {itemName}
      </li>
      {selectedItem === itemName && <SettingDropDown />}
    </>
  );
}
