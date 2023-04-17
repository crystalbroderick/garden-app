import React from "react"
import { BiSearch } from "react-icons/bi"
const SearchBar = ({ onChange }: any) => {
  return (
    <div className="container">
      <div className="row height d-flex justify-content-center align-items-center">
        <div className="col-md-8">
          <div className="search m-3">
            <BiSearch className="fa-search"></BiSearch>
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              onChange={onChange}
            />
            <button className="btn btn-primary">Search</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
