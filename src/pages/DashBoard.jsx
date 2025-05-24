import { useState } from 'react'
import '../assets/styles/DashBoard.css'
import Slidebar from '../components/Navbar'
import { FaArrowTrendUp, FaPersonCircleCheck } from "react-icons/fa6";
import { FaGasPump, FaPeopleCarry, FaTruck, FaUser, FaSearch } from "react-icons/fa";
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
} from 'recharts';

const data = [
    { name: 'Jan', value: 65 },
    { name: 'Feb', value: 72 },
    { name: 'Mar', value: 60 },
    { name: 'Apr', value: 78 },
    { name: 'May', value: 85 },
    { name: 'Jun', value: 90 },
    { name: 'Jul', value: 70 },
    { name: 'Aug', value: 80 },
    { name: 'Sep', value: 75 },
    { name: 'Oct', value: 68 },
];

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-purple-700 text-white text-sm p-2 rounded-lg shadow-md">
                <p className="font-semibold">{label} 2023</p>
                <p>{payload[0].value}%</p>
            </div>
        );
    }
    return null;
};

function LineChartOverview() {
    return (
        <div className="rounded-lg w-full max-w-2xl mx-auto">
            <div className="flex justify-end items-center mb-4">
                <div className="text-white bg-[#0f101b] px-3 py-1 rounded-md text-sm">Monthly</div>
            </div>
            <ResponsiveContainer width="100%" height={250}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1} />
                    <XAxis dataKey="name" stroke="#8884d8" tick={{ fill: '#aaa', fontSize: 12 }} />
                    <YAxis stroke="#8884d8" tick={{ fill: '#aaa', fontSize: 12 }} domain={[24, 100]} />
                    <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#8884d8', strokeDasharray: '3 3' }} />
                    <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#a855f7"
                        strokeWidth={3}
                        dot={{ r: 4, fill: '#a855f7' }}
                        activeDot={{ r: 6, fill: '#a855f7' }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

function DonutMetric() {
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
            <div className='flex w-full justify-end h-screen bg-[#131321]'>
                <div className='flex w-[88%] h-screen'>

                    <div className="flex-1 bg-[#0f101b] p-8">
                        <div className='flex items-center justify-between mb-4'>
                            <div className='flex items-center gap-4'>
                                <span className='flex items-center justify-center text-gray-600 rounded-full bg-gray-300 w-10 h-10'><FaUser /></span>
                                <p className="text-white text-2xl font-bold">Bienvenido Devuelta, User</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <button className='bg-[#151523] text-white px-4 py-2 rounded-full w-10 h-10 hover:bg-[#6C4DF5] flex items-center gap-2 mt-4'>
                                    <FaSearch />
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
                                <div className="h-[260px] w-full">
                                    <DonutMetric />
                                </div>
                            </div>
                        </div>

                        {/* Fila 2 */}
                        <div className="flex gap-4 mb-4">
                            <div className="bg-[#1e1e2f] p-4 rounded-lg shadow-md w-auto">
                                <h2 className="text-white text-lg font-semibold">Card 3</h2>
                                <div className="flex w-[750px]">
                                    <LineChartOverview />
                                </div>
                            </div>
                            <div className="bg-[#1e1e2f] p-4 rounded-lg shadow-md flex-1">
                                <h2 className="text-white text-lg font-semibold">Tipos de Vehiculos</h2>
                                <div className='flex items-center justify-around h-full'>
                                    <div>
                                        <ul>
                                            <li className="list-disc bullet-orange text-white">Item1</li>
                                            <li className="list-disc bullet-purple text-white">Item2</li>
                                            <li className="list-disc bullet-blue text-white">Item3</li>
                                            <li className="list-disc bullet-green text-white">Item4</li>
                                        </ul>
                                    </div>
                                    <div className="w-[300px]">
                                        <DonutMetric />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Fila 3 */}
                        <div className="flex gap-4">
                            <div className="bg-[#1e1e2f] rounded-lg shadow-md w-auto">
                                <h2 className="text-white p-4 text-lg font-semibold">Actividad Reciente</h2>
                                <div className="text-gray-400 rounded-lg">
                                    <table className="min-w-full table-auto border-spacing-y-2 text-sm bg-[#1e1e2f]">
                                        <thead>
                                            <tr className="text-left text-gray-400 uppercase tracking-wide">
                                                <th className="px-4 py-2">Licenss Plate</th>
                                                <th className="px-4 py-2">Type</th>
                                                <th className="px-4 py-2">Status</th>
                                                <th className="px-4 py-2">Driver</th>
                                                <th className="px-4 py-2">Entry Time</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="bg-[#171827] rounded-lg">
                                                <td className="px-4 py-2 text-white">ABC123</td>
                                                <td className="px-4 py-2 text-white">Truck</td>
                                                <td className="px-4 py-2 text-white">Available</td>
                                                <td className="px-4 py-2 text-white">John Smith</td>
                                                <td className="px-4 py-2 text-white">12:39 AM</td>
                                            </tr>
                                            <tr className="bg-[#171827] rounded-lg">
                                                <td className="px-4 py-2 text-white">DEF456</td>
                                                <td className="px-4 py-2 text-white">Tanker</td>
                                                <td className="px-4 py-2 text-white">In Transit</td>
                                                <td className="px-4 py-2 text-white">Robert Brown</td>
                                                <td className="px-4 py-2 text-white">9.45 AM</td>
                                            </tr>
                                            <tr className="bg-[#171827] rounded-lg">
                                                <td className="px-4 py-2 text-white">GHI789</td>
                                                <td className="px-4 py-2 text-white">Refrigerated</td>
                                                <td className="px-4 py-2 text-white">Auttttused</td>
                                                <td className="px-4 py-2 text-white">Frank Morgan</td>
                                                <td className="px-4 py-2 text-white">10:00 AM</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                            <div className="bg-[#1e1e2f] rounded-lg shadow-md flex-1">
                                <h2 className="text-white p-4 text-lg font-semibold">Actividad Reciente</h2>
                                <div className="text-gray-400 rounded-lg">
                                    <table className="min-w-full table-auto border-spacing-y-2 text-sm bg-[#1e1e2f]">
                                        <thead>
                                            <tr className="text-left text-gray-400 uppercase tracking-wide">
                                                <th className="px-4 py-2">Licenss Plate</th>
                                                <th className="px-4 py-2">Type</th>
                                                <th className="px-4 py-2">Status</th>
                                                <th className="px-4 py-2">Driver</th>
                                                <th className="px-4 py-2">Entry Time</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="bg-[#171827] rounded-lg">
                                                <td className="px-4 py-2 text-white">ABC123</td>
                                                <td className="px-4 py-2 text-white">Truck</td>
                                                <td className="px-4 py-2 text-white">Available</td>
                                                <td className="px-4 py-2 text-white">John Smith</td>
                                                <td className="px-4 py-2 text-white">12:39 AM</td>
                                            </tr>
                                            <tr className="bg-[#171827] rounded-lg">
                                                <td className="px-4 py-2 text-white">DEF456</td>
                                                <td className="px-4 py-2 text-white">Tanker</td>
                                                <td className="px-4 py-2 text-white">In Transit</td>
                                                <td className="px-4 py-2 text-white">Robert Brown</td>
                                                <td className="px-4 py-2 text-white">9.45 AM</td>
                                            </tr>
                                            <tr className="bg-[#171827] rounded-lg">
                                                <td className="px-4 py-2 text-white">GHI789</td>
                                                <td className="px-4 py-2 text-white">Refrigerated</td>
                                                <td className="px-4 py-2 text-white">Auttttused</td>
                                                <td className="px-4 py-2 text-white">Frank Morgan</td>
                                                <td className="px-4 py-2 text-white">10:00 AM</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>



        </div>
    )

}

export default DashBoard;