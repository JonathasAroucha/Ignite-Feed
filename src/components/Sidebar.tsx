import { Avatar } from "./Avatar";
import { PencilLine } from "phosphor-react";

import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://media.licdn.com/dms/image/D4D16AQEO4rSHfh_2FQ/profile-displaybackgroundimage-shrink_350_1400/0/1684871503610?e=1690416000&v=beta&t=vJ9jIDHLBH_0euQOIGXZJUqpl9o6AK___Smb42XYxBA"
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
