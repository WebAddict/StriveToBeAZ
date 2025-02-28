// components/YTVideo/YTVideo.jsx
const YTVideo = () => {
    return (
      <div className="yt-video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/C8BSDyMGOgQ"
          title="Festival: A Youth Concert 2024"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    );
  };
  export default YTVideo;