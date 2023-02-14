import { useEffect, useState } from "react";
import styes from "./header.module.scss";



export function Header() {
  
  const [title, setTitle] = useState('Sejá-bem-vindo!');

  useEffect(() => {
    let intervalId: number;
    const switchTitle = () => {
      if (title === 'Sejá-bem-vindo!') {
        setTitle('My-notes');
      } else {
        setTitle('Sejá-bem-vindo!');
      }
    };

    intervalId = window.setInterval(() => {
      switchTitle();
    }, 5000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [title]);

  const [typedTitle, setTypedTitle] = useState('');
  useEffect(() => {
    let index = 0;
    const type = () => {
      setTimeout(() => {
        setTypedTitle(title.slice(0, index + 1));
        if (index < title.length - 1) {
          index++;
          type();
        }
      }, 50);
    };
    type();
  }, [title]);
  return (
    <>
      <section className={styes.header}>
        <div className={styes.Title}>
          <div className={styes.title}>
            <h1>{typedTitle}</h1>
          </div>
          <p>
            Organize suas ideias e acesse-as de qualquer lugar com MY NOTES um
            sistema de anotações online prático e acessível, sempre salvo na
            nuvem!
          </p>
          <div className={styes.buttons}>
            <button className={styes.button}>
              <a href="#">Querro fazer parte!</a>
            </button>
            <button className={styes.button}>
              <a href="#">Ja sou cliente!</a>
            </button>
          </div>
        </div>
        <div className={styes.Content}>
          <img src="/computador.png" alt="logo" />
        </div>
        <div className={styes.seta}>
          <span className="material-symbols-outlined">arrow_downward</span>
        </div>
      </section>
    </>
  );
}
