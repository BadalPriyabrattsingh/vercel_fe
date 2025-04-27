import React from 'react';
import './Image.css';

const Image = ({ src, alt, className = '', style = {} }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`responsive-image ${className}`}
      style={style}
    />
  );
};

export default Image;
