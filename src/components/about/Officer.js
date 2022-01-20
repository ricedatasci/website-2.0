import React from 'react';
import classes from '../../styles/Officer.module.css';
const Officer = (props) => {
  return (
    <li className={classes.officer}>
      <h1>{props.name}</h1>
      <img src={props.imgURL} />
      <h3>{props.position}</h3>
      <p>{props.description}</p>
    </li>
  );
};

export default Officer;
