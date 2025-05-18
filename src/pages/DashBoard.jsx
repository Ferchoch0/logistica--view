import { useState } from 'react'
import Slidebar from '../components/Navbar'
import { FaArrowTrendUp, FaPersonCircleCheck  } from "react-icons/fa6";
import { FaGasPump, FaPeopleCarry, FaTruck, FaUser, FaSearch} from "react-icons/fa";
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

function DonutMetric(){
  const data = [
    { name: 'Type A', value: 25 },
    { name: 'Type B', value: 75 },
  ];

  const COLORS = ['#FF8C42', '#6A4C93'];

  return (
    <div className="flex items-center justify-center p-4 w-full rounded-lg w-[300px] h-[300px]">
      <div className="absolute text-center text-white">
        <h2 className="text-xl font-semibold">VEHICLES</h2>
        <p className="text-3xl font-bold">5%</p>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            innerRadius={80}
            outerRadius={100}
            dataKey="value"
            startAngle={90}
            endAngle={450}
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

function DataCard({ icon, value, percentage, label }) {
    return (
        <div className='flex flex-col items-center justify-center bg-[#181929] h-52 min-w-[140px] w-full rounded-lg p-6 gap-4'>
            <span className='flex items-center justify-center bg-[#5a3593] w-15 h-15 rounded-full'>{icon}</span>
            <p className="text-4xl text-white font-extrabold">{value}</p>
            <p className="text-gray-400 text-[10px]"><span className='text-[#5a3593]'>{percentage}</span> {label}</p>
        </div>
    )
}


function DashBoard() {

    return (
        <div className="flex">
            <Slidebar />
            <div className="flex-1 bg-[#0f101b] p-8">
                <div className='flex items-center justify-between mb-4'>
                    <div className='flex items-center gap-4'>
                        <span className='flex items-center justify-center text-gray-600 rounded-full bg-gray-300 w-10 h-10'><FaUser /></span>
                        <p className="text-white text-2xl font-bold">Bienvenido Devuelta, User</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <button className='bg-[#151523] text-white px-4 py-2 rounded-full w-10 h-10 hover:bg-[#6C4DF5] flex items-center gap-2 mt-4'>
                            <FaSearch  />
                        </button>
                        <button className='bg-[#151523] text-white px-4 py-2 rounded-full w-10 h-10 hover:bg-[#6C4DF5] flex items-center gap-2 mt-4'>
                            <FaUser />
                        </button>
                    </div>
                </div>

                {/* Fila 1 */}
                <div className="flex gap-4 mb-4">
                    <div className="bg-[#1e1e2f] p-4 rounded-lg shadow-md w-auto">
                        <h2 className="text-white text-lg font-semibold">Datos de Interes</h2>
                        <div className="flex justify-center items-center h-full gap-8">
                            {/* Dato 1 */}
                            <DataCard icon={<FaPeopleCarry />} value="30" label="Empleados" />

                            {/* Dato 2 */}
                            <DataCard icon={<FaArrowTrendUp />} value="40%" percentage="+3%" label="Rutas" />                   

                            {/* Dato 3 */}
                            <DataCard icon={<FaPersonCircleCheck />} value="15" label="Conductores Activos" />

                            {/* Dato 4 */}
                            <DataCard icon={<FaTruck />} value="20" label="Vehiculos" />

                            {/* Dato 5 */}
                            <DataCard icon={<FaGasPump />} value="70%" percentage="Cant." label="Surtidor" />

                        </div>
                    </div>
                    <div className="bg-[#1e1e2f] p-4 rounded-lg shadow-md flex-1">
                        <h2 className="text-white text-lg font-semibold">Tipo de Vehiculos</h2>
                        <p className="text-gray-400">
                            <DonutMetric />
                        </p>
                    </div>
                </div>

                {/* Fila 2 */}
                <div className="flex gap-4 mb-4">
                    <div className="bg-[#1e1e2f] p-4 rounded-lg shadow-md w-auto">
                        <h2 className="text-white text-lg font-semibold">Card 3</h2>
                        <p className="text-gray-400">Content for Card 3</p>
                    </div>
                    <div className="bg-[#1e1e2f] p-4 rounded-lg shadow-md flex-1">
                        <h2 className="text-white text-lg font-semibold">Card 4</h2>
                        <p className="text-gray-400">Content for Card 4</p>
                    </div>
                </div>

                {/* Fila 3 */}
                <div className="flex gap-4">
                    <div className="bg-[#1e1e2f] p-4 rounded-lg shadow-md w-auto">
                        <h2 className="text-white text-lg font-semibold">Card 5</h2>
                        <p className="text-gray-400">Content for Card 5</p>
                    </div>
                    <div className="bg-[#1e1e2f] p-4 rounded-lg shadow-md flex-1">
                        <h2 className="text-white text-lg font-semibold">Card 6</h2>
                        <p className="text-gray-400">Content for Card 6</p>
                    </div>
                </div>
            </div>


        </div>
    )

}

export default DashBoard;