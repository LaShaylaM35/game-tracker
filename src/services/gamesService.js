import React, { useState, useEffect } from "react";    
import { GameCard } from "../components/GameCard";

export const getFormtable = async () => {
    const url =import.meta.env.VITE_SUPABASE_URL;
    const token = import.meta.env.VITE_TOKEN;
    

    const response = await fetch(url, {
      method: "GET",
      headers: {
        apikey: token,
      },
    });

    const data = await response.json();

    setformTable(data);
  };

  useEffect(() => {
    getFormTable();
  }, []);


}


export const createGame = async (data, setResult) => {
const url = import.meta.env.VITE_SUPABASE_URL;
    const token = import.meta.env.VITE_TOKEN;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'apikey': token
      },
      body: JSON.stringify(data)
    })

    if (response.ok) {
      setResult("Game Added")
    } else {
      setResult("Game not Added")
    }

  }
}