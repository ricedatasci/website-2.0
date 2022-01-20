import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/NavBarLink.css';

const NavBarLink = (props) => {
  return (
    <Link className='link' to={props.link}>
      <h4>{props.title}</h4>
    </Link>
  );
};

export default NavBarLink;
