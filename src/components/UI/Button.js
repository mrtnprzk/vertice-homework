import React from 'react';
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={classes.btn} onClick={props.onClick} style={props.style} value={props.value}>
      {props.children}
    </button>
  );
}

export default Button