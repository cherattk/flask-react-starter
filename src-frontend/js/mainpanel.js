import React, { useState } from 'react';
import HomeSection from './home_section.js';
import MyDataSection from './my_data_section.js';


function MainPanel({ activeSection }) {

  const renderContent = () => {
    switch (activeSection) {
      case 'section-home':
        return <HomeSection />;
      case 'section-my-data':
        return <MyDataSection/>;
      default:
        return <HomeSection/>; // Fallback
    }
  };

  return (
    <div className="flex-grow-1 h-100 main-panel overflow-auto">
      <div className='bg-white p-3 sticky-top text-end'>
        <a href="/#" className='btn btn-primary btn-sm px-4 rounded'>Log Out</a>
      </div>
      <div className='px-4'>
        {renderContent()}
      </div>
    </div>
  );
}

export default MainPanel;