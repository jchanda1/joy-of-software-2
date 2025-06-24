import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CurrentProjects from "./components/CurrentProjects";
import Layout from "./UI/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/currentprojects" element={<CurrentProjects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
