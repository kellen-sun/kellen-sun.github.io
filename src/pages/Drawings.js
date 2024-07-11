import React, { useState } from 'react'
import '../styles/Drawings.css';

function Drawings() {
  const imageFiles = [
    '1.PNG',
    '2.jpg',
    '3.PNG',
    '4.PNG',
    '5.PNG',
    '6.PNG',
    '7.jpg',
    '8.jfif',
    '9.jpg',
    '10.png',
    '11.png'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const totalDrawings = 11;

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalDrawings);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalDrawings) % totalDrawings);
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className="drawings" style={{ 
      backgroundColor: '#f0d0d0', 
      height: "calc(90vh - 120px)",
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      padding: '10% 0'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        position: 'relative'
      }}>
        <button onClick={goToPrevious} className="nav-button prev-button" style={{
          position: 'absolute',
          left: '20px'
        }}>
          &lt;
        </button>

        <div className={`image-container ${isZoomed ? 'zoomed' : ''}`} style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '85vh',
          width: '80%',
          padding: '3%'
        }}>
          <img
            src={`../../content/drawings/${imageFiles[currentIndex]}`}
            alt={`Drawing ${currentIndex + 1}`}
            className="gallery-image"
            onClick={toggleZoom}
            style={{
              maxHeight: '100%',
              maxWidth: '100%',
              objectFit: 'contain'
            }}
          />
        </div>

        <button onClick={goToNext} className="nav-button next-button" style={{
          position: 'absolute',
          right: '20px'
        }}>
          &gt;
        </button>
      </div>

      <div className="image-counter" style={{
        marginTop: '20px'
      }}>
        {currentIndex + 1} / {totalDrawings}
      </div>
    </div>
  )
}

export default Drawings