import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Button } from "reactstrap";
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from "react-router-dom";

function EditProject () {
    let navigate = useNavigate(); 
    const [id, setId] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
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
      setImage(localStorage.getItem("IMAGE"));
  }, []);

  const postData = () => {
    axios.get("https://desolate-depths-34005.herokuapp.com/projects/");
    setTitle("");
    setDescription("");
  };

    const setProjectData = (data) => {
      let { id, title, description, image } = data;
      localStorage.setItem("ID", id);
      localStorage.setItem("TITLE", title);
      localStorage.setItem("DESCRIPTION", description);
      localStorage.setItem("IMAGE", image);
  };

  const getData = () => {
    axios
      .get("https://desolate-depths-34005.herokuapp.com/projects/")
      .then((getData) => {
        setAPIData(getData.data);
      });
  };

  const updateAPIData = (id) => {
    console.log("works");
    axios
      .patch(`https://desolate-depths-34005.herokuapp.com/projects/${id}`, {
        title,
        description
      })
      .then(() => {
        navigate("/project");
      });
  };

  const setEditedProject = (id, title, description, image) => {
    localStorage.setItem("ID", id);
    localStorage.setItem("TITLE", title);
    localStorage.setItem("DESCRIPTION", description);
    localStorage.setItem("IMAGE", image);
    updateAPIData(id)
};


  const deleteData = (id) => {
    axios
      .delete(`https://desolate-depths-34005.herokuapp.com/projects/${id}`)
      .then(() => {
        getData();
      });
  };

    return (
    <div className="container col-md-8">
        <Link to={"/project"}>
            <Button className="layout-left" color="tertiary"> « Back </Button>
        </Link>
        <h3>Edit Project</h3>
        <Form >
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
            <img className="card-img-top mx-auto" src={image} alt="350x350"/>
    
            <div className="edit-button-group d-flex justify-content-end">
              <Link to={"projects/new"}>
                <Button className="new-button" type="submit"
                color="secondary" variant="outline-success"> New Project </Button>
              </Link>
              
              <Button className="delete-button" type="submit"
              color="secondary" variant="outline-success"> Delete </Button>

              <Link to={"/project"}>
                <Button className="cancel-button" type="submit"
                color="secondary"variant="outline-success"> Cancel</Button> 
              </Link>

              <Link to={"/project"}>
                <Button className="edit-button" color="primary" variant="outline-success"
                type="button" onClick={() => setEditedProject(id, title, description, image)}> Save </Button> 
              </Link>
            </div>

        </Form>
    </div>
    );  
  }
export default EditProject;

