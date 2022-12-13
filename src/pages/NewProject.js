import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Button } from "reactstrap";
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from "react-router-dom";

function NewProject () {
    let navigate = useNavigate(); 
    const [id, setId] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    
    const postData = () => {
      axios.post("https://desolate-depths-34005.herokuapp.com/projects/", {
        title,
        description,
        image
      });

      setTitle("");
      setDescription("");
    setImage("");
    };

    return (
    <div className="container col-md-8">

        <h3>New Project</h3>
        <Form >
            <Form.Group className="title-container d-flex justify-content-between">
            <Form.Control
                className="me-2"
                aria-label="Text"
                type="text"
                defaultValue="Enter Title"
                onChange={(e) => setTitle(e.target.value)}
            />
            </Form.Group>

            <Form.Group className="mb-3">
            <Form.Control
                as="textarea"
                rows={4}
                defaultValue="Enter Description"
                onChange={(e) => setDescription(e.target.value)}
            />
            </Form.Group>
           
            <Form.Group className="image-container d-flex justify-content-between">
                <Form.Control
                    className="me-2"
                    aria-label="Text"
                    type="text"
                    defaultValue="Enter Image URL"
                    onChange={(e) => setImage(e.target.value)}
                />
            </Form.Group>

              <Link to={"/"}>
                <Button className="cancel-button" type="submit"
                color="secondary"variant="outline-success"> Cancel</Button> 
              </Link>

              <Link to={"/project"}>
                <Button className="edit-button" color="primary" variant="outline-success"
                type="button" onClick={postData}> Create Project </Button> 
              </Link>
        </Form>
    </div>
    );  
  }
export default NewProject;

