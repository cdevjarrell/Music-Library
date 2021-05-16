import React from "react";

const SearchBox = ({ searchBoxChange }) => {
  return (
    <input
      type="search"
      className="search"
      placeholder="Search Music"
      onChange={searchBoxChange}
    />
  );
};

export default SearchBox;
