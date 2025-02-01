import {
    faSquareUpRight,
    faStar,
    faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import MainContext from "../../../../contexts/MainContext";
import styles from "./NoteBox.module.scss";

export default function NoteBox() {
  // context
  const { appSetting } = useContext(MainContext);

  return (
    <div
      className={styles.king}
      id={appSetting.theme === "light" ? styles.lightMode : ""}
    >
      <p>
        orem ipsum dolor sit amet consectetur adipisicing elit. Maiores autem
        corrupti doloribus ab minus id sapiente et perspiciatis optio. Error
        velit odio earum minus est aperiam quae quas reiciendis mollitia!
        Nesciunt minima obcaecati amet asperiores fugiat exercitationem
        accusantium saepe, molestiae molestias eaque quasi earum nobis velit
        quod repellendus tempore voluptatum reiciendis alias minus incidunt ab
        nam quisquam. Eveniet, delectus consequuntur. Vel hic veritatis ipsam
        quibusdam, nihil asperiores minima accusantium, dolor exercitationem
        expedita dolorem ab eveniet provident eaque explicabo ad temporibus enim
        odit. Beatae, ipsum! Dolorem eaque vitae rem optio laudantium? Natus
        non, molestiae provident, quisquam earum dolorem aperiam iusto tenetur
        omnis, obcaecati mollitia illo recusandae magnam in nemo quam iste hic
        numquam? Soluta aperiam aliquam repellat modi, necessitatibus laudantium
        porro! Quo corporis ab veritatis optio error eius. Libero et dolores cum
        accusantium totam, ipsam officia itaque repudiandae ut sequi qui fugiat
        labore nesciunt necessitatibus ipsa maxime dolorum temporibus at!
        Voluptatum? Eos dicta totam reprehenderit, libero a nihil beatae dolore
        ipsa ab, accusamus quae voluptas autem quod sunt distinctio perferendis
        magni consectetur dignissimos. Eligendi delectus dolorem ea incidunt
      </p>
      <div className={styles.btnsContainer}>
        <button>
          <FontAwesomeIcon icon={faStar} />
        </button>
        <button>
          <FontAwesomeIcon icon={faSquareUpRight} />
        </button>
        <button>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    </div>
  );
}
