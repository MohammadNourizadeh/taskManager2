import { faMultiply } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import MainContext from '../../../../contexts/MainContext';
import styles from './NewNoteForm.module.scss';

export default function NewNoteForm({ onClose }) {
    // context
    const { appSetting } = useContext(MainContext);

    return (
        <div
            className={styles.king}
            id={appSetting.theme === "light" ? styles.lightMode : ""}
        >
            <form>
                <div className={styles.textareaContainer}>
                    <label htmlFor="note">enter your note :</label>
                    <textarea name="note" id="note"></textarea>
                </div>
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
// onSubmit={handelAdd}