import FadeIn from "react-fade-in";

const AboutPage = () => {
  return (
    <FadeIn>
      <h3>About Me</h3>
    </FadeIn>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
