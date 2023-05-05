import Image from 'next/image';
import GitHubButton from 'react-github-btn';
import styles from '../../styles/RaspberryPyGame.module.css';
import FadeIn from '@rcnoverwatcher/react-fade-in-react-18';

const RaspberryPyGame = () => {
  return (
    <div>
      <main>
        <section className={styles.centre}>
          <FadeIn transitionDuration={1500}>
            <h2 className="mb-4 align-middle text-4xl font-semibold">
              Raspberry PyGame
            </h2>
          </FadeIn>
          <div className={styles.imagepos}>
            <FadeIn transitionDuration={1500}>
              <Image
                src="https://user-images.githubusercontent.com/49075095/236273102-c1f3a498-9263-4a73-83ce-427376b59f64.png"
                width={300}
                height={300}
                alt="Pygame Project Screenshot"
                className="rounded-lg"
              />

              <GitHubButton
                href="https://github.com/esquaredj"
                data-size="large"
                data-show-count="true"
                aria-label="Follow @esquaredj on GitHub"
              >
                Follow @esquaredj
              </GitHubButton>
              <GitHubButton
                href="https://github.com/esquaredj/RaspberryPyGame"
                data-icon="octicon-star"
                data-size="large"
                data-show-count="true"
                aria-label="Star esquaredj/RaspberryPyGame on GitHub"
              >
                Star
              </GitHubButton>
            </FadeIn>
          </div>
        </section>
        <FadeIn transitionDuration={1500}>
          <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-semibold">Game Features</h2>
              <ul className="list-disc pl-6 text-lg">
                <li>Educates Users on ways to save the environment</li>
                <li>Fun and Interactive</li>
                <li>Custom designed graphics</li>
                <li>Made using PyGame with an option to run in the browser</li>
              </ul>
            </div>
          </section>
        </FadeIn>
        <div className={styles.finalframe}>
          <FadeIn transitionDuration={1500}>
            <Image
              src={
                'https://user-images.githubusercontent.com/49075095/236273328-0e1308a3-1f6f-4f33-a641-104805023f23.png'
              }
              alt={'Project Logo'}
              width={730}
              height={417}
              className={'rounded-lg'}
            />
          </FadeIn>
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Raspberry PyGame' },
    revalidate: 10,
  };
}

export default RaspberryPyGame;
