import { Avatar } from "./Avatar";
import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://media.licdn.com/dms/image/C4D03AQGm_-Ve4ErIhg/profile-displayphoto-shrink_800_800/0/1660949503352?e=1688601600&v=beta&t=5181C2srn8V4OkUeYj-_j6SWc2JMG9oOwacTPtuaKeE" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Ruan Valente</strong>
              <time title="04 de Maio ás 22:25h" dateTime="2023-05-04">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom John, parabéns!! </p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
