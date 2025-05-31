import { useState } from 'react'
import '../assets/styles/DashBoard.css'
import { Slidebar, Navbar } from '../components/Navbar'
import { FaArrowTrendUp, FaPersonCircleCheck } from "react-icons/fa6";
import { FaGasPump, FaPeopleCarry, FaTruck } from "react-icons/fa";
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
            <div className="bg-[#1c77bc] text-white text-sm p-2 rounded-lg shadow-md">
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
                    <XAxis dataKey="name" stroke="#1c77bc" tick={{ fill: '#ccc', fontSize: 12 }} />
                    <YAxis stroke="#1c77bc" tick={{ fill: '#ccc', fontSize: 12 }} domain={[24, 100]} />
                    <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#1c77bc', strokeDasharray: '3 3' }} />
                    <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#1c77bc"
                        strokeWidth={3}
                        dot={{ r: 4, fill: '#1c77bc' }}
                        activeDot={{ r: 6, fill: '#1c77bc' }}
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

    const COLORS = ['#1c77bc', '#145c91'];

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
        <div className='flex flex-col items-center justify-center bg-[#131a24] h-52 min-w-[140px] w-full rounded-lg p-6 gap-4'>
            <span className='flex items-center justify-center bg-[#1c77bc] w-15 h-15 rounded-full text-white'>{icon}</span>
            <p className="text-4xl text-white font-extrabold">{value}</p>
            <p className="text-gray-400 text-[10px]"><span className='text-[#1c77bc]'>{percentage}</span> {label}</p>
        </div>
    )
}


function DashBoard() {
    return (
        <div className="flex">
            <Slidebar />
            <div className='flex w-full justify-end h-screen bg-[#131321]'>
                <div className='flex w-[88%] h-screen'>
                    <div className="flex-1 bg-[#0a0e1a] p-8">
                        <Navbar />
                        <div className="flex gap-4 mb-4">
                            <div className="bg-[#111622] p-4 rounded-lg shadow-md w-auto">
                                <h2 className="text-white text-lg font-semibold">Datos de Interes</h2>
                                <div className="flex justify-center items-center h-full gap-8">
                                    <DataCard icon={<FaPeopleCarry />} value="30" label="Empleados" />
                                    <DataCard icon={<FaArrowTrendUp />} value="40%" percentage="+3%" label="Rutas" />
                                    <DataCard icon={<FaPersonCircleCheck />} value="15" label="Conductores Activos" />
                                    <DataCard icon={<FaTruck />} value="20" label="Vehiculos" />
                                    <DataCard icon={<FaGasPump />} value="70%" percentage="Cant." label="Surtidor" />
                                </div>
                            </div>
                            <div className="bg-[#111622] p-4 rounded-lg shadow-md flex-1">
                                <h2 className="text-white text-lg font-semibold">Tipo de Vehiculos</h2>
                                <div className="h-[260px] w-full">
                                    <DonutMetric />
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 mb-4">
                            <div className="bg-[#111622] p-4 rounded-lg shadow-md w-auto">
                                <h2 className="text-white text-lg font-semibold">Card 3</h2>
                                <div className="flex w-[750px]">
                                    <LineChartOverview />
                                </div>
                            </div>
                            <div className="bg-[#111622] p-4 rounded-lg shadow-md flex-1">
                                <h2 className="text-white text-lg font-semibold">Tipos de Vehiculos</h2>
                                <div className='flex items-center justify-around h-full'>
                                    <div>
                                        <ul>
                                            <li className="list-disc text-[#1c77bc] text-white">Item1</li>
                                            <li className="list-disc text-[#145c91] text-white">Item2</li>
                                            <li className="list-disc text-[#1ca0dc] text-white">Item3</li>
                                            <li className="list-disc text-[#51d1f6] text-white">Item4</li>
                                        </ul>
                                    </div>
                                    <div className="w-[300px]">
                                        <DonutMetric />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="bg-[#111622] rounded-lg shadow-md w-auto">
                                <h2 className="text-white p-4 text-lg font-semibold">Actividad Reciente</h2>
                                <div className="text-gray-400 rounded-lg">
                                    <table className="min-w-full table-auto border-spacing-y-2 text-sm bg-[#141d27]">
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
                                            <tr className="bg-[#141d27] rounded-lg">
                                                <td className="px-4 py-2 text-white">ABC123</td>
                                                <td className="px-4 py-2 text-white">Truck</td>
                                                <td className="px-4 py-2 text-white">Available</td>
                                                <td className="px-4 py-2 text-white">John Smith</td>
                                                <td className="px-4 py-2 text-white">12:39 AM</td>
                                            </tr>
                                            <tr className="bg-[#141d27] rounded-lg">
                                                <td className="px-4 py-2 text-white">DEF456</td>
                                                <td className="px-4 py-2 text-white">Tanker</td>
                                                <td className="px-4 py-2 text-white">In Transit</td>
                                                <td className="px-4 py-2 text-white">Robert Brown</td>
                                                <td className="px-4 py-2 text-white">9.45 AM</td>
                                            </tr>
                                            <tr className="bg-[#141d27] rounded-lg">
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
                            <div className="bg-[#111622] rounded-lg shadow-md flex-1">
                                <h2 className="text-white p-4 text-lg font-semibold">Actividad Reciente</h2>
                                <div className="text-gray-400 rounded-lg">
                                    <table className="min-w-full table-auto border-spacing-y-2 text-sm bg-[#141d27]">
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
                                            <tr className="bg-[#141d27] rounded-lg">
                                                <td className="px-4 py-2 text-white">ABC123</td>
                                                <td className="px-4 py-2 text-white">Truck</td>
                                                <td className="px-4 py-2 text-white">Available</td>
                                                <td className="px-4 py-2 text-white">John Smith</td>
                                                <td className="px-4 py-2 text-white">12:39 AM</td>
                                            </tr>
                                            <tr className="bg-[#141d27] rounded-lg">
                                                <td className="px-4 py-2 text-white">DEF456</td>
                                                <td className="px-4 py-2 text-white">Tanker</td>
                                                <td className="px-4 py-2 text-white">In Transit</td>
                                                <td className="px-4 py-2 text-white">Robert Brown</td>
                                                <td className="px-4 py-2 text-white">9.45 AM</td>
                                            </tr>
                                            <tr className="bg-[#141d27] rounded-lg">
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