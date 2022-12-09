import React from 'react'

const Search = props => {
  return (
    <div className="ui search d-flex">
      <div className="d-flex col-md-8 w-55">
      <i class="bi bi-search"></i>
        <input
        className="form-control form-control-sm ml-3 "
        aria-label="Search"
        placeholder="Search Projects"
        onChange={props.onChange} 
        />
      </div>
    </div>
  )
}

export default Search
