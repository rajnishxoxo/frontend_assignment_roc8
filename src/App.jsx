import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import ImageBox from "./Component/ImageBox";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <LandingPage />
              <ImageBox />
            </div>
          }
        />
      </Routes>
    </Router>
    
  );
}

export default App;
