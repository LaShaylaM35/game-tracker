import React , {useState, useEffect } from 'react'
  import { useNavigate } from 'react-router-dom';
import { createGame } from '../services/gamesService';



export const GameForm = () => {

   const [result, setResult] = useState("")

  const submitHandler = async () => {
    event.preventDefault();

    const formData = new FormData(event.target)

    const data = {
      title: formData.get('title'),
      genre: formData.get('genre'),
      rating: formData.get('rating')
    }

    createGame(data, setResult);

  }

  return (
    <>
      <form onSubmit={submitHandler} className="w-1/2 mx-auto mt-5 border border-dark p-5 rounded">
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input name="title" type="text" className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">Genre</label>
          <input name="genre" type="text" className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">Rating</label>
          <input name="rating" type="number" className="form-control" />
        </div>

      

        <p>{result}</p>

        <button className='btn btn-dark'>Add Game</button>
      </form>
    </>
  )
}