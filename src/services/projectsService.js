import axios from 'axios'
const baseUrl = 'https://desolate-depths-34005.herokuapp.com/projects/'

// getting all the projects
const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}
// deleting a project
const remove = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request
}

const projectsService = {
    getAll,
    remove
}

export default projectsService
