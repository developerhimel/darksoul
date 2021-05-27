import React from "react";

export default function Homepage() {
  return (
    <div className="container-fluid classforheaderbg w-full flex md:place-items-center relative">
      <div className="container mx-auto p-5 md:p-0">
        <div className="headerContent flex flex-col justify-start items-start">
          <h1 className="text-white font-bold text-6xl mondafont ">
            Darksoul Official Guild
          </h1>
          <p className="text-gray-200 md:w-2/4 max-w-full py-5 md:text-justify">
            Guilds are one of the most popular features of Garena Free Fire. The
            famous battle royale game allows players to join or create a guild.
            Players can also participate in guild tournaments and earn various
            rewards by collecting Dog Tags. They can also redeem and purchase a
            variety of items using Guild Tokens
          </p>
          <div className="flex flex-col md:flex-row w-full items-center">
            <button className="bg-gray-900 hover:bg-gray-800 text-gray-200 font-bold py-2 px-4 border border-gray-700 rounded mb-3 md:mb-0 relative">
              Guild Leader
              <span className="flex absolute h-2 w-2 top-0 right-0 -mt-1 -mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
            </button>
            <button className="bg-gray-900 hover:bg-gray-800 text-gray-200 font-bold py-2 px-4 border border-gray-700 rounded md:ml-3 relative">
              Guild Co-Leader
              <span className="flex absolute h-2 w-2 top-0 right-0 -mt-1 -mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
            </button>
          </div>
          <div className="w-full max-w-full flex flex-row items-center justify-center">
            <img src="./images/bg-images/fflogo.png" alt="Freefire Logo" />
          </div>
        </div>
      </div>
      <div className="absolute -bottom-3 w-full max-w-full flex flex-row justify-center items-center">
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
    </div>
  );
}
