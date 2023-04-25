import styles from '../styles/Contact.module.scss';

function Contact() {
  const formSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const action =
      'https://script.google.com/macros/s/AKfycbw1AR9BYKQa3vPditZMaTT4lEH0GLoi-gcA2aTYDpt0ek1IT0D1LRhC5JLYJ8Rbtus0/exec';
    fetch(action, {
      method: 'POST',
      body: data,
    }).then(() => {
      alert('Success!');
      form.reset();
    });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Get in touch</h1>
      <form className={styles.form} onSubmit={formSubmit} method='POST'>
        <input
          name='Name'
          className={styles.inputS}
          placeholder='Name'
          required
        ></input>
        <input
          name='Phone'
          className={styles.inputS}
          placeholder='Phone'
        ></input>
        <input
          name='Email'
          className={styles.inputL}
          placeholder='Email'
        ></input>
        <input
          name='Subject'
          className={styles.inputL}
          placeholder='Subject'
        ></input>
        <textarea
          name='Request'
          className={styles.textarea}
          placeholder='Tell us what you need'
        ></textarea>
        <div>
          <button className='button' type='submit'>
            Submit
          </button>
        </div>
      </form>
      <h2>
        Or send an email to{' '}
        <span className={styles.email}>hello@sedmichael.com</span>
      </h2>
    </div>
  );
}

export default Contact;
