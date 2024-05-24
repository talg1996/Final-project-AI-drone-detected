// App.tsx
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Calc from "./components/calc";
import Header from "./components/Header";
import Live from "./routes/Live";
import Database from "./routes/Database";
import Info from "./routes/Info";
import ListCheck from "./routes/ListCheck";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/live" element={<Live />} />
          <Route path="/database" element={<Database />} />
          <Route path="/info" element={<Info />} />
          <Route path="/list-check" element={<ListCheck />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
