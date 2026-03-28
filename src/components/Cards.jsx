import React from "react";
import { useState } from "react";
import { getGames } from "../services/gamesService";


export const Cards = ({ title, genre, rating }) => {


  return (
    <>

    <div className="container">
      <div className="card m-3">
        <div className="card-body ">
        
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{genre}</p>
          <p className="card-text">{rating}</p>

        <button  className="btn btn-primary">Delete Game</button>
        </div>
      </div>
    </div>
    </>
  );
};
