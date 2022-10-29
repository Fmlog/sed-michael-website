import { people } from "../data.js";
import Link from "next/link";
import Image from "next/image";

import styles from "../styles/About.module.css";
import React from "react";

function about({ services }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <h1 className={styles.title}>Services we can provide for you</h1>
          <div className={styles.services}>
            {services.map((service) => (
              <Link key={service.id} href={`/services/${service.name}`}>
                <div className={styles.service}>
                  <div className={styles.media}>
                      <Image
                        className={styles.image}
                        src={`/img/${service.photo}`}
                        width="100%"
                        height="100%"
                        layout="responsive"
                        alt={service.name}
                      />
                  </div>
                  <div className={styles.cat}>
                    <h3>{service.name}</h3>
                    <p>{service.role}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <h1>Pure CSS modal box</h1>
      <div>
        <p>You can place trigger button wherever you want.</p>
        <p>
          <label class={styles.btn} for="modal-1">
            Show me modal with a cat
          </label>
        </p>
      </div>

      <input class={styles.modalState} id="modal-1" type="checkbox" />
      <div class={styles.modal}>
        <label class={styles.modal__bg} for="modal-1"></label>
        <div class={styles.modal__inner} >
          <label class={styles.modal__close} for="modal-1"></label>
          <h2>Caaaats FTW!</h2>
          <p>
            <img src="https://i.imgur.com/HnrkBwB.gif" alt="" />
            Aliquam in sagittis nulla. Curabitur euismod diam eget risus
            venenatis, sed dictum lectus bibendum. Nunc nunc nisi, hendrerit
            eget nisi id, rhoncus rutrum velit. Nunc vel mauris dolor. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Aliquam fringilla quis nisi eget imperdiet.
          </p>
        </div>
      </div>
      </div>
    </>
  );
}
export const getStaticProps = () => {
  const services = people;
  return {
    props: { services },
  };
};

export default about;
