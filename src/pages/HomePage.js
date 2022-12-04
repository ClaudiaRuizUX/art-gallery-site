import React, { Component, useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { connect } from "react-redux";
import { fetchProjects} from "../actions/projectActions";
import axios from "axios";
import { useNavigate} from "react-router";
import { Link } from "react-router-dom";
import ProjectThumbs from '../components/ProjectThumbs';
import { Button } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage () {
  const navigate = useNavigate();
  const [APIData, setAPIData] = useState([]);
  const [id, setId] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const [APISectionData, setAPISectionData] = useState([]);

  useEffect(() => {
      axios
        .get("https://desolate-depths-34005.herokuapp.com/projects/")
        .then((response) => setAPIData(response.data));
    }, []);

    useEffect(() => {
      axios
        .get("https://desolate-depths-34005.herokuapp.com/categories/")
        .then((response) => setAPISectionData(response.data));
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
    const arr1 = [];
    const allCategories = [...new Set(APISectionData.map((data) => {
      
        if (arr1.indexOf(data.name) === -1) {
          arr1.push(data.name)
        }
      })
    )];


  return (
  <>
    <section className="Branding-Left">
      <h1>Art<span>Gallery</span></h1>
      <p className="slogan">Find Art by Themes or Styles</p>
    </section>
    <section className="my-5">
    <div className="d-flex justify-content-between"> 
          <h3>Abstract Art</h3>
          <Button  color="secondary">✐ Edit Section </Button>
      </div>
      <ul className="pills">
          <li><a className="active" href="">All</a></li>
          <li><a href="">Geometric</a> <a href="">X</a></li>
          <li><a href="">Cold</a></li>
          <li><a href="">Warm</a></li>
          <li><a href="">Gestural</a></li>
          <Button color="tertiary">+ Add Category</Button>
      </ul>
          {APIData.map((data) => {
          return (
            <>
              <div className='col-md-4 py-3' key={data.id}>
                  {data.loading ?
                  <h1>LOADING...</h1> : 
                  <div className="container col-md-8">  
                    <div className="card" onClick={() => setProjectData(data)}>
                    <Link to={'/project'}>
                      <img className="card-img-top mx-auto" src={data.image} alt="350x350"/>
                      <div className="card-body">
                      <h5 className="card-title text-center">{data.title}</h5>
                      </div>
                    </Link>
                    </div>
                  </div>
                  } 
              </div>
            </>
          );
          })}
          
          <div>{console.log(arr1)}</div>




    </section>
  </>
);
}
export default HomePage;