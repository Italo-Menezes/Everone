import styles from './footer.module.scss';

export const Footer = () => {
  return (
    <>
      <section className={styles.footer}>
        <div className={styles.title}>
          <h2>My notes</h2>
        </div>
        <div className={styles.subTitle}>
          <p>
            Transforme sua gestão de tarefas agora! Comece a priorizar suas
            atividades e sinta-se realizado ao concluí-las com My Notes. Inscreva-se
            hoje e experimente a eficiência da organização na palma da sua mão.
          </p>
        </div>
      </section>
    </>
  )
}