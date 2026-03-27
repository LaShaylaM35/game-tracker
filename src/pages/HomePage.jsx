import React from "react";
import { GameCard } from "../components/GameCard";
import { useState, useEffect } from "react";




export const HomePage = () => {
  return (
    <>

        <h1 className="text-center text-3xl font-bold text-cyan-600 mt-5">Game Tracker</h1>

              <h2 className="text-3xl font-bold underline text-center text-cyan-600">
        Welcome to Game Tracker!
      </h2>
      <p className="text-center mt-4 text-lg">
        Track your gaming adventures and achievements with ease.
      </p>

      
        <h3 className="text-2xl font-semibold mt-6 mb-2 text-center text-cyan-500">
          Features:
        </h3>
        <ul className="list-disc list-inside text-center text-lg">
          <li>Keep track of your game collection.</li>
          <li>Record your gaming sessions and achievements.</li>
          <li>Discover new games and share your experiences.</li>
        </ul>

         
        <GameCard/>
    </>
  )
}

