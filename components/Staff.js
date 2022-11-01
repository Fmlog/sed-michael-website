import { people } from "../data.js";
import Image from "next/image";
import styles from "../styles/Staff.module.scss";

export default function Staff({ person }) {
  const staff = people.find((x) => x.id === Number(person));

  return (
    <>
      {staff == undefined ? (
        <section>
          <h1>Loading...</h1>
        </section>
      ) : (
        <section className={styles.modal}>
          <div className={styles.image}>
            <Image
              src={`/img/${staff.image}`}
              width="400px"
              height="400px"
              alt={staff.name}
            />
          </div>
          <div className={styles.text}>
            <h1>{staff.name}</h1>
            <h2>{staff.role}</h2>
            <p>{staff.desc}</p>
          </div>
        </section>
      )}
    </>
  );
}
