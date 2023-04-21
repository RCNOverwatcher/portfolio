import ContactCode from '../components/ContactCode';
import styles from '../styles/ContactPage.module.css';
import FadeIn from "react-fade-in";

const ContactPage = () => {

  return (
      <FadeIn>
      <div className={styles.container}>
        <div>
          <h3 className={styles.heading}>Reach Out Via Socials</h3>
          <ContactCode />
        </div>
      </div>
    </FadeIn>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Contact' },
  };
}

export default ContactPage;
