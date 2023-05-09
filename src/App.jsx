import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/77129503?v=4',
      name: 'Jonathas Aroucha',
      role: 'DevWeb Front-end'
    },
    content: [
      { type: 'paragraph', content: 'Fala Devs 👋, blz ?',},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no Ignite, evento da Rocketseat. O nome do projeto é Ignite Feed 🚀', },
      { type: 'link', content: 'jonathas.aroucha/portifolio'},
    ],
    publishedAt: new Date('2023-05-07 15:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://media.licdn.com/dms/image/D4D03AQFTQgHklf55rA/profile-displayphoto-shrink_200_200/0/1683580637385?e=1689206400&v=beta&t=X5d53q9cOK34T8eienlBDaYFnfDcz9Wl_dG3C_YmhCk',
      name: 'Débora Barros',
      role: 'Social Media'
    },
    content: [
      { type: 'paragraph', content: 'Oi gente 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um design irado.', },
      { type: 'link', content: 'debora.amanda/portifolio'},
    ],
    publishedAt: new Date('2023-05-07 15:10:30'),
  }
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
       <Sidebar />
        <main>
          {
            posts.map(post => {
              return (
                <Post 
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
        </main>
      </div>
    </div>
  );
}
