'use client';

import React, { useState, useEffect } from 'react';

const VideoPlayer = () => {
  const [isPortrait, setIsPortrait] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const landscapeVideoUrl = "https://customer-6dmg386fdvg78j60.cloudflarestream.com/6d47fbfa01a55ab25292fd76d1a1b174/iframe?muted=true&preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-6dmg386fdvg78j60.cloudflarestream.com%2F6d47fbfa01a55ab25292fd76d1a1b174%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false";
  const portraitVideoUrl = "https://customer-6dmg386fdvg78j60.cloudflarestream.com/6c22fc16207a2901bf68f3bf6282acdf/iframe?muted=true&preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-6dmg386fdvg78j60.cloudflarestream.com%2F6c22fc16207a2901bf68f3bf6282acdf%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false";

  const checkOrientation = () => {
    const height = window.innerHeight;
    const width = window.innerWidth;
    setIsPortrait(height > width);
    setIsLoading(false);
  };

  useEffect(() => {
    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    return () => window.removeEventListener('resize', checkOrientation);
  }, []);

  if (isLoading) {
    return (
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          backgroundColor: '#000', // Optional: black background while loading
        }}
      />
    );
  }

  return (
    <iframe
      src={isPortrait ? portraitVideoUrl : landscapeVideoUrl}
      allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        border: "none",
      }}
    />
  );
};

export default VideoPlayer;