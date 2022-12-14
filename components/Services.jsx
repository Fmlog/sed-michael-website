import Link from "next/link";
import styles from "../styles/Services.module.scss";
import Image from "next/image";

function Services({ services }) {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h1 className={styles.title}>Services we can provide for you</h1>
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
                      alt={service.name}
                    />
                  )}
                </div>
                <div className={styles.cat}>
                  <h3>{service.name}</h3>
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
