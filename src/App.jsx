import { Post } from "./Post";
import { Header } from "./components/Header";

import styles from './App.module.css';

import "./global.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
       <Sidebar />
        <main>
          <Post author="Diego Fernandes" content="Primeiro post!" />
          <Post author="Jonathas Aroucha" content="Segundo post!" />
        </main>
      </div>
    </div>
  );
}
