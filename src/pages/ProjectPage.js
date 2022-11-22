import React from 'react';
import { Button } from "reactstrap";
import { useAuth0 } from "@auth0/auth0-react";
import { ArrowRight } from 'react-bootstrap-icons';
import { blue } from '@material-ui/core/colors';

const ProjectPage = () => {
    return (
    <div className="container col-md-8">
        <div className="row">
        <Button className="layout-left" color="tertiary"> « Back </Button>
            <div className="title-container d-flex justify-content-between">
                <h3>Project Title</h3>
                <Button  color="secondary">✐ Edit Project </Button>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
            </p>
            <img className="card-img-top mx-auto" src="https://via.placeholder.com/830x512" alt="830x512"/>
            <ul className="pills">
                <li><a href="">Cold</a> <a href="">X</a></li>
                <li><a href="">Cold</a></li>
                <li><a href="">Gestural</a></li>
                <Button color="tertiary">+ Add Category</Button>
            </ul>
        </div>
    </div>
    );
}
export default ProjectPage;