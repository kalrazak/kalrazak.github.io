import Image from "next/image";
import FluidCursor from "../components/FluidCursor";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="font-sans min-h-screen p-8 pb-20 sm:p-20 bg-white relative flex items-center justify-center pt-24 sm:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl w-full z-50">
          {/* Left Section - Text and Button */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-600">
              Hello !
            </h1>
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-600">
              I'm Haikal !
            </h2>
            <p className="text-lg text-gray-600 max-w-md">
              Hello World ! This section is under construction.
            </p>
            <button className="bg-transparent hover:bg-gray-100/50 backdrop-blur-md border border-gray-300/50 text-black hover:text-black font-semibold py-4 px-8 rounded-lg transition-all duration-300 ease-out transform hover:scale-105 hover:-rotate-1 active:scale-95 shadow-lg hover:shadow-xl hover:shadow-2xl">
              Get started
            </button>
          </div>

          {/* Right Section - Graphic Area */}
          <div className="rounded-2xl p-8 flex items-center justify-center min-h-[400px] lg:min-h-[500px]">
            <div className="text-center">
              <Image
                src="/pixel.png"
                alt="Pixel Art Character"
                width={200}
                height={200}
                className="mx-auto mb-4"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <FluidCursor />
    </>
  );
}
