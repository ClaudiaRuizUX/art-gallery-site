import React, { Component } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { connect } from "react-redux";
import { fetchProjects} from "../actions/projectActions";
import ProjectThumbs from '../components/ProjectThumbs';
// styles & fonts
import { Button } from "reactstrap";
import { ArrowRight } from 'react-bootstrap-icons';
import { blue } from '@material-ui/core/colors';
import 'bootstrap/dist/css/bootstrap.min.css';

class HomePage extends Component {
    componentDidMount() {
      this.props.fetchProjects();
    }
    render() {
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
              <div className="container">
                  {this.props.loading ?
                    <h1>LOADING...</h1> : 
                    <div className="row">  
                      {this.props.projects.map(project => <ProjectThumbs
                        title={project.title}
                        image={project.image}
                        id={project.id}
                        />)} 
                    </div>
                  } 

              </div>
          </section>
          </>
        );
      }
}
const mapStateToProps = (state) => {
    return {
      projects: state.projects,
      loading: state.loading,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchProjects: () => dispatch(fetchProjects())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);