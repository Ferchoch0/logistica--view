import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import DashBoard from './pages/DashBoard'
import Login from './pages/Login'
import Vehicles from './pages/Vehicles'
import Employees from './pages/Employees'
import Driver from './pages/Driver'
import Pump from './pages/Pump'
import Loads from './pages/Loads'
import Road from './pages/Road'

function App() {
  return (
    <Routes className='bg-[var(--bg-color)] text-white h-[100%]'>
      <Route path="/" element={<DashBoard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/vehicles" element={<Vehicles />} />
      <Route path="/employees" element={<Employees />} />
      <Route path="/drivers" element={<Driver />} />
      <Route path="/pump" element={<Pump />} />
      <Route path="/loads" element={<Loads />} />
      <Route path="/road" element={<Road />} />
    </Routes>
  )
}

export default App 