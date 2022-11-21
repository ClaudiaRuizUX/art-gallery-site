import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from "reactstrap";

import { connect } from "react-redux";
import { fetchProjects} from "./actions/projectActions";

import Loading from "./components/Loading";
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';

import { useAuth0 } from "@auth0/auth0-react";

// styles & fonts
import 'bootstrap/dist/css/bootstrap.min.css';
import initFontAwesome from "./utils/initFontAwesome";
initFontAwesome();

class App extends Component {
  componentDidMount() {
    // this.props.fetchProjects();
  }

  render() {
    return (
      <BrowserRouter>
        <div id="app" className="d-flex flex-column h-100">
          <NavBar />
          <Container className="flex-grow-1 mt-5">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectPage />} />
            </Routes>
          </Container>
          <h1>Abstract Art</h1>
          {/* {this.props.loading ?
            <h1>LOADING...</h1> : 
            <ol> {this.props.projects.map(project => <li>{project.title}</li>)} </ol>
          }  */}
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // projects: state.projects,
    // loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProjects: () => dispatch(fetchProjects())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);