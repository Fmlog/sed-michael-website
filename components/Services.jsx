import Link from "next/link";
import styles from "../styles/Services.module.css";
import Image from "next/image";

function Services({ services }) {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h1 className={styles.subtitle}>
          These are some of the things we know how to do
        </h1>
        <div className={styles.services}>
          {services.map((service) => (
            <Link key={service.id} href={`/services/${service.name}`}>
              <div className={styles.service}>
                <div className={styles.media}>
                  {service.video ? (
                    <iframe
                      className={styles.video}
                      src={service.video}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                      autoPlay
                    ></iframe>
                  ) : (
                    <Image
                      className={styles.image}
                      src={`/img/${service.photo}`}
                      width="100%"
                      height="100%"
                      layout="responsive"
                      objectFit="cover"
                      alt=""
                    />
                  )}
                </div>
                <div className={styles.cat}>
                  <h4>{service.name}</h4>
                  <p>{service.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
