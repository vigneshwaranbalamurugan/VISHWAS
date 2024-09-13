import React from 'react';
import Sidebar from './Sidebar';
import Main from './Main';
import './newLogin.css';

const NewLogin: React.FC = () => {
  return (
    <div className="sidebar-container">
      <div className="left-sidebar">
        <Sidebar />
      </div>
      <div className="main-content">
        <Main />
      </div>
    </div>
  );
};

export default NewLogin;
