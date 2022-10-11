import styles from "../styles/CTA.module.css";
import Link from "next/link";

function CTA() {
  return (
    <div className={styles.container}>
      <div class={styles.heroBackground}>
        <div class={styles.topRadius}></div>
        <div class={styles.topInnerRadius}></div>
        <div class={styles.bottomRadius}></div>
        <h1 className={styles.title}>
          Want to Upscale your brand's Visual reputation?
        </h1>
        <button className="button">
            <Link href="/contact">Contact</Link>
        </button>
      </div>
    </div>
  );
}

export default CTA;
