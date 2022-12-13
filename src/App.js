import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from "reactstrap";
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import EditProject from './pages/EditProject';
import NewProject from './pages/NewProject';
import ConfirmationPage from './pages/ConfirmationPage';

// styles & fonts
import 'bootstrap/dist/css/bootstrap.min.css';
import initFontAwesome from "./utils/initFontAwesome";
import Confirmation from "./pages/ConfirmationPage";
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
              <Route exact path='/project' element={<ProjectPage />} />
              <Route exact path='projects/edit' element={<EditProject />} />
              <Route exact path='projects/new' element={<NewProject />} />
              <Route exact path='projects/edit/delete' element={<ConfirmationPage />} />
            </Routes>
          </Container>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;