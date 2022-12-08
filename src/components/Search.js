import React from "react";
import Form from 'react-bootstrap/Form';
import { Button } from "reactstrap";

const Search = props => {
    return (
        <Form className="d-flex col-md-8">
		<input
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onProjectSearch={props.onProjectSearch}
        />
		<Button variant="outline-success">Search</Button>
	    </Form>
 
    )
  }
  
  export default Search