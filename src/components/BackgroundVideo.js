import React from 'react';
import ReactPlayer from 'react-player';
const BackgroundVideo = () => {
    return (
      <div className="background-video">
         <ReactPlayer
          className='react-player'
          url='https://vimeo.com/790585944'
          playing
          muted
        />
      </div>
    );
  };
  
  export default BackgroundVideo;