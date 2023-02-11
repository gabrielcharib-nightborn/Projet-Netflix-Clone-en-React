import React from 'react';
import ReactPlayer from 'react-player';

const BackgroundVideo = () => {
  return (
    <div className="background-video">
      <ReactPlayer
        url='https://www.youtube.com/watch?v=yxOIPFXp_-A&ab_channel=TheSwoon'
        className="react-player"
        playing
        loop
        muted
        width='100%'
        height='100%'
      />
    </div>
  );
};

export default BackgroundVideo;
