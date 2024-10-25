'use client'

import React, { useRef, useState } from 'react';
import { Container } from '@radix-ui/themes';

// Add width as a prop so you can control it from the parent component
const VideoPlayer = ({ src, poster, autoPlay = false, width}) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(err => setError('Failed to play video'));
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleError = (e) => {
    setError('Error loading video');
    console.error('Video error:', e);
  };

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="mx-auto text-center" >
          {error && (
            <div className="bg-red-100 text-red-700 rounded mb-4">
              {error}
            </div>
          )}
          
          <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
            <video
            width={width}
              ref={videoRef}
              className="absolute top-0 left-0 object-contain"
              poster={poster}
              autoPlay={autoPlay}
              playsInline
              controls
              onError={handleError}
            >
              <source src={src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default VideoPlayer;