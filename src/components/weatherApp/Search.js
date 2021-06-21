import React from "react";

const Search = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <input
        onChange={props.onChange}
        type="text"
        placeholder="Search City"
      ></input>
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
