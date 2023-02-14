import styles from "./convert.module.scss";

export const Convet = () => {
  return (
    <>
      <section className={styles.toConvert}>
        <div className={styles.text}>
          <p>
            Transforme sua gestão de tarefas agora! Comece a priorizar suas
            atividades e sinta-se realizado ao concluí-las com My Notes.
            Inscreva-se hoje e experimente a eficiência da organização na palma
            da sua mão.
          </p>
        </div>
        <div className={styles.button}>
          <button>Inscreva-se</button>
        </div>
      </section>
    </>
  );
};
