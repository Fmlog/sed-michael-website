import Head from "next/head";
import Clients from "../components/Clients";
import CTA from "../components/CTA";
import Intro from "../components/Intro";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import { projects } from "../data.js";
import styles from "../styles/Home.module.css";

export default function Home({ services }) {
  return (
    <div className={styles.container} /*id="invertedcursor"*/>
      <Head>
        <title>Sed Michael</title>
        <meta
          name="description"
          content="International Digital Agency based in Lagos and the UK"
        />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, user-scalable=no" />
      </Head>
      <Intro />
      <CTA />
      <Services services={services} />
      <Testimonials />
      <Clients />
    </div>
  );
}

export const getStaticProps = () => {
  const services = projects;
  return {
    props: { services },
  };
};