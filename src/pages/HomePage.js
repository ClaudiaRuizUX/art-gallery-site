import React, { Component, useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import projectsService from "../services/projectsService";
import { Link, useNavigate } from "react-router-dom";
import { slice } from "lodash";

import ProjectCard from '../components/ProjectCard';
import Search from '../components/Search';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "reactstrap";

function HomePage () {
  const { isAuthenticated } = useAuth0();
  const [id, setId] = useState(false);
  const [searchTerm, setSearchTermState] = useState("");

  const [APIData, setAPIData] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false)
  const [index, setIndex] = useState(5)
  const initialAPIData = slice(APIData, 0, index)

  const loadMore = () => {
    setIndex(index + 5)
    if (index >= APIData.length) {
      setIsCompleted(true)
    } else {
      setIsCompleted(false)
    }
  }
    useEffect(() => {
        projectsService
            .getAll()
            .then(projects => {
              setAPIData(projects)
            })
    }, [])

    const setProjectData = (data) => {
      let { id, title, description, image } = data;
      localStorage.setItem("ID", id);
      localStorage.setItem("TITLE", title);
      localStorage.setItem("DESCRIPTION", description);
      localStorage.setItem("IMAGE", image);
    };

    const handleSearchChange = (event) => {
      setSearchTermState( event.target.value );
    }

    return (
    <div>

    <section className="container ">
      <div className="row">
        <div className="col">
          <h1>Art<span>Gallery</span></h1>
        </div>
        <div className="col align-bottom">
          <Search onChange={handleSearchChange} />
        </div>
        {isAuthenticated && (
            <>
            <Link to={"projects/new"}>
              <Button className="new-button" type="submit"
              color="secondary" variant="outline-success"> New Project </Button>
            </Link>
            </>
        )}
      </div>
    </section>

    <section className="my-5">
      <div className="container">
        <div className="row">
          {initialAPIData.filter(project => project.title.includes(searchTerm)).map((project) => {
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

        <div className="layout-center">
        {isCompleted ? (
          <button
            onClick={loadMore}
            type="button"
            className="btn btn-secondary disabled"
          >
            That's It
          </button>
        ) : (
          <button onClick={loadMore} type="button" className="btn btn-secondary">
            Load More +
          </button>
        )}
      </div>
      </div>
    </section>
  </div>
  )
}
export default HomePage;

  