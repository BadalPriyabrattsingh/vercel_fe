import React, { useState } from 'react';

import './BirthdayAnimation.css';
import bgImage from '../assets/bg_image.jpg';  // Import the image

const BirthdayAnimation = ({ onOpenGallery }) => {
  const [animationComplete, setAnimationComplete] = useState(false);

  // Handler when the typing is finished
  const handleTypingComplete = () => {
    setAnimationComplete(true); // Set the animation complete state to trigger next steps
  };

  return (
    <div className="animation-container" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="clouds"></div>
      <h1>🎉 To my best friend, Madhu! 🎉</h1>
      
      {/* Static text to replace the typing animation */}
      <p>Every moment with you is a blessing...✨</p>
      <p>Happy Birthday, buddi! Here’s to many more years of trust! 🎂</p>
      
      {animationComplete && (
        <div className="next-steps">
          {/* Insert your next steps or components here */}
          <p>...</p>

          {/* Add the button to open the gallery */}
          <button onClick={onOpenGallery} className="open-gallery-btn">
            Open Gallery
          </button>
        </div>
      )}
    </div>
  );
};

export default BirthdayAnimation;
