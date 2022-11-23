import React, { Component } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { connect } from "react-redux";
import { fetchProjects} from "../actions/projectActions";
import ProjectThumbs from '../components/ProjectThumbs';

import { Button } from "reactstrap";
import { ArrowRight } from 'react-bootstrap-icons';
import { blue } from '@material-ui/core/colors';

class HomePage extends Component {
    componentDidMount() {
      this.props.fetchProjects();
    }
    
    render() {
        return (
          <>
            <div className="App">
              <h1>Art Projects</h1>
              {this.props.loading ?
                <h1>LOADING...</h1> : 
                <div className="col s8 cards-container">
                  {this.props.projects.map((project =>
                      <ProjectThumbs title={project.title} />
                      ))
                  }
                </div>
              } 
            </div>
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