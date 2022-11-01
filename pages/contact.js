import styles from "../styles/Contact.module.scss";

function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Get in touch</h1>
      <form action="" className={styles.form}>
        <input className={styles.inputS} placeholder="Name"></input>
        <input className={styles.inputS} placeholder="Phone"></input>
        <input className={styles.inputL} placeholder="Email"></input>
        <input className={styles.inputL} placeholder="Subject"></input>
        <textarea
          className={styles.textarea}
          placeholder="Tell us what you need"
        ></textarea>
        <div>
          <button className="button">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
