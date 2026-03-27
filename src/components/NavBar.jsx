import React from 'react'

export const NavBar = () => {
  return (
     <>
      <nav className="bg-cyan-400 underline text-white p-4">
        <div className="container mx-auto flex">
          <div className="flex justify-start items-center">
            <div className="flex px-2 space-x-5">
              <a href="/" className="hover:text-gray-300">Home</a>
              <a href="/addgamepage" className="hover:text-gray-300">AddGame</a>
              
            </div>
          </div>
        </div>
      </nav>
      
    </>
  );
};