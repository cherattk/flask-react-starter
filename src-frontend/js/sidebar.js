import React, { useState, useEffect } from 'react';

function Sidebar({ setActiveSection, activeSection }) {

  return (
    <div className="sidebar border-end px-3 d-flex flex-column flex-shrink-0 h-100 overflow-auto ps-3">
      <h1 className="py-3 text-primary h3 mb-3 border-bottom">
        My Dashboard
      </h1>
      <ul className="nav nav-pills flex-column nav-fill">
        <li className="nav-item mb-1">
          <button type='button'
            className={`nav-link text-start ${activeSection === 'section-home' ? 'active' : ''}`}
            onClick={() => setActiveSection('section-home')}>
            <i className="bi bi-house me-2"></i> 
            Home
          </button>
        </li>
        <li className="nav-item mb-1">
          <button type='button'
            className={`nav-link text-start ${activeSection === 'section-my-data' ? 'active' : ''}`}
            onClick={() => setActiveSection('section-my-data')}>
            <i className="bi bi-clipboard-data me-2"></i> 
            My Data
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;