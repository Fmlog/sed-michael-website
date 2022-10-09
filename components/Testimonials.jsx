import styles from "../styles/Testimonials.module.css";
import Circle from "./Circle";
import { testimonials } from "../data.js";
import Image from "next/image";

function Testimonials() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Testimonials</h1>
      <div className={styles.wrapper}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className={styles.card}>
            <Image
              src={`/img/${testimonial.logo}`}
              width="40px"
              height="40px"
              alt=""
            />
            <p className={styles.comment}>{testimonial.comment}</p>
            <div className={styles.person}>
              <Image
                className={styles.avatar}
                src={`/img/${testimonial.avatar}`}
                width="45px"
                height="45px"
                objectFit="cover"
                alt=""
              />
              <div className={styles.info}>
                <span className={styles.name}> {testimonial.name} </span>
                <span className={styles.job}> {testimonial.title} </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
