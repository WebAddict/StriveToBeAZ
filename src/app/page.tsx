"use client"

import Navbar from "@/components/navbar/Navbar";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  const videoID = "https://customer-6dmg386fdvg78j60.cloudflarestream.com/47c231680d57feba393dd3c7c71b38e0/iframe?muted=true&preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-6dmg386fdvg78j60.cloudflarestream.com%2F47c231680d57feba393dd3c7c71b38e0%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600";
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
    <Navbar />
    <VideoPlayer />

      <div className="">
        <div className="text-center text-white text-4xl lg:text-6xl font-semibold"><em className="mb-3 text-6xl lg:text-8xl font-semibold">Strive To Be</em><br /> is coming to ARIZONA in March 2025</div>
      </div>

      <div
        className="mb-32 text-white grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left pb-5"
        style={{
          background: 'radial-gradient(circle, rgba(55, 65, 81, 0.3) 0%, rgba(55, 65, 81, 0) 100%)',
          transition: 'background 0.3s ease',
        }}
      >
        <a
          href="/mesa"
          className="group rounded-lg px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-800 hover: border-neutral-700"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-5xl font-semibold">
            Mesa{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 text-3xl max-w-[30ch] text-sm opacity-90">
            Learn about the Concert in Mesa on March 28th
          </p>
        </a>

        <a
          href="/tucson"
          className="group rounded-lg px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-800 hover: border-neutral-700"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-5xl font-semibold">
            Tucson{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 text-3xl max-w-[30ch] text-sm opacity-90">
          Learn about the Concert in Tucson on March 29th
          </p>
        </a>

        <a
          href="/music"
          className="group rounded-lg px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-800 hover: border-neutral-700"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-5xl font-semibold">
            Music{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 text-3xl max-w-[30ch] text-sm opacity-90">
          Check out Strive to Be&#39;s music and performances
          </p>
        </a>
      </div>
    </main>
  );
}
