import React from 'react';

const VideoPlayer = () => {
  return (
    <iframe
    src="https://customer-6dmg386fdvg78j60.cloudflarestream.com/6d47fbfa01a55ab25292fd76d1a1b174/iframe?muted=true&preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-6dmg386fdvg78j60.cloudflarestream.com%2F6d47fbfa01a55ab25292fd76d1a1b174%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false"
    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: -1,
      border: "none",
      filter: "opacity(0.5)",
    }}
  />
  );
};

export default VideoPlayer;