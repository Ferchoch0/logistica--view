import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import DashBoard from './pages/DashBoard'
import Login from './pages/Login'
import Vehicles from './pages/Vehicles'
import Employees from './pages/Employees'

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/vehicles" element={<Vehicles />} />
      <Route path="/employees" element={<Employees />} />
    </Routes>
  )
}

export default App