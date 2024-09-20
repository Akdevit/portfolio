import React, { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Lodding from "./components/home/Lodding";

function App() {
  const [loading, setLoading] = useState(true); // State to manage loading status

  // When the loading animation completes, transition directly to Home
  const handleLoddingComplete = () => {
    setLoading(false); // Set loading to false when Lodding completes
  };

  return (
    <>
      {loading ? (
        <Lodding onComplete={handleLoddingComplete} />
      ) : (
        <Home />  // Directly transition to Home after loading
      )}
    </>
  );
}

export default App;
