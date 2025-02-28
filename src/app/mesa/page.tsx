import Link from 'next/link';
import Navbar from '@/components/navbar/Navbar';
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import Register from '@/components/register/Register';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
    <Navbar />
    <VideoPlayer />

    <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
      <div className="text-center"><em className="mb-3 text-2xl font-semibold">Strive To Be</em><br /> is coming to MESA ARIZONA</div>
    </div>
    <Register event='mesa' />
    <div className="mb-10">
      <iframe
        className="responsive-iframe"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA_UGBkHuf-iNbaNfDo3NXCtsSimY2vhvA&q=Mesa+Amphitheatre,North+Center+Street,Mesa+AZ">
      </iframe>
    </div>
    </main>
  );
}