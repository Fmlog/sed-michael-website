import styles from "../styles/CTA.module.scss";
import Link from "next/link";
import Image from "next/image";

function CTA() {
  return (
    <div className={styles.container}>
      <div className={styles.heroBackground}>
        <div className={styles.topRadius}></div>
        <div className={styles.topInnerRadius}></div>
        <div className={styles.bottomRadius}></div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <h1 className={styles.title}>
            Want to Upscale your brand&apos;s visual reputation?
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
            objectFit="fill"
            alt="sedmichael-call-to-action"
          />
        </div>
      </div>
    </div>
  );
}

export default CTA;
