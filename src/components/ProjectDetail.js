import React from 'react';
import { Button } from "reactstrap";
import { useAuth0 } from "@auth0/auth0-react";
import { ArrowRight } from 'react-bootstrap-icons';
import { blue } from '@material-ui/core/colors';

const ProjectDetail = (props) => {
    const { title, image, description, id} = props;
    return (
        <div className="row">
        <Button className="layout-left" color="tertiary"> « Back </Button>
            <div className="title-container d-flex justify-content-between">
                <h3>{title}</h3>
                <Button  color="secondary">✐ Edit Project </Button>
            </div>
            <p>{description}</p>
            <img className="card-img-top mx-auto" src={image} alt="830x512"/>
            <ul className="pills">
                <li><a href="">Cold</a> <a href="">X</a></li>
                <li><a href="">Cold</a></li>
                <li><a href="">Gestural</a></li>
                <Button color="tertiary">+ Add Category</Button>
            </ul>
        </div>
    );
}
export default ProjectDetail;