import { useLocation, Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "reactstrap";
import BASE_URL from '../BASE_URL';

const ProjectDetail = () => 
{   
    const location = useLocation()
    const id = Number(location.pathname.split("/")[2])
    const [project, setProject] = useState([])
    const getProject = async () =>
    {
        fetch(`${BASE_URL}/${id}`)
        .then((res) => res.json())
        .then(data =>
        {
            setProject(data)
        })
    }
    
    useEffect(() =>
    { getProject()}, [])
    
    return (
        <div className="row">
         <Link to={"/"}>
            <Button className="layout-left" color="tertiary"> « Back </Button>
        </Link>
            <div className="title-container d-flex justify-content-between">
                <h3>{project.title}</h3>
                <Link to={`/projects/${id}/edit`}>
                    <Button  color="secondary">✐ Edit Project </Button>
                </Link>
            </div>
            <p>{project.description}</p>
            <img className="card-img-top mx-auto" src={project.image} alt="830x512"/>
            <ul className="pills">
                <li><a href="">Cold</a> <a href="">X</a></li>
                <li><a href="">Cold</a></li>
                <li><a href="">Gestural</a></li>
                <Button color="tertiary">+ Add Category</Button>
            </ul>
        </div>
    );
}
export default ProjectDetail