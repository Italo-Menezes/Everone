import styles from "./about.module.scss";
import aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const About = () => {
  useEffect(() => {
    aos.init();
  }, []);

  return (
    <>
      <section className={styles.about}>
        <div className={styles.Content}>
          <div className={styles.sobre}>
            <p>Sobre</p>
          </div>

          <div className={styles.text}>
            <p>
              My Notes foi criado em 2023 com o objetivo de tornar a gestão de
              tarefas tanto para pessoas como para empresas mais fácil e
              eficiente. Nossa filosofia é simples: uma coisa organizada sempre
              será melhor. Por isso, oferecemos uma plataforma intuitiva e
              acessível, para que você possa manter suas tarefas, compromissos e
              projetos em ordem e sempre à mão. Não perca mais tempo com
              desorganização e experimente a tranquilidade de ter tudo sob
              controle com My Notes.
            </p>
          </div>
        </div>

        <div className={styles.porque}>
          <div className={styles.sobre}>
            <p>Porque usar My Notes?</p>
          </div>

          <div className={styles.text}>
            <p>Transforme sua vida com My Notes! Mantenha tudo organizado e acessível em um só lugar. Alcançe a tranquilidade e confiança de ter tudo sob controle. Priorize suas tarefas e sinta-se realizado ao concluí-las. Junte-se a nós e experimente a eficiência da gestão de tarefas organizada.</p>
          </div>
        </div>
      </section>
    </>
  );
};
