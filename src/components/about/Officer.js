import React from 'react';
import Card from '../shared/Card';

const Officer = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
      <img src={props.imgURL} />
      <h3>{props.position}</h3>
      <p>{props.description}</p>
    </>
  );
};

export default Officer;
