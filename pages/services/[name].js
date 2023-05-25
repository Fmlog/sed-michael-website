import { projects } from "../../data";
import styles from "../../styles/Work.module.scss";
import Image from "next/image";
import Link from "next/link";

function Work({ work }) {
  return (
    <div className={styles.container}>
      <div></div>
      <div className={styles.cardL}>
        {work.images.map((img) => (
          <div key={img.id} className={styles.image}>
            <Image
              src={`/img/${img.url}`}
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
  const works = projects;
  const paths = works.map((item) => {
    return {
      params: { name: item.name },
    };
  });
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = (contex) => {
  const name = contex.params.name;
  const work = projects.filter((item) => item.name === name)[0];
  return {
    props: { work },
  };
};
export default Work;
