import { Button } from "reactstrap";
import styles from "./navbar.module.scss";
import React, { useEffect } from 'react';

export const  Navbar: React.FC = () => {
 
  return (
    <>
      <section className={styles.navbar}  >
        <div className={styles.logo}>
          <a href="/">
            <h2>MY NOTES</h2>
          </a>
        </div>

        <div className={styles.links}>
          <Button className={styles.button}>
            <a href="#">Cadastrar</a>
          </Button>

          <Button className={styles.button}>
            <a href="#">Entrar</a>
          </Button>
        </div>
      </section>
    </>
  );
}