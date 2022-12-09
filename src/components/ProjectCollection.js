import React from 'react'
import ProjectCard from './ProjectCard'
import 'bootstrap/dist/css/bootstrap.min.css'

const ProjectCollection = ({ project }) => {
    console.log(project)
    return (
	<div>
    {project.map(project => (
        <ProjectCard key={project.id} project={project}  />
    ))}
    </div>
)}
export default ProjectCollection