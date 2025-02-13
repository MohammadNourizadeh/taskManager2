import { faMultiply } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import MainContext from '../../contexts/MainContext';
import styles from './AddNewForm.module.scss';
import { toast } from 'react-toastify';

export default function AddNewForm({ onClose, onAdd }) {
    // context
    const { selectedItem, appSetting } = useContext(MainContext);

    // func
    const handelAdd = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const formDate = new Date(formData.get("taskDate"))
        formDate.setHours(0, 0, 0, 0)

        const currentDate = new Date()
        currentDate.setHours(0, 0, 0, 0)


        if (formDate.getTime() < currentDate.getTime()) {
            toast.error("your selected date has expired")
        } else {

            onAdd(formData)
        }
    }

    return (
        <div
            className={styles.king}
            id={appSetting.theme === "light" ? styles.lightMode : ""}
        >
            <form onSubmit={handelAdd}>
                {selectedItem === "my day" ?
                    <>
                        <div className={styles.inputContainer}>
                            <label htmlFor="taskName">enter the task :</label>
                            <input type="text" id="taskName" name="taskName" />
                        </div>
                        <div className={styles.inputContainer}>
                            <label htmlFor="taskDate">enter the date of the task :</label>
                            <input type="date" id="taskDate" name="taskDate" />
                        </div>
                    </>
                    :
                    <div className={styles.textareaContainer}>
                        <label htmlFor="note">enter your note :</label>
                        <textarea name="note" id="note"></textarea>
                    </div>
                }
                <div className={styles.selectContainer}>
                    <label htmlFor="isImportant">is the note important ?</label>
                    <select name="isImportant" id="isImportant">
                        <option value="no">no</option>
                        <option value="yes">yes</option>
                    </select>
                </div>
                <hr />
                <div className={styles.addBtnContainer}>
                    <button type="submit">add</button>
                </div>
                <button
                    className={styles.closeBtnContainer}
                    onClick={() => {
                        onClose(false);
                    }}
                >
                    <FontAwesomeIcon icon={faMultiply} />
                </button>
            </form>
        </div>
    )
}
