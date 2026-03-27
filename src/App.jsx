import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import "./App.css";
import { AddGamePage } from "./pages/AddGamePage";
import { NavBar } from "./components/NavBar";





function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/addgamepage" element={<AddGamePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
