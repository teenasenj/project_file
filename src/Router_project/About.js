import React from 'react';
import videoplay from './videoplay.mp4';


function VideoPlayer() {
  return (
    <div>
    <video autoPlay width="640" height="360" controls>
    <source src={videoplay} type="videoplay/mp4" />
    
    </video>
    </div>
  );
}

export default VideoPlayer;






