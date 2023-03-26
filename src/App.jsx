import "./App.css";
import { Routes, Route } from "react-router-dom";
import AGB from "./pages/AGB/AGB";
import HomePage from "./pages/HomePage/HomePage";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { useRef } from 'react'

function App() {

const containerRef = useRef(null)

  return (
    <LocomotiveScrollProvider
    options={
      {
        smooth: true,
      }
    }
    watch={
      [
        Routes
      ]
    }
    onLocationChange={scroll => scroll.scrollTo(0, { duration: 0, disableLerp: true })} // If you want to reset the scroll position to 0 for example
    containerRef={containerRef}
  >
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="agb" element={<AGB />} />
      </Routes>
    </div>
    </LocomotiveScrollProvider>
  );
}

export default App;