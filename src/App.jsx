import React, { useRef, useEffect } from 'react';
import UploadAudio from './components/UploadAudio';
import './App.css';
import effect from './assets/effect.mp4';

function App() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.autoplay = true;
      video.loop = true;
    }
  }, []);

  return (
    <div className='app'>
      <UploadAudio />
      <video ref={videoRef} className="video" src={effect} autoPlay loop muted />

    </div>
  );
}

export default App;
