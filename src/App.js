import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from "reactstrap";

import { connect } from "react-redux";
import { fetchProjects} from "./actions/projectActions";

import Loading from "./components/Loading";
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import EditProject from './pages/Modal/EditProject';

import { useAuth0 } from "@auth0/auth0-react";

// styles & fonts
import 'bootstrap/dist/css/bootstrap.min.css';
import initFontAwesome from "./utils/initFontAwesome";
initFontAwesome();

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div id="app" className="d-flex flex-column h-100">
          <NavBar />
          <Container className="flex-grow-1 mt-5">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route exact path='/project/:id' element={<ProjectPage />} />
              {/* <Route path="/project" element={<ProjectPage />} /> */}
              <Route path="/editProject" element={<EditProject />} />
            </Routes>
          </Container>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;