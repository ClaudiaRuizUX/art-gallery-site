import './styles/index.css'
import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';

import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProjects} from "./actions/projectActions";

class App extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchProjects();
  }

  render() {
    console.log(this.props.catPics); // log will fire every time App renders
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <div id="page-body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectPage />} />
          </Routes>
        </div>
          <h1>Abstract Art</h1>
          {this.props.loading ?
            <h1>LOADING...</h1> : 
            <ol> {this.props.projects.map(project => <li>{project.title}</li>)} </ol>
          } 
        </div>
      </BrowserRouter>
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
export default connect(mapStateToProps, mapDispatchToProps)(App);
