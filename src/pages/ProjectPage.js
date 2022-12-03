import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useLocation, Link } from "react-router-dom";
import { Button } from "reactstrap";
import Form from 'react-bootstrap/Form';
import { useNavigate} from "react-router";

function ProjectPage() {
    const navigate = useNavigate();

    const [id, setId] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    useEffect(() => {
        setId(localStorage.getItem("ID"));
        setTitle(localStorage.getItem("TITLE"));
        setDescription(localStorage.getItem("DESCRIPTION"));
        setImage(localStorage.getItem("IMAGE"));
    }, []);

    const setProjectData = (id, title, description, image) => {
        localStorage.setItem("ID", id);
        localStorage.setItem("TITLE", title);
        localStorage.setItem("DESCRIPTION", description);
        localStorage.setItem("IMAGE", image);
    };

      return (
        <>
        <div className="container">
        <h1>LOADING...</h1> : 
        <div className="container col-md-8">  
            <div className="row">
                <div className="title-container d-flex justify-content-between">
                    <h3>{title}</h3>
                    <Link to={`/projects/edit`}>
                        <Button  color="secondary" onClick={() => setProjectData(id, title, description, image)}>
                            ✐ Edit Project
                        </Button>
                    </Link>
                </div>
                <p>{description}</p>
                <img className="card-img-top mx-auto" src={image} alt="350x350"/>
                <ul className="pills">
                <li><a href="">Cold</a> <a href="">X</a></li>
                <li><a href="">Cold</a></li>
                <li><a href="">Gestural</a></li>
                <Button color="tertiary">+ Add Category</Button>
                </ul>
            </div>
        </div>
        </div>
        </>
      ); 
  }

export default ProjectPage;