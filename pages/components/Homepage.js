import React from "react";

export default function Homepage() {
  return (
    <>
      <header className="container-fluid classforheaderbg w-full flex md:place-items-center relative rounded-lg">
        <div className="container mx-auto p-5 md:p-0">
          <div className="headerContent flex flex-col-reverse lg:flex-col justify-between w-full h-full lg:justify-start items-start">
            <div>
              <div>
                <h1 className="text-white font-bold text-3xl md:text-6xl mondafont text-center md:text-left">
                  Darksoul Official Guild
                </h1>
                <p className="text-gray-200 md:w-2/4 max-w-full py-5 md:text-justify">
                  Guilds are one of the most popular features of Garena Free
                  Fire. The famous battle royale game allows players to join or
                  create a guild. Players can also participate in guild
                  tournaments and earn various rewards by collecting Dog Tags.
                  They can also redeem and purchase a variety of items using
                  Guild Tokens
                </p>
              </div>
              <div className="flex flex-col md:flex-row w-full items-center p-3 shadow-lg rounded-md bg-gray-800 md:bg-transparent md:shadow-none">
                <button className="bg-gray-700 md:bg-gray-800 hover:bg-gray-800 text-gray-200 font-semibold py-2 px-4 border border-gray-700 rounded mb-3 md:mb-0 relative">
                  Guild Leader
                  <span className="flex absolute h-2 w-2 top-0 right-0 -mt-1 -mr-1">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                  </span>
                </button>
                <button className="bg-gray-700 md:bg-gray-800 hover:bg-gray-800 text-gray-200 font-semibold py-2 px-4 border border-gray-700 rounded md:ml-3 relative">
                  Guild Co-Leader
                  <span className="flex absolute h-2 w-2 top-0 right-0 -mt-1 -mr-1">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                  </span>
                </button>
              </div>
            </div>
            <div className="w-full max-w-full flex flex-row items-center justify-center">
              <img src="./images/bg-images/fflogo.png" alt="Freefire Logo" />
            </div>
          </div>
        </div>
        <div className="absolute hidden md:flex -bottom-3 w-full max-w-full flex-row justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 fill-current text-yellow-500 animate-bounce"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </header>
      <section className="w-full h-screen relative viewport">
        <img
          className="absolute z-0 left-0 top-0 w-full max-w-full h-auto opacity-50"
          src="./images/bg-images/guildmembersSec-bg.png"
          alt=""
        />
        <div className="viewport relative z-10">
          <h1 className="area-text text-white text-7xl ">Protect your Head</h1>
        </div>
      </section>
    </>
  );
}
