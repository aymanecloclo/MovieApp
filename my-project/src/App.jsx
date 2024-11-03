// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import UserProvider from './components/UserProvider';
import Profile from './components/Profile'; // Assurez-vous que le chemin est correct
import DetailsFilm from './components/DetailsFilm';
import Login from './components/Login'; // Assurez-vous que le chemin est correct
import Register from './components/Register';

function App() {
  return (
    <Router>
      <UserProvider>
        <Navbar />
        <Routes>
        <Route path="/register" element={<Register/>} />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path='/DetailsFilm/:id_details' element={<DetailsFilm/>}/>
          <Route
            path="/Profile/:UserId"
            element={
              <ProtectedRoute>
                <Profile/> {/* Afficher le tableau de bord */}
              </ProtectedRoute>
            }
          />
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
