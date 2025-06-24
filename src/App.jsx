import "./App.css";
import NavBar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CurrentProjects from "./components/CurrentProjects";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-grow pt-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/currentprojects" element={<CurrentProjects />} />
          </Routes>
        </main>
        <Footer className="mt-auto" />
      </div>
    </BrowserRouter>
  );
}

export default App;
