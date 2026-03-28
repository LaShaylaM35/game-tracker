import React, { useState, useEffect } from 'react'
import { Cards } from './Cards'


export const GameCard = () => {
  const [games, setGames] = useState([]);

  const getGames = async () => {
    const url =
      import.meta.env.VITE_SUPABASE_URL;
    const token = import.meta.env.VITE_TOKEN;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        apikey: token,
      },
    });

    const data = await response.json();

    setGames(data);
  };

  useEffect(() => {
    getGames();
  }, []);

  return (
    <>
      
 {games.map((game) => (
    <Cards key={game.id} title={game.title} genre={game.genre} rating={game.rating} />
  ))}

    </>
  );
};





