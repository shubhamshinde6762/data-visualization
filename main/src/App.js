import axios from "axios";
import { Route, Routes, NavLink, Router } from "react-router-dom";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
