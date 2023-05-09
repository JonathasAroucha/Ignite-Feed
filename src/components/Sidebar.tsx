import { Avatar } from "./Avatar";
import { PencilLine } from "phosphor-react";

import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://media.licdn.com/dms/image/D4D16AQGFxH0LczkjiQ/profile-displaybackgroundimage-shrink_350_1400/0/1673538195506?e=1689206400&v=beta&t=Wauac1jw2I0keFrLMSHmuC7NOlLlp6plVxJPPe9SH2U"
      />

      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/77129503?v=4" />
        <strong>Jonathas Aroucha</strong>
        <span>DevWeb Front-end</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu Perfil
        </a>
      </footer>
    </aside>
  );
}
