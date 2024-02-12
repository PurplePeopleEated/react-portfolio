import projects from "../data/projects";
import Project from "../components/OneProject";

function Projects() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map(project => {
          return (
            <Project
              key={project.id}
              img={project.img}
              title={project.title}
              description={project.description}
              deployedLink={project.deployedLink}
              repoLink={project.repoLink}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;