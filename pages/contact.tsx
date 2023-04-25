import ContactCode from "../components/ContactCode";
import styles from "../styles/ContactPage.module.css";
import FadeIn from "@rcnoverwatcher/react-fade-in-react-18";

const ContactPage = () => {
  return (
    <FadeIn transitionDuration={1000}>
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
    props: { title: "Contact" },
  };
}

export default ContactPage;
