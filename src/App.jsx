import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import "./App.css";
import { AddGamePage } from "./pages/AddGamePage";
import { NavBar } from "./components/NavBar";





function App() {
  return (
    <>
      <NavBar />
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/addgamepage" element={<AddGamePage />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
