import ProjectCard from '../components/ProjectCard';
import { getProjects } from './api/projects';
import styles from '../styles/ProjectsPage.module.css';
import FadeIn from "react-fade-in";

const ProjectsPage = ({ projects }) => {
  return (
    <FadeIn>
      <h3>Stuff I've Built So Far</h3>
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
