import { faMultiply } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AddNewForm.module.scss';

export default function AddNewForm({ pageName, onClose, onAdd }) {
    // func
    const handelAdd = (e) => {
        e.preventDefault();
        onAdd()
    }

    return (
        <div
            className={styles.king}
            id={appSetting.theme === "light" ? styles.lightMode : ""}
        >
            <form onSubmit={handelAdd}>
                {pageName === "my day" ?
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
                    <label htmlFor="isNoteImportant">is the note important ?</label>
                    <select name="isNoteImportant" id="isNoteImportant">
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
