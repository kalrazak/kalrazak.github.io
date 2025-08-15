
import Image from "next/image";
import FluidCursor from "../components/FluidCursor";
import Header from "../components/Header";
import About from "../components/About";

export default function Home() {
  return (
    <>
      <Header />
      <div className="font-sans min-h-screen p-8 pb-20 sm:p-20 bg-white relative flex items-center justify-center pt-24 sm:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl w-full z-10">
          {/* Left Section - Text and Button */}
          <div className="rounded-2xl p-8 bg-transparent backdrop-blur-md border border-gray-300/50 shadow-lg transition-all duration-300 ease-out transform hover:scale-[1.02] hover:shadow-xl hover:bg-gray-100/50 active:scale-[0.98] active:bg-gray-100/30 touch-manipulation">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-4xl font-bold text-gray-600">
                Welcome !
              </h1>
              <p className="text-lg text-gray-600 max-w-md">
                Hi!  
                You've entered Haikal's glassy space.  
                Smooth, shiny, and stylish.
              </p>
              <button className="bg-transparent hover:bg-gray-100/50 backdrop-blur-md border border-gray-300/50 text-black hover:text-black font-semibold py-4 px-8 rounded-lg transition-all duration-300 ease-out transform hover:scale-105 hover:-rotate-1 active:scale-95 active:bg-gray-200/50 shadow-lg hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 touch-manipulation">
                Get started
              </button>
            </div>
          </div>

          {/* Right Section - Graphic Area */}
          <div className="rounded-2xl p-8 flex items-center justify-center min-h-[400px] lg:min-h-[500px]">
            <div className="bg-transparent backdrop-blur-md border border-gray-300/50 rounded-2xl p-8 shadow-lg transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-xl hover:bg-gray-100/50 active:scale-[0.98] active:bg-gray-100/30 touch-manipulation">
              <Image
                src="/memoji.png"
                alt="Pixel Art Character"
                width={400}
                height={400}
                className="mx-auto"
                priority
              />
            </div>
          </div>
          {/* About Section - Full Width */}
          <div className="col-span-1 lg:col-span-2">
            <About />
          </div>
        </div>
      </div>
      <FluidCursor />
    </>
  );
}
