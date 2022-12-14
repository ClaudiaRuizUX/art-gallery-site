import React from 'react'

const Search = props => {
  return (
    <div className="ui search">
      <div className="d-flex">
      <i class="bi-search"></i>
        <input
        className="form-control form-control-m "
        aria-label="Search"
        placeholder="Search Projects"
        onChange={props.onChange} 
        />
      </div>
    </div>
  )
}

export default Search
