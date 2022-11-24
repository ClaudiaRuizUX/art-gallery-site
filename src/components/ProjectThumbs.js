import React from 'react';
import { Container } from "reactstrap";
import { Link } from 'react-router-dom';
// styles & fonts
import { Button } from "reactstrap";
import { ArrowRight } from 'react-bootstrap-icons';
import { blue } from '@material-ui/core/colors';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProjectThumbs = (props) => {
    const { title, image, id} = props;
    return (
        <div className='col-md-4 py-3'>  
            <div className="card">
                <Link to={`/project/${id}`}>
                    <img className="card-img-top mx-auto" src={image} alt="350x350"/>
                    <div className="card-body">
                        <h5 className="card-title text-center">{title}</h5>
                    </div>
                </Link>
            </div>
        </div>
    );    
};  
export default ProjectThumbs;