import { people } from "../data.js";
import Link from "next/link";
import Image from "next/image";
import Modal from "react-modal";
import Staff from "../components/Staff";
import styles from "../styles/About.module.scss";
import { useRouter } from "next/router";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#__next");
function About() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h1 className={styles.title}>About Us</h1>
        <p>
          We are a forward-thinking digital agency that assists clients in
          translating their messages via creative thought and implementation.
          Since our inception in 2020, we have produced work that has engaged
          with our client&apos;s audiences and transformed our clients&apos; digital
          reflection.
        </p>
        <h1 className={styles.title}>Our Team</h1>
        <div className={styles.people}>
          {people.map((staff) => (
            <div key={staff.id} className={styles.serviceContainer}>
              <Link
                key={staff.id}
                href={`about/?person=${staff.id}`}
                as={`/people/${staff.id}`}
              >
                <div className={styles.person}>
                  <div className={styles.media}>
                      <div className={styles.imageTop}>
                        <Image
                          src={`/img/${staff.photo}`}
                          width="100%"
                          height="100%"
                          layout="responsive"
                          alt={staff.name}
                        />
                      </div>
                      <div className={styles.image}>
                        <Image
                          src={`/img/${staff.photoBW}`}
                          width="100%"
                          height="100%"
                          layout="responsive"
                          alt={staff.name}
                        />
                    </div>
                  </div>
                  <div className={styles.description}>
                    <h3>{staff.name}</h3>
                    <p>{staff.role}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <Modal
          isOpen={!!router.query.person}
          onRequestClose={() => router.push("/about/")}
          style={customStyles}
        >
          <Staff person={router.query.person} />
        </Modal>
      </div>
    </div>
  );
}

export default About;
