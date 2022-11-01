import { people } from "../data.js";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/About.module.css";
import React from "react";

function about({ services }) {
  const [display, setDisplay] = useState("none");

  const openModal = (id) => {
     const modal = document.getElementById("modal"+id);
     modal.style.display = "block";
  };
  const closeModal = () => {
    const modal = document.getElementById("modal"+id);
    modal.style.display = "none";
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <h1 className={styles.title}>About Us</h1>
          <h1 className={styles.title}>Our Team</h1>
          <div className={styles.services}>
            {services.map((service) => (
              <div className={styles.serviceContainer}>
                <div onClick={openModal(service.id)}>
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
                </div>
                <div>
                  <div
                    class={styles.modal}
                    id={"modal" + service.id}
                  >
                    <div class={styles.modal__inner}>
                      <h2>{service.name}</h2>
                      <button type="button" onClick={closeModal(service.id)}>
                        &times;
                      </button>
                      <div className={styles.image}>
                        <Image
                          src={`/img/${service.image}`}
                          width="400px"
                          height="400px"
                          alt={service.name}
                        />
                      </div>
                      <p>{service.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
