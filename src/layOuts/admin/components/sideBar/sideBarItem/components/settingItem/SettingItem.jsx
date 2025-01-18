import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./SettingItem.module.scss";
import SettingForm from "./components/settingDropDown/SettingForm";

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
      {selectedItem === itemName && (
        <li>
          <SettingForm />
        </li>
      )}
    </>
  );
}
