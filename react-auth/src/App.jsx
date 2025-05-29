import { Routes, Route, Navigate } from 'react-router-dom';

import Login from "./components/Login";
import Register from "./components/Register";
import Welcome from "./components/Welcome";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </div>
  );
};

export default App;
