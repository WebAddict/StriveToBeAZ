import Navbar from '@/components/navbar/Navbar';
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import Register from '@/components/register/Register';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
    <Navbar />
    <VideoPlayer />

    <div className="mt-12">
      <div className="text-center text-4xl font-semibold"><em className="mb-3 text-6xl font-semibold">Strive To Be</em><br /> is coming to TUCSON ARIZONA on March 29, 2025</div>
    </div>
    <div className="my-12">
      <div className="text-center text-3xl font-semibold">Who: Youth 12-18 years old<br />Where: Mica Mountain High School<br />When: 3/29 from 6pm to 8pm<br />Wear: FSY Standards</div>
    </div>
    <Register event='tucson' />
    <div className='mb-10'>
      <iframe
        className='responsive-iframe'
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA_UGBkHuf-iNbaNfDo3NXCtsSimY2vhvA&q=10800+E+Valencia+Rd,Tuscson+AZ+85747">
      </iframe>
    </div>
    </main>
  );
}