import React, { useState, useEffect } from "react";    





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



export const getGames = async () => {
  const url = import.meta.env.VITE_SUPABASE_URL;
    const token = import.meta.env.VITE_TOKEN;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'apikey': token
      }
    })

    
      
      const data = await response.json();
      setGames(data);
   
    }



    export const deleteGame = async (id)=>{

    const newUrl = `${url}formtable?&id=eq.${id}`
    const response = await fetch(newUrl, {
        method: "DELETE", 
        headers: {
            'apikey' : token, 
            'Content-Type': 'application/json'
        }, 
        
    });

    if (response.ok){
        const data= {message : "Game Deleted", state: true}
        return data;
    }else{
        const data = await response.json()
        console.log(data);
        return data;
    }

}
    



