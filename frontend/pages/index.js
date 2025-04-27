// pages/index.js

import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navbar */}
      <div className="flex items-center justify-between px-8 py-6 bg-transparent absolute w-full z-10">
        <div className="flex items-center space-x-4">
          <button className="text-white text-2xl">☰</button>
          <span className="text-lg font-semibold tracking-widest">MENU</span>
        </div>
        <div className="text-2xl">GAMING.</div>
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 bg-transparent border border-white rounded-md hover:bg-white hover:text-black">SING IN</button>
          <button className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-300">LOG IN</button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative flex items-center justify-center h-screen w-full">
        {/* Background Image */}
        <Image
          src="/images/background.png" // <-- Place your VR image here in public/images/
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="Gaming Hero"
          className="z-0 brightness-75"
        />

        {/* Hero Content */}
        <div className="z-10 text-center px-8">
          <h2 className="text-lg font-light mb-2">JOIN THE ULTIMATE GAMING EXPERIENCE</h2>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            DIVE INTO EPIC <br /> ADVENTURES
          </h1>
          <div className="flex items-center justify-center space-x-6">
            <button className="px-6 py-3 bg-transparent border border-white rounded-md hover:bg-white hover:text-black">EXPLORE</button>
            <div className="flex items-center space-x-2 cursor-pointer">
              <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
                ▶
              </div>
              <span className="text-sm uppercase">Play Demo...</span>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="absolute bottom-20 left-8 flex space-x-6 text-xl">
          <a href="#" className="hover:scale-110">📷</a>
          <a href="#" className="hover:scale-110">📘</a>
          <a href="#" className="hover:scale-110">✖️</a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 flex flex-col items-center">
          <span className="text-sm mb-2">01</span>
          <div className="w-px h-32 bg-white"></div>
          <span className="text-sm mt-2">08</span>
        </div>
      </div>

      {/* Only For Section */}
      <div className="flex items-center justify-center space-x-8 my-10">
        <div className="text-lg font-semibold">ONLY FOR:</div>
        <div className="flex space-x-4 text-4xl">
          <span>🍎</span>
          <span>🪟</span>
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8 px-8 mb-16">
        {/* Card 1 */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 max-w-xs hover:scale-105 transition">
          <Image src="/images/vrgame.png" alt="VR Game" width={300} height={200} className="rounded-md mb-4" />
          <h3 className="text-xl font-bold mb-2">VR GAMES</h3>
          <p className="text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="flex justify-between items-center">
            <span>💜 1.3K</span>
            <button className="underline">EXPLORE</button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 max-w-xs hover:scale-105 transition">
          <Image src="/images/esports.png" alt="Esports" width={300} height={200} className="rounded-md mb-4" />
          <h3 className="text-xl font-bold mb-2">ENTER IN ESPORT'S</h3>
          <p className="text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="flex justify-between items-center">
            <span>💜 1.3K</span>
            <button className="underline">EXPLORE</button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 max-w-xs hover:scale-105 transition">
          <Image src="/images/consolegame.png" alt="Console Game" width={300} height={200} className="rounded-md mb-4" />
          <h3 className="text-xl font-bold mb-2">CONSOLE GAMES</h3>
          <p className="text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="flex justify-between items-center">
            <span>💜 4.3K</span>
            <button className="underline">EXPLORE</button>
          </div>
        </div>
      </div>
    </div>
  );
}
