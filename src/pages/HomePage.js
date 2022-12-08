import React, { Component, useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { connect } from "react-redux";
import { fetchProjects} from "../actions/projectActions";
import axios from "axios";
import { useNavigate} from "react-router";
import { Link } from "react-router-dom";
import Search from '../components/Search';
import { Button } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectCard from '../components/ProjectCard'

function HomePage () {
  const navigate = useNavigate();
  const [id, setId] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [searchTerm, setSearchTermState] = useState("");

  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
      axios
        .get("https://desolate-depths-34005.herokuapp.com/projects/")
        .then((response) => setAPIData(response.data));
    }, []);

    const setProjectData = (data) => {
      let { id, title, description, image } = data;
      localStorage.setItem("ID", id);
      localStorage.setItem("TITLE", title);
      localStorage.setItem("DESCRIPTION", description);
      localStorage.setItem("IMAGE", image);
    };

    const getProjectData = () => {
      axios
        .get(`https://desolate-depths-34005.herokuapp.com/projects/${id}`)  
        .then((getProjectData) => {
          setAPIData(getProjectData.data);
        });
    };

    const onProjectSearch = (event) => {
      setSearchTermState({ searchTerm: event.target.value })
    }

    return (
    <div>
      <Search onProjectSearch={onProjectSearch} />
      {APIData.filter(project => project.title.includes(searchTerm)).map((project) => {
      return (
        <>
      <div className='col-md-4 py-3' key={project.id}>
      {project.loading ?
      <h1>LOADING...</h1> : 
        <div className="container col-md-8">  
          <div className="card" onClick={() => setProjectData(project)}>
          
          <ProjectCard key={project.id} project={project}  />
          </div>
        </div>
      }    
      </div>
        </>
      );
      })}
    </div>
    )
}
export default HomePage;

  