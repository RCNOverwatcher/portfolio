import data from './projects.json';

export const getProjects = () => {
  return data;
};

const api = (req, res) => {
  const projects = getProjects();
  res.json(projects);
};

export default api;
