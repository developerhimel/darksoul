import React from "react";

export default function Homepage() {
  return (
    <div className="container-fluid classforheaderbg w-full flex md:place-items-center">
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
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mb-3 md:mb-0">
              Guild Leader
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
              Guild Co-Leader
            </button>
          </div>
          <div className="w-full max-w-full flex flex-row items-center justify-center">
              <img src="./images/bg-images/fflogo.png" alt="Freefire Logo" />
          </div>
        </div>
      </div>
    </div>
  );
}
