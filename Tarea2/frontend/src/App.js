import React, { useRef, useEffect } from 'react';
import './App.css';

function App() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          videoRef.current.srcObject = stream;
        })
        .catch(error => {
          console.error('Error accessing the webcam:', error);
        });
    }
  }, []);

  return (
    <div className="App">
      <div>
        <h2>Roberto Carlos Gómez Donis - 202000544</h2>
      </div>
      <div>
        <h3>Webcam</h3>
        <video ref={videoRef} autoPlay playsInline muted style={{ maxWidth: '100%' }} />
      </div>
    </div>
  );
}

export default App;

