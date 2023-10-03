import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Main from "./components/Main/Main";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />}/>
      </Routes>
    </div>
  );
}

export default App;
