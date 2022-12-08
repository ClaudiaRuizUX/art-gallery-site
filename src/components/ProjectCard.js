import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
const { title, image } = project
    return (
    <Link to={'/project'}>
        <div className="card-body">
        <h5 className="card-title text-center">{title}</h5>
        </div>
        <img className="card-img-top mx-auto" src={image} alt="350x350"/>
    </Link>
        )
}
    
export default ProjectCard