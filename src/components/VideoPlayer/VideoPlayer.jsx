import React from 'react';

const VideoPlayer = () => {
  return (
    <iframe
    src="https://customer-6dmg386fdvg78j60.cloudflarestream.com/47c231680d57feba393dd3c7c71b38e0/iframe?muted=true&preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-6dmg386fdvg78j60.cloudflarestream.com%2F47c231680d57feba393dd3c7c71b38e0%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"
    loading="lazy"
    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: -1,
      border: "none",
      filter: "blur(5px) opacity(0.2)",
    }}
  />
  );
};

export default VideoPlayer;