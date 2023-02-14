import aos from "aos";
import "aos/dist/aos.css";
import styles from "../styles/styes.module.scss";
import { About } from "@/src/components/about/about";
import { Navbar } from "@/src/common/navbar/navbar";
import Head from "next/head";
import { Header } from "@/src/components/header/header";
import { useEffect } from "react";
import { Convet } from "@/src/components/toConvert/convet";
import { Footer } from "@/src/common/footer/footer";

export default function Home() {
  useEffect(() => {
    aos.init();
  }, []);

  return (
    <>
      <Head>
        <title>Notas - IM</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Tenha acesso a melhor plataforma de anotaçoes do Brasil."
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
        <link rel="icon" href="/MYNOTAS.svg" />
      </Head>
      <main>
          <Navbar />
        <div data-aos="fade-up" data-aos-duration="1000" className="">
          <Header />
        </div>

        <div >
        <About />
        <Convet/>
        <Footer/>
        </div>
      </main>
    </>
  );
}
