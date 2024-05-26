import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage/Login';
import Resource from './components/ResourcePage/Resource';
import ProtectedRoute from './components/ProtectedRoute';
import Add from './components/AddResources/Add';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/nxtwave/" element={<LoginPage />} />
        <Route
          path="/resource"
          element={
            <ProtectedRoute>
              <Resource />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add"
          element={
            <ProtectedRoute>
              <Add />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
