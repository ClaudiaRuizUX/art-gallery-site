import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useLocation, Link } from "react-router-dom";
import { Button } from "reactstrap";
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";

function EditProject () {
    const [id, setId] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [APIData, setAPIData] = useState([]);

    useEffect(() => {
      axios
        .get("https://desolate-depths-34005.herokuapp.com/projects/")
        .then((response) => setAPIData(response.data));
    }, []);

    useEffect(() => {
      setId(localStorage.getItem("ID"));
      setTitle(localStorage.getItem("TITLE"));
      setDescription(localStorage.getItem("DESCRIPTION"));
  }, []);

  const postData = () => {
    axios.get("https://60ff6e102574110017078966.mockapi.io/mockdata");
    setTitle("");
    setDescription("");
  };

    const setProjectData = (data) => {
      let { id, title, description } = data;
      localStorage.setItem("ID", id);
      localStorage.setItem("TITLE", title);
      localStorage.setItem("DESCRIPTION", description)
  };

  const getData = () => {
    axios
      .get("https://desolate-depths-34005.herokuapp.com/projects/")
      .then((getData) => {
        setAPIData(getData.data);
      });
  };

  const updateAPIData = () => {
    axios
      .patch(`https://desolate-depths-34005.herokuapp.com/projects/${id}`, {
        title,
        description
      })
      .then(() => {
        getData();
      });
  };

    return (
    <div className="container col-md-8">
        <h3>Edit Project</h3>
        <Form onSubmit={() => updateAPIData(title, description)}>
            <Form.Group className="title-container d-flex justify-content-between">
            <Form.Control
                className="me-2"
                aria-label="Text"
                type="text"
                defaultValue={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            </Form.Group>

            <Form.Group className="mb-3">
            <Form.Control
                as="textarea"
                rows={4}
                defaultValue={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            </Form.Group>
            <Button type="submit" color="primary" variant="outline-success" 
            // onClick={() => updateAPIData({id}, {title}, {description})}
            >
            Save 
            </Button> 
        </Form>
    </div>
    );  
  }

export default EditProject;