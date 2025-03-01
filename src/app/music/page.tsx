import Navbar from '@/components/navbar/Navbar';
import YTVideo from '@/components/YTVideo/YTVideo';

export default function Page() {
    const BUTTON_STYLE = "flex items-center p-2 rounded-lg font-semibold hover:scale-105 transition-all duration-200 cursor-pointer bg-transparent border border-gray-200 text-gray-200";
  return (
    <div className="flex flex-col items-center justify-between">
      <Navbar />
      <div className="bg-cover bg-center bg-no-repeat min-h-screen w-full" 
        style={{ 
          backgroundImage: `url('https://imagedelivery.net/t4tWTFbtcosKvDi5rJCaNw/b9c2b557-db8f-41f9-9fbf-4af8284ee600/public')`,
          backgroundColor: "rgba(0,0,0,0.2)",
          backgroundBlendMode: "darken"
        }}>
        <div
          className="text-white flex flex-col items-center mx-auto lg:w-2/5 md:w-3/5 bg-opacity-50"
          style={{
            background: 'linear-gradient(to right, transparent, rgba(0, 0, 0, 0.8), transparent)',
          }}
        >
          <h1 className="text-5xl font-bold mt-6">Strive to Be</h1>
          <p className="text-center max-w-md text-2xl text-white-300 drop-shadow-2xl mt-8 px-4">
            Strive to Be is the youth channel of The Church of Jesus Christ of Latter-day Saints! This channel is devoted to strengthening youth globally through its Christ-centered music and messages.
          </p>
          <p className="text-center max-w-md text-2xl text-white-300 drop-shadow-2xl mt-8 px-4 mb-10">
            The following Video is <em>Strive To Be&#39;s</em> Utah concert 2024, and thier ARIZONA concert 2025 will be very similar!
          </p>
          <YTVideo />
          <div className="mt-12 w-full max-w-sm flex flex-col gap-3 px-3 mb-10">
            <a href="https://open.spotify.com/artist/66YzHdK0FWCQSKMlXf3Rbj" target="_blank" className={BUTTON_STYLE}>
              <img src="/spotify.svg" alt="Spotify" className="w-12 h-12 mr-3" /> Spotify
            </a>
            <a href="https://music.apple.com/us/artist/strive-to-be/1517251772" target="_blank" className={BUTTON_STYLE}>
              <img src="/apple-music.svg" alt="Apple Music" className="w-12 h-12 mr-3" /> Apple Music
            </a>
            <a href="https://www.youtube.com/channel/UCciPSR2honmSdLAN2PAJujA" target="_blank" className={BUTTON_STYLE}>
              <img src="/youtube.svg" alt="YouTube" className="w-12 h-12 mr-3" /> YouTube
            </a>
            <a href="https://music.amazon.com/artists/B08C511YNL" target="_blank" className={BUTTON_STYLE}>
              <img src="/amazon-music.svg" alt="Amazon Music" className="w-12 h-12 mr-3" /> Amazon Music
            </a>
            <a href="https://www.deezer.com/us/artist/97141392" target="_blank" className={BUTTON_STYLE}>
              <img src="/deezer.png" alt="Deezer" className="w-12 h-12 mr-3" /> Deezer
            </a>
            <a href="https://tidal.com/browse/artist/19917924" target="_blank" className={BUTTON_STYLE}>
              <img src="/tidal.svg" alt="Tidal" className="w-12 h-12 mr-3" /> Tidal
            </a>
            <a href="https://www.pandora.com/artist/strive-to-be/ARcXJ4XZVZb2czV" target="_blank" className={BUTTON_STYLE}>
              <img src="/pandora.svg" alt="Pandora" className="w-12 h-12 mr-3" /> Pandora
            </a>
            <a href="https://www.churchofjesuschrist.org/study/youth/youth-music?lang=eng" target='_blank' className={BUTTON_STYLE}>
              <img src="/gospel-library.jpeg" alt="Gospel Library" className="w-12 h-12 mr-3" /> Gospel Library
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
