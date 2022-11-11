import './styles/index.css'
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCats,fetchProjects} from "./actions/projectActions";


class App extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchProjects();
  }

  render() {
    console.log(this.props.catPics); // log will fire every time App renders
    return (
      <div className="App">
        <h1>Abstract Art</h1>
        {this.props.loading ?
          <h1>LOADING...</h1> : 
          <ol> {this.props.projects.map(project => <li>{project.title}</li>)} </ol>
        } 
      </div>
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