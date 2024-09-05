import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupLogin from './components/LoginSignUp';
import Overview from './components/Overview';
import ProtectedRoute from './components/ProtectedRoute'; // Ensure this path is correct

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<SignupLogin />} />
        <Route path="/overview" element={<ProtectedRoute><Overview /></ProtectedRoute>} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
