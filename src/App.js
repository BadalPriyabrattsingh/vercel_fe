import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './components/Login';
import BirthdayAnimation from './components/BirthdayAnimation';
import PopupMenu from './components/PopupMenu';
import Gallery from './components/Gallery';
import Loader from './components/Loader';

import bgm from './assets/music.mp3'; // Background music

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [selectedGallery, setSelectedGallery] = useState('');
  const [loading, setLoading] = useState(false);
  const [isMuted, setIsMuted] = useState(false);  // State to track mute/unmute
  const [isAudioPlaying, setIsAudioPlaying] = useState(false); // State to track if the audio is playing
  const [audio] = useState(new Audio(bgm)); // Create audio object once

  useEffect(() => {
    audio.loop = true;
    audio.volume = 0.5;  // Set volume
    if (isAudioPlaying && !isMuted) {
      audio.play();
    } else {
      audio.pause();
    }

    return () => {
      audio.pause();  // Ensure audio is paused when component unmounts
    };
  }, [isMuted, isAudioPlaying, audio]); // Run when `isMuted` or `isAudioPlaying` changes

  // Function to handle login success
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setShowAnimation(true);
    setTimeout(() => {
      setShowAnimation(false);
      setShowMenu(true);
    }, 15000); // 15 seconds
  };

  // Function to handle mute/unmute toggle
  const toggleMute = () => {
    setIsMuted((prev) => !prev); // Toggle the mute state
  };

  const handleMenuSelect = (galleryName) => {
    setLoading(true);
    setTimeout(() => {
      setSelectedGallery(galleryName);
      setLoading(false);
      setShowMenu(false);
    }, 1200);
  };

  const goBackToMenu = () => {
    setLoading(true);
    setTimeout(() => {
      setSelectedGallery('');
      setLoading(false);
      setShowMenu(true);
    }, 1200);
  };

  const goToAnotherGallery = (galleryName) => {
    setLoading(true);
    setTimeout(() => {
      setSelectedGallery(galleryName);
      setLoading(false);
    }, 1200);
  };

  // Function to play audio after user interaction
  const handlePlayAudio = () => {
    setIsAudioPlaying(true); // Set the audio to play after the button is clicked
  };

  // Function to go back to birthday animation
  const goBackToBirthday = () => {
    setShowAnimation(true);  // Show the birthday animation again
    setShowMenu(false);  // Hide the menu if it's shown
    setSelectedGallery('');  // Reset the selected gallery (if any)
    setLoading(false);  // Ensure loading state is reset
  };

  // Function to open the gallery
  const openGallery = () => {
    setSelectedGallery('family'); // Open a specific gallery, for example, "family"
    setShowAnimation(false); // Hide the animation
  };

  return (
    <div className="App">
      {/* Login Screen */}
      {!isLoggedIn && <Login onLoginSuccess={handleLoginSuccess} />}

      {/* Birthday Animation */}
      {showAnimation && <BirthdayAnimation onOpenGallery={openGallery} />}

      {/* Loading Indicator */}
      {loading && <Loader />}

      {/* Popup Menu */}
      {showMenu && !loading && <PopupMenu onSelectMenu={handleMenuSelect} />}

      {/* Gallery Content */}
      {selectedGallery && !loading && (
        <Gallery
          galleryName={selectedGallery}
          goBackToMenu={goBackToMenu}
          goToAnotherGallery={goToAnotherGallery}
          goBackToBirthday={goBackToBirthday}  // Pass goBackToBirthday as prop
        />
      )}

      {/* Mute/Unmute Button */}
      <button onClick={toggleMute} className="mute-btn">
        {isMuted ? 'Unmute Music' : 'Mute Music'}
      </button>

      {/* Play Music Button - Only appears when audio hasn't been played yet */}
      {!isAudioPlaying && (
        <button onClick={handlePlayAudio} className="play-audio-btn">
          Play Music
        </button>
      )}
    </div>
  );
}

export default App;
