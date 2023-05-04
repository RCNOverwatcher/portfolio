import ProjectCard from '../components/ProjectCard';
import { getProjects } from './api/projects/projects';
import styles from '../styles/ProjectsPage.module.css';
import FadeIn from '@rcnoverwatcher/react-fade-in-react-18';

const ProjectsPage = ({ projects }) => {
  return (
    <FadeIn transitionDuration={1500}>
      <h3>{"Stuff I've Built So Far"}</h3>
      <div className={styles.container}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </FadeIn>
  );
};

export async function getStaticProps() {
  const projects = getProjects();

  return {
    props: { title: 'Projects', projects },
  };
}

export default ProjectsPage;
