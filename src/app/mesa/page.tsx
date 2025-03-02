import Link from 'next/link';
import Navbar from '@/components/navbar/Navbar';
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import Register from '@/components/register/Register';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <VideoPlayer />
      <div style={{background: 'linear-gradient(to right, transparent, rgba(0, 0, 0, 0.8), transparent)'}}>
        <div className="mt-12">
          <div className="text-white text-center text-4xl font-semibold"><em className="mb-3 text-6xl font-semibold">Strive To Be</em><br /> is coming to MESA ARIZONA on March 28, 2025</div>
        </div>
        <div className="mt-12">
          <div className=" text-white text-center text-3xl font-semibold">Who: Youth 14-18 years old<br />Where: Mesa Amphitheatre<br />When: 3/28 gate opens at 7pm<br />Show: 8pm to 10pm<br />Wear: FSY Standards</div>
        </div>
        <div className="my-12">
          <div className=" text-white text-center text-3xl font-semibold">More details coming this weekend 3/2</div>
        </div>
        <Register event='mesa' />
        <div className="mb-10 flex justify-center">
          <iframe
            className="responsive-iframe"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA_UGBkHuf-iNbaNfDo3NXCtsSimY2vhvA&q=Mesa+Amphitheatre,North+Center+Street,Mesa+AZ">
          </iframe>
        </div>
      </div>
    </main>
  );
}