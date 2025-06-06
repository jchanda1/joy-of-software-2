import { useState } from "react";
import "./App.css";
import NavBar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <NavBar />
      <div className="flex items-center justify-center">
        <div>
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
