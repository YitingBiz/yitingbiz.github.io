'use client'

import React, { useEffect, useRef, useState } from 'react';
import { Container } from '@radix-ui/themes';

const pushEvent = ({
  event,
  category,
  action,
  label,
  value,
  ...rest
}) => {
  if (typeof window.dataLayer !== "undefined") {
    window.dataLayer.push({
      event,
      category,
      action,
      label,
      value,
      ...rest
    });
  }
};

const VideoPlayer = ({ src, poster, autoPlay = false, width }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState(null);
  const [videoProgress, setVideoProgress] = useState(0);
  const progressThresholds = [25, 50, 75, 100];
  const [triggeredThresholds, setTriggeredThresholds] = useState(new Set());
  // const debugGTM = () => {
  //   console.log('Current dataLayer:', window.dataLayer);
  //   console.log('GTM ID:', process.env.NEXT_PUBLIC_GTM_ID);

  //   pushEvent({
  //     event: 'debug_event',
  //     category: 'Debug',
  //     action: 'Test Button Click',
  //     timestamp: new Date().toISOString()
  //   });
  // };

  useEffect(() => {
    console.log('GTM ID:', process.env.NEXT_PUBLIC_GTM_ID);
    console.log('DataLayer available:', typeof window.dataLayer !== 'undefined');

    const video = videoRef.current;

    if (!video) return;

    // Listen for play event
    const handlePlay = () => {
      setIsPlaying(true);
      pushEvent({
        event: 'video_play',
        category: 'Video',
        action: 'Play',
        label: src.split('/').pop(),
        currentTime: video.currentTime,
        controlType: 'play_button', // Indicates which control triggered the play
        timestamp: new Date().toISOString()
      });
    };

    // Listen for pause event
    const handlePause = () => {
      setIsPlaying(false);
      pushEvent({
        event: 'video_pause',
        category: 'Video',
        action: 'Pause',
        label: src.split('/').pop(),
        currentTime: video.currentTime,
        controlType: 'pause_button', // Indicates which control triggered the pause
        timestamp: new Date().toISOString()
      });
    };

    // Track seeking events
    const handleSeeking = () => {
      pushEvent({
        event: 'video_seek',
        category: 'Video',
        action: 'Seek',
        label: src.split('/').pop(),
        seekFrom: video.currentTime,
        timestamp: new Date().toISOString()
      });
    };

    // Track volume changes
    const handleVolumeChange = () => {
      pushEvent({
        event: 'video_volume_change',
        category: 'Video',
        action: 'Volume Change',
        label: src.split('/').pop(),
        volume: video.volume,
        muted: video.muted,
        timestamp: new Date().toISOString()
      });
    };

    // Add event listeners
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('seeking', handleSeeking);
    video.addEventListener('volumechange', handleVolumeChange);

    // Cleanup
    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('seeking', handleSeeking);
      video.removeEventListener('volumechange', handleVolumeChange);
    };
  }, [src]);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setVideoProgress(progress);

      progressThresholds.forEach(threshold => {
        if (progress >= threshold && !triggeredThresholds.has(threshold)) {
          pushEvent({
            event: 'video_milestone',
            category: 'Video',
            action: 'Progress Milestone',
            label: `${threshold}% Watched`,
            value: threshold,
            videoTitle: src.split('/').pop(),
            currentTime: videoRef.current.currentTime,
            timestamp: new Date().toISOString()
          });
          setTriggeredThresholds(prev => new Set([...prev, threshold]));
        }
      });
    }
  };

  const handleEnded = () => {
    pushEvent({
      event: 'video_complete',
      category: 'Video',
      action: 'Complete',
      label: src.split('/').pop(),
      timestamp: new Date().toISOString()
    });
  };

  const handleError = (e) => {
    setError('Error loading video');
    pushEvent({
      event: 'video_error',
      category: 'Video',
      action: 'Error',
      label: e.message,
      videoSrc: src,
      timestamp: new Date().toISOString()
    });
    console.error('Video error:', e);
  };

  const handleLoadedMetadata = () => {
    pushEvent({
      event: 'video_load',
      category: 'Video',
      action: 'Load',
      label: src.split('/').pop(),
      duration: videoRef.current.duration,
      timestamp: new Date().toISOString()
    });
  };

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        {/* <button onClick={debugGTM}>Debug GTM</button> */}

        <div className="mx-auto text-center">
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
              onTimeUpdate={handleTimeUpdate}
              onEnded={handleEnded}
              onLoadedMetadata={handleLoadedMetadata}
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