import { projects } from '../data.js';
import Modal from 'react-modal';
import Services from '../components/Services.jsx';
import styles from '../styles/About.module.scss';
import { useRouter } from 'next/router';


function Service({ services }) {
  const router = useRouter();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <h1 className={styles.title}>Our Services</h1>
          <p>
            We provide a wide range of solutions to empower your online
            presence. From designing and developing custom websites and
            e-commerce platforms to implementing robust cloud solutions, we
            offer comprehensive services to meet your digital needs. Our goal is
            to drive your business forward by delivering user-friendly
            interfaces, seamless user experiences, and impactful digital
            strategies.
          </p>
        </div>
      </div>
      <Services services={services}/>

    </>
  );
}
export const getStaticProps = () => {
  const services = projects;
  return {
    props: { services },
  };
};


export default Service;
