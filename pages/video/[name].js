import { web } from "../../data";
import styles from "../../styles/Work.module.css";
import Image from "next/image";
import Link from "next/link";

function Web ({ work }) {
  return (
    <div className={styles.container}>
      <div></div>
      <div className={styles.cardL}>
        {work.images.map((img) => (
          <div key={img.id} className={styles.image}>
            <Image
              src={img.url}
              objectFit="cover"
              layout="fill"
              alt=""
            />
          </div>
        ))}
      </div>
      <div className={styles.cardS}>
        <h1 className={styles.title}>{work.title}</h1>
        <p className={styles.desc}>{work.longDesc}</p>
        <button className="button">
            <Link href="/contact">Contact</Link>
        </button>
      </div>
    </div>
  );
}

export const getStaticPaths = () => {
  const webProjects = web;
  const paths = webProjects.map((item) => {
    return {
      params: { name: item.name },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = (contex) => {
  const name = contex.params.name;
  const web = projects.filter((item) => item.name === name)[0];
  return {
    props: { web },
  };
};
export default Web;
