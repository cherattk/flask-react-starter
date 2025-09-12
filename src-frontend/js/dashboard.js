import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import Sidebar from './sidebar.js';
import MainPanel from './mainpanel.js';


function Dashboard() {

  const [activeSection, setActiveSection] = useState('section-home'); // Default active section

  return (
    <div className="d-flex h-100 dashboard-container">
      <Sidebar setActiveSection={setActiveSection} activeSection={activeSection} />
      <MainPanel activeSection={activeSection} />
    </div>
  );
}

const RootApp = createRoot(document.getElementById('app'));
RootApp.render(process.env.NODE_ENV === 'development' ? (
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>
) : (
  <Dashboard />
));