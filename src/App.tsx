import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Main from "./components/Main/Main";
import Card from "./components/Card/Card";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openCard = () => {
    setIsOpen(true);
  };

  const closeCard = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main isOpen={isOpen} onClose={closeCard}/>}/>
        <Route path="/card" element={<Card />}/>
      </Routes>
    </div>
  );
}

export default App;
