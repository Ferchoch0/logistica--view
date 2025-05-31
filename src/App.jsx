import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import DashBoard from './pages/DashBoard'
import Login from './pages/login'
import Vehicles from './pages/Vehicles'

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/vehicles" element={<Vehicles />} />
    </Routes>
  )
}

export default App  