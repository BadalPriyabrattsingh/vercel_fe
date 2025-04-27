import React from 'react';
import './PopupMenu.css';

const PopupMenu = ({ onSelectMenu }) => {
  return (
    <div className="popup-menu">
      <h2>Select a Gallery 📸</h2>
      <button onClick={() => onSelectMenu('madhu')}>Madhu</button>
      <button onClick={() => onSelectMenu('family')}>Family</button>
      <button onClick={() => onSelectMenu('madhus')}>Madhu's</button>
    </div>
  );
};

export default PopupMenu;
