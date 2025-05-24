import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import DashBoard from './pages/DashBoard'
import Login from './pages/login' // importa tu componente Login

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App