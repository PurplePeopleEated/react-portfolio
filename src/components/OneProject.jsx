import React from "react";
import projects from "../data/projects";

function Project({title, img, description, deployedLink, repoLink}) {
  return (
    <>
      <div className="border-2 border-purple-800 rounded-md overflow-scroll">
        <img className="flex w-64 h-full md:h-48 items-center justify-center" src={img} alt="project image" />
        <div className="w-full p-4">
          <h3 className="text-lg md:text-xl text-center mb-2 md:mb-3 font-bold">{title}</h3>
        </div>
          <p className="flex flex-wrap gap-2 flex-row text-sm md:text-md">
            <div className="text-center mx-auto pb-3">
              <a className="text-md text-purple-600" href={deployedLink} target="_blank" rel="noreferrer">View Project </a>|
              <a className="text-md text-purple-600" href={repoLink} target="_blank" rel="noreferrer"> View Repo</a>
            </div>
          </p>
      </div>
    </>
  );
}

export default Project;