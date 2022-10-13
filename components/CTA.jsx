import styles from "../styles/CTA.module.css";
import Link from "next/link";
import Image from "next/image";

function CTA() {
  return (
    <div className={styles.container}>
      <div class={styles.heroBackground}>
        <div class={styles.topRadius}></div>
        <div class={styles.topInnerRadius}></div>
        <div class={styles.bottomRadius}></div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <h1 className={styles.title}>
            Want to Upscale your brand's visual reputation?
          </h1>
          <button className="button">
            <Link href="/contact">Contact</Link>
          </button>
        </div>
        <div className={styles.image}>
          <Image
            src="/img/call-to-action.svg"
            width="700px"
            height="500px"
            objectFit="fill "
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default CTA;
