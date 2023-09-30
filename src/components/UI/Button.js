import React from "react";
import "./Button.css";

const Button = (props) => {
  const classes = "btn " + props.className;
  return (
    <button onClick={props.onClick} className={classes}>
      {props.children}
    </button>
  );
};

export default Button;
