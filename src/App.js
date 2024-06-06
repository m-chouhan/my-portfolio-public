import logo from './logo.svg';
import comingsoon from './comingsoon2.png'
import React, { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY, currentTarget } = event;
      const { width, height, left, top } = currentTarget.getBoundingClientRect();
      const x = ((clientX - left) / width - 0.5) * 20; // Adjust the multiplier for more or less rotation
      const y = ((clientY - top) / height - 0.5) * 20; // Adjust the multiplier for more or less rotation
      setRotation({ x, y });
    };

    const headerElement = document.querySelector('.App-header');
    headerElement.addEventListener('mousemove', handleMouseMove);

    return () => {
      headerElement.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={comingsoon}
          className="rotating-image"
          alt="Coming Soon"
          style={{
            transform: `rotateX(${rotation.y}deg) rotateY(${rotation.x}deg)`,
            opacity: 0.8, 
          }}
        />
      </header>
    </div>
  );
}

export default App;
