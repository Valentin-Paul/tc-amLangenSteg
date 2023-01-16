import "./App.css";
import { Routes, Route } from "react-router-dom";
import AGB from "./pages/AGB/AGB";
import HomePage from "./pages/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import IsPrivate from "./components/IsPrivate/IsPrivate";
import IsAnon from "./components/IsAnon/IsAnon";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="agb" element={<AGB />} />
      </Routes>
    </div>
  );
}

export default App;
