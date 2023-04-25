import { projects } from '../data.js';
import Link from 'next/link';
import Image from 'next/image';
import Modal from 'react-modal';
import Staff from '../components/Staff';
import styles from '../styles/About.module.scss';
import { useRouter } from 'next/router';

let customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#__next');
function Services() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h1 className={styles.title}>About Us</h1>
        <p>
          Welcome to our web and graphic design agency! We offer a variety of
          services to help elevate your brand and take it to the next level. Our
          team of skilled designers can provide you with the following services:
        </p>
        <h1 className={styles.title}>Our Services</h1>
        
        <div className={styles.people}>
          {projects.map((staff) => (
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
                        width='100%'
                        height='100%'
                        layout='responsive'
                        alt={staff.name}
                      />
                    </div>
                    <div className={styles.image}>
                      <Image
                        src={`/img/${staff.photoBW}`}
                        width='100%'
                        height='100%'
                        layout='responsive'
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
          onRequestClose={() => router.push('/about/')}
          style={customStyles}
        >
          <Staff person={router.query.person} />
        </Modal>
      </div>
    </div>
  );
}

export default Services;
