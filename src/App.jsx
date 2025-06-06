import { useState } from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-grow pt-3">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer className="mt-auto" />
      </div>
    </BrowserRouter>
  );
}

export default App;
