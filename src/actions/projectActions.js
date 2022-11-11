
  export const fetchProjects = () => {
    return (dispatch) => {
      dispatch({ type: "LOADING_PROJECTS" });
      fetch("https://desolate-depths-34005.herokuapp.com/projects")
        .then((response) => {
          return response.json();
        })
        .then((responseJSON) => {
          dispatch({ type: "ADD_PROJECTS", projects: responseJSON});
        });
    };
  };