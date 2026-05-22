import React from "react";
import Header from "./components/sections/Header/Header.jsx";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Hero from "./components/sections/Hero/Hero.jsx";

function App() {
  return (
    <div className="app-container">
      {/* O menu flutuará sobre a section abaixo */}
      <Header />
      <Hero />
      
  
      
    </div>
  );
}

export default App;