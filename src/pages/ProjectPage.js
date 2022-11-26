import React, { Component } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { connect } from "react-redux";
import { fetchProjects} from "../actions/projectActions";
import ProjectDetail from '../components/ProjectDetail';
// styles & fonts
import 'bootstrap/dist/css/bootstrap.min.css';

class ProjectPage extends Component {
    componentDidMount() {
      this.props.fetchProjects();
    }
    render() {
        return (
        <>
            <div className="container">
                {this.props.loading ?
                <h1>LOADING...</h1> : 
                <div className="container col-md-8">  
                    <ProjectDetail
                    title={this.props.title}
                    description={this.props.description}
                    image={this.props.image}
                    id={this.props.id}
                    />
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
export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage);