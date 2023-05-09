import styles from "./Header.module.css";
import { Rocket } from "phosphor-react";


export function Header() {
  return (
    <header className={styles.header}>
      <Rocket size={42} alt="Logotipo Ignite" /> 
      <p>Ignite Feed</p>
    </header>
  );
}
