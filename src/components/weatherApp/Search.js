import React from "react";

const Search = (props) => {
  return (
    <form className="d-flex justify-content-center m-2" onSubmit={props.onSubmit}>
      <input className="weather__search"
        onChange={props.onChange}
        type="text"
        placeholder="Search City"
      ></input>
      <button className="weather__submit" type="submit">Search</button>
    </form>
  );
};

export default Search;
