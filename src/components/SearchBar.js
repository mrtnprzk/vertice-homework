import React, {useState} from 'react';
import classes from "./SearchBar.module.css";

const SearchBar = (props) => {

  const [item, setItem] = useState("react");

  function changeHandler(e){
    setItem(e.target.value)
    props.fetchDataSearch(item);
  }

  return (
    <input
      className={classes.search}
      type="text"
      placeholder="Search..."
      onChange={changeHandler}
    />
  );
}

export default SearchBar