import styles from "../styles/Clients.module.css";
import Image from "next/image";

function Clients() {
  return (
    <div>
      <div class={styles.container}>
        <h2 class={styles.title}>
          From startups to enterprise, we’re trusted globally!
        </h2>
        <div class={styles.logoOuter}>
          <div class={styles.logoInner} />
        </div>
      </div>
    </div>
  );
}

export default Clients;
