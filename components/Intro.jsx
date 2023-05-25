import styles from '../styles/Intro.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Circle from './Circle';
import Typewriter from 'typewriter-effect';

function Intro() {
  return (
    <div className={styles.container}>
      <Circle backgroundColor='#3a66c4' bottom='-80vh' left='0' right='0' />
      <div className={styles.card}>
        <h1 className={styles.title}>
          <Typewriter
            options={{
              strings: [
                'Web Development',
                'Mobile Development',
                'Cloud Migration',
              ],
              autoStart: true,
              delay: 50,
              loop: true,
            }}
          />
        </h1>
        <p className={styles.desc}>
          Unlock the potential of your ideas with our cutting-edge software
          development. Our team combines creativity and technical excellence to
          deliver solutions that engage users and elevate your online presence.
        </p>
        <p className={styles.descM}>
          Our team combines creativity and technical excellence to deliver
          solutions that engage users and elevate your online presence.
        </p>
      </div>
      <Image
        src='/img/header-illustration.svg'
        width='800px'
        height='800px'
        objectFit='contain'
        alt='sed-michael-header'
      />
    </div>
  );
}

export default Intro;
