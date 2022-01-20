import React from 'react';
import NavBar from '../components/shared/NavBar.js';
import '../styles/general.css';

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
