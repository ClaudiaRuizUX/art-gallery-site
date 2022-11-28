import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useLocation, Link } from "react-router-dom";
import {Button} from "reactstrap";
import Form from 'react-bootstrap/Form';

const EditProject = () => 
{   
    const location = useLocation()
    const id = Number(location.pathname.split("/")[2])
    const [project, setProject] = useState([])
    const getProject = async () =>
    {
        fetch(`https://desolate-depths-34005.herokuapp.com/projects/${id}`)
        .then((res) => res.json())
        .then(data =>
        {
            setProject(data)
        })
    }

    useEffect(() =>
    {
        getProject()
    }, [])

return (
    <div className="container col-md-8">
        <h3>Edit Project</h3>
        <Form>
            <Form.Group className="title-container d-flex justify-content-between">
            <Form.Control
                className="me-2"
                aria-label="Text"
                type="text"
                placeholder="Project Title"
                defaultValue={project.title}
            />
            <Button  type="submit" className="danger" color="tertiary" variant="outline-success">Remove</Button>
            <Button  type="submit" color="tertiary" variant="outline-success">Cancel</Button>
            <Button  type="submit" color="primary" variant="outline-success">Save</Button>
            </Form.Group>

            <Form.Group className="mb-3">
            <Form.Control
                as="textarea"
                rows={4}
                placeholder={project.description}
            />
            </Form.Group> 
        </Form>
        <img className="card-img-top mx-auto" src="https://via.placeholder.com/830x512" alt="830x512"/>
        <ul className="pills">
            <li><a href="">Cold</a> <a href="">X</a></li>
            <li><a href="">Gestural</a> <a href="">X</a></li>
            <Button color="tertiary">+ Add Category</Button>
        </ul>
        <div className="layout-right">
        <Button  type="submit" className="danger" color="tertiary" variant="outline-success">Remove</Button>
        <Button  type="submit" color="tertiary" variant="outline-success">Cancel</Button>
        <Button  type="submit" color="primary" variant="outline-success">Save</Button>
        </div>
    </div>
    );
  }
export default EditProject