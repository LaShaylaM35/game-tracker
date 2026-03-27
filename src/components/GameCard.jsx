import React, { useState, useEffect } from "react";


export const GameCard = () => {
  const [game, setGame] = useState([]);

  const getGame = async () => {
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

    setGame(data);
  };

  useEffect(() => {
    getGame();
  }, []);

  return (
    <>
      {game.map((item) => (
        <Card key={item.id} title={item.title} genre={item.genre} rating={item.rating} />
      ))}
    </>
  );
};