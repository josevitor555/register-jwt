import { Routes, Route } from 'react-router-dom';

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Welcome from "./components/Welcome";

const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </div>
  )
}

export default App;
