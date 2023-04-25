import FadeIn from "@rcnoverwatcher/react-fade-in-react-18";

const AboutPage = () => {
  return (
    <FadeIn transitionDuration={1000}>
      <h3>About Me</h3>
    </FadeIn>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
