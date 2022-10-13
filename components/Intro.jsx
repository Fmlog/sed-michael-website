import styles from "../styles/Intro.module.css";
import Image from "next/image";
import Link from "next/link";
import Circle from "./Circle";
import Typewriter from "typewriter-effect";

function Intro() {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="#009BFA" bottom="-80vh" left="0" right="0" />
      <div className={styles.card}>
        <h1 className={styles.title}>
          <Typewriter
            options={{
              strings: ["Graphic Design", "Web Design", "Animation"],
              autoStart: true,
              delay: 50,
              loop: true,
            }}
          />
        </h1>
        <p className={styles.desc}>
          Let us use creativity and excellent design to translate your voices,
          stories, identities, and messages. We create work that appeals to
          audiences and improves the online presence of our clients.
        </p>
      </div>
        <Image
          src="/img/header-illustration.svg"
          width="800px"
          height="800px"
          objectFit="contain"
          alt=""
        />
    </div>
  );
}

export default Intro;
