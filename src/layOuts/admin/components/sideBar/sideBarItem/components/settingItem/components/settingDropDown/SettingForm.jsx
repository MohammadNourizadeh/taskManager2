import { useContext, useState } from "react";
import MainContext from "../../../../../../../../../contexts/MainContext";
import styles from "./SettingForm.module.scss";
import SettingOptions from "./components/settingOptions/SettingOptions";

export default function SettingForm() {
  // context
  const { appSetting } = useContext(MainContext);

  // state
  const [isFormSaveBtnOpen, setIsFormSaveBtnOpen] = useState(false);

  const handleSaveChanges = () => {
    fetch("http://localhost:8000/setting", {
      method: "PATCH",
      body: JSON.stringify({ username: inputText, theme: selectVal }),
    });
    setIsFormSaveBtnOpen(false);
  };

  const handleDiscardChanges = () => {
    setInputText(appSetting.username);
    setSelectVal(appSetting.theme);
    setIsEditingUsername(false);
    setIsFormSaveBtnOpen(false);
  };

  return (
    <div className={styles.king}>
      <ul className={styles.settingOptionsList}>
        <SettingOptions
          onOpenSaveBtn={(val) => {
            setIsFormSaveBtnOpen(val);
          }}
        />
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
