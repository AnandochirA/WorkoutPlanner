import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path = "/signup" element={<Signup />} />
        <Route path = "/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* You can add more routes here as needed */}
      </Routes>
    </Router>
  );
};

export default App;