import React, { useState, useEffect } from 'react';
import { useLocation, Link } from "react-router-dom";
import { Button } from "reactstrap";
import { useNavigate} from "react-router";
import { useAuth0 } from "@auth0/auth0-react";

function ProjectPage() {
    const { isAuthenticated } = useAuth0();

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
        <div className="container col-md-8">  
            <div className="row">
            <Link to={"/"}>
                <Button className="layout-left" color="tertiary"> « Back </Button>
            </Link>
                <div className="title-container d-flex justify-content-between">
                    <h3>{title}</h3>
                    {isAuthenticated && (
                        <>
                        <Link to={`/projects/edit`}>
                            <Button  color="secondary" onClick={() => setProjectData(id, title, description, image)}>
                                ✐ Edit Project
                            </Button>                  
                        </Link>
                        </>
                    )}
                </div>
                <p>{description}</p>
                <img className="card-img-top mx-auto" src={image} alt="350x350"/>
            </div>
        </div>
        </div>
        </>
      ); 
  }

export default ProjectPage;