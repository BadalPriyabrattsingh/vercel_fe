import React, { useEffect } from 'react';
import './Gallery.css';

const Gallery = ({ galleryName, goBackToMenu, goToAnotherGallery, goBackToBirthday }) => {
  const images = {
    family: [
      '/images/family/family1.jpg',
      '/images/family/family2.jpg',
      '/images/family/family3.jpg',
      '/images/family/family4.jpg',
      '/images/family/family5.jpg',
      '/images/family/family6.jpg',
      '/images/family/family7.jpg',
      '/images/family/family8.jpg',
      '/images/family/family9.jpg',
    ],
    friends: [
      '/images/madhus/friends1.jpg',
      '/images/madhus/friends2.jpg',
      '/images/madhus/friends3.jpg',
      '/images/madhus/friends4.jpg',
      '/images/madhus/friends5.jpg',
      '/images/madhus/friends6.jpg',
      '/images/madhus/friends7.jpg',
      '/images/madhus/friends8.jpg',
      '/images/madhus/friends9.jpg',
    ],
    madhu: [
      '/images/madhu/madhu1.jpg',
      '/images/madhu/madhu2.jpg',
      '/images/madhu/madhu3.jpg',
      '/images/madhu/madhu4.jpg',
      '/images/madhu/madhu5.jpg',
      '/images/madhu/madhu6.jpg',
      '/images/madhu/madhu7.jpg',
      '/images/madhu/madhu8.jpg',
      '/images/madhu/madhu9.jpg',
    ],
  };

  const wishes = {
    family: "Wishing you love, happiness, and good health. Family is everything!",
    friends: "True friends are never apart, maybe in distance but never in heart. Cherishing these moments with you!",
    madhu: "You are a beautiful soul, Madhu. A woman of strength, grace, and kindness. Shine bright always!",
  };

  useEffect(() => {
   
    setTimeout(() => {
      document.querySelector('.gallery-grid').classList.add('show-all');
    }, 1000);
  }, []);

  return (
    <div className="page-container">
      {/* Side Navigation */}
      <div className="side-nav">
        <button onClick={() => goToAnotherGallery('madhu')}>Madhu</button>
        <button onClick={() => goToAnotherGallery('family')}>Family</button>
        <button onClick={() => goToAnotherGallery('friends')}>Friends</button>
        <button onClick={goBackToMenu} className="back-button">Back to Menu</button>
      </div>

      {/* Gallery Content */}
      <div className="gallery-container">
        <h2>{galleryName.toUpperCase()} Gallery</h2>

        {/* Displaying Wishes */}
        <p className="gallery-wishes">{wishes[galleryName]}</p>

        <div className="gallery-grid">
          {images[galleryName]?.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="gallery-image"
            />
          ))}
        </div>
      </div>

      {/* Back to Birthday Button */}
      <button className="back-to-birthday-button" onClick={goBackToBirthday}>
        &#8592; {/* Back Arrow Icon */}
      </button>
    </div>
  );
};

export default Gallery;
