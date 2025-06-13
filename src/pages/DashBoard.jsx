import { useState } from 'react'
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
            <div className="bg-[#1c77bc] text-[var(--text-color)] text-sm p-2 rounded-lg shadow-md">
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
                <div className="text-[var(--text-color)] bg-[var(--sub-card-color)] px-3 py-1 rounded-md text-sm">Anual</div>
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

function DonutTooltip({ active, payload }) {
    if (active && payload && payload.length) {
        const { name, value } = payload[0];
        return (
            <div className="bg-[#1c77bc] text-white text-sm p-2 rounded-lg shadow">
                <div className="font-bold">{name}</div>
                <div>Valor: {value}</div>
            </div>
        );
    }
    return null;
}

function DonutMetric({ title, porcentage, data }) {


    const COLORS = ["#1c77bc", "#145c91", "#1ca0dc", "#51d1f6"];

    return (
        <div className="flex items-center justify-center p-4 w-full rounded-lg w-[300px] h-[300px]">
            <div className="absolute text-center text-[var(--text-color)]">
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="text-3xl font-bold">{porcentage}</p>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        innerRadius={80}
                        outerRadius={108}
                        dataKey="value"
                        nameKey='label'
                        startAngle={90}
                        endAngle={450}
                        stroke="var(--card-color)"
                        strokeWidth={4}
                    >
                        {data.map((_, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index]} />
                        ))}
                    </Pie>
                    <Tooltip content={<DonutTooltip />} />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

function DataCard({ icon, value, percentage, label }) {
    return (
        <div className='flex flex-col items-center justify-center bg-[var(--sub-card-color)] h-52 min-w-[140px] w-full rounded-lg p-6 gap-4'>
            <span className='flex items-center justify-center bg-[#1c77bc] w-15 h-15 rounded-full text-white'>{icon}</span>
            <p className="text-4xl text-[var(--text-color)] font-extrabold">{value}</p>
            <p className="text-gray-400 text-[10px]"><span className='text-[#1c77bc]'>{percentage}</span> {label}</p>
        </div>
    )
}


function DashBoard() {

    const data1 = [
        { label: 'Disponibles', value: 28 },
        { label: 'No Disponibles', value: 23 },
    ];

    const data2 = [
        { label: 'Arañas', value: 3 },
        { label: 'Otros', value: 2 },
        { label: 'Camiones', value: 10 },
        { label: 'Furgonetas', value: 5 },
    ];

    return (
        <div className="flex">
            <Slidebar />
            <div className='flex w-full justify-end h-full'>
                <div className='flex w-[88%] min-h-screen h-full'>
                    <div className="flex-1 bg-[var(--bg-color)] p-8">
                        <Navbar />
                        <div className="flex gap-4 mb-4">
                            <div className="bg-[var(--card-color)] p-4 rounded-lg shadow-md w-auto">
                                <h2 className="text-[var(--text-color)] text-lg font-semibold">Datos de Interes</h2>
                                <div className="flex justify-center items-center h-full gap-8">
                                    <DataCard icon={<FaPeopleCarry />} value="30" label="Empleados" />
                                    <DataCard icon={<FaArrowTrendUp />} value="40%" percentage="+3%" label="Rutas" />
                                    <DataCard icon={<FaPersonCircleCheck />} value="15" label="Conductores Activos" />
                                    <DataCard icon={<FaTruck />} value="20" label="Vehiculos" />
                                    <DataCard icon={<FaGasPump />} value="70%" percentage="Cant." label="Surtidor" />
                                </div>
                            </div>
                            <div className="bg-[var(--card-color)] p-4 rounded-lg shadow-md flex-1">
                                <h2 className="text-[var(--text-color)] text-lg font-semibold">Cantidad de vehiculos disponibles</h2>
                                <div className="h-[260px] w-full">
                                    <DonutMetric title="VEHICULOS" porcentage="55%" data={data1} />

                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 mb-4">
                            <div className="bg-[var(--card-color)] p-4 rounded-lg shadow-md w-auto">
                                <h2 className="text-[var(--text-color)] text-lg font-semibold">Regularidad de viajes</h2>
                                <div className="flex w-[750px]">
                                    <LineChartOverview />
                                </div>
                            </div>
                            <div className="bg-[var(--card-color)] p-4 rounded-lg shadow-md flex-1">
                                <h2 className="text-[var(--text-color)] text-lg font-semibold">Tipos de Vehiculos</h2>
                                <div className='flex items-center justify-around h-full'>
                                    <div>
                                        <ul className='space-y-4 text-xs'>
                                            <li className="flex items-center gap-2 text-[var(--sub-text-color)]">
                                                <span className="w-3 h-3 rounded-full bg-[#51d1f6] inline-block"></span>
                                                Furgonetas
                                            </li>

                                            <li className="flex items-center gap-2 text-[var(--sub-text-color)]">
                                                <span className="w-3 h-3 rounded-full bg-[#1ca0dc] inline-block"></span>
                                                Camiones
                                            </li>
                                            
                                            <li className="flex items-center gap-2 text-[var(--sub-text-color)]">
                                                <span className="w-3 h-3 rounded-full bg-[#1c77bc] inline-block"></span>
                                                Arañas
                                            </li>

                                            <li className="flex items-center gap-2 text-[var(--sub-text-color)]">
                                                <span className="w-3 h-3 rounded-full bg-[#145c91] inline-block"></span>
                                                Otros
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="w-[300px]">
                                        <DonutMetric title="TIPOS" porcentage="" data={data2} />

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="bg-[var(--card-color)] rounded-lg shadow-md w-auto">
                                <h2 className="text-[var(--text-color)] p-4 text-lg font-semibold">Actividad Reciente</h2>
                                <div className="text-[var(--sub-text-color)] rounded-lg">
                                    <table className="min-w-full table-auto border-spacing-y-2 text-sm bg-[var(--interior-card-color)]">
                                        <thead>
                                            <tr className="text-left text-[var(--sub-text-color)] uppercase tracking-wide">
                                                <th className="px-4 py-2">Licenss Plate</th>
                                                <th className="px-4 py-2">Type</th>
                                                <th className="px-4 py-2">Status</th>
                                                <th className="px-4 py-2">Driver</th>
                                                <th className="px-4 py-2">Entry Time</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="bg-[var(--interior-card-color)] rounded-lg">
                                                <td className="px-4 py-2 text-[var(--text-color)]">ABC123</td>
                                                <td className="px-4 py-2 text-[var(--text-color)]">Truck</td>
                                                <td className="px-4 py-2 text-[var(--text-color)]">Available</td>
                                                <td className="px-4 py-2 text-[var(--text-color)]">John Smith</td>
                                                <td className="px-4 py-2 text-[var(--text-color)]">12:39 AM</td>
                                            </tr>
                                            <tr className="bg-[var(--interior-card-color)] rounded-lg">
                                                <td className="px-4 py-2 text-[var(--text-color)]">DEF456</td>
                                                <td className="px-4 py-2 text-[var(--text-color)]">Tanker</td>
                                                <td className="px-4 py-2 text-[var(--text-color)]">In Transit</td>
                                                <td className="px-4 py-2 text-[var(--text-color)]">Robert Brown</td>
                                                <td className="px-4 py-2 text-[var(--text-color)]">9.45 AM</td>
                                            </tr>
                                            <tr className="bg-[var(--interior-card-color)] rounded-lg">
                                                <td className="px-4 py-2 text-[var(--text-color)]">GHI789</td>
                                                <td className="px-4 py-2 text-[var(--text-color)]">Refrigerated</td>
                                                <td className="px-4 py-2 text-[var(--text-color)]">Auttttused</td>
                                                <td className="px-4 py-2 text-[var(--text-color)]">Frank Morgan</td>
                                                <td className="px-4 py-2 text-[var(--text-color)]">10:00 AM</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="bg-[var(--card-color)] rounded-lg shadow-md flex-1">
                                <h2 className="text-[var(--text-color)] p-4 text-lg font-semibold">Actividad Reciente</h2>
                                <div className="text-[var(--text-color)] rounded-lg">
                                    <table className="min-w-full table-auto border-spacing-y-2 text-sm bg-[var(--interior-card-color)]">
                                        <thead>
                                            <tr className="text-left text-[var(--sub-text-color)] uppercase tracking-wide">
                                                <th className="px-4 py-2">Licenss Plate</th>
                                                <th className="px-4 py-2">Type</th>
                                                <th className="px-4 py-2">Status</th>
                                                <th className="px-4 py-2">Driver</th>
                                                <th className="px-4 py-2">Entry Time</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="bg-[var(--interior-card-color)] rounded-lg">
                                                <td className="px-4 py-2 text-[var(--text-color)]">ABC123</td>
                                                <td className="px-4 py-2 text-[var(--text-color)]">Truck</td>
                                                <td className="px-4 py-2 text-[var(--text-color)]">Available</td>
                                                <td className="px-4 py-2 text-[var(--text-color)]">John Smith</td>
                                                <td className="px-4 py-2 text-[var(--text-color)]">12:39 AM</td>
                                            </tr>
                                            <tr className="bg-[var(--interior-card-color)] rounded-lg">
                                                <td className="px-4 py-2 text-[var(--text-color)]">DEF456</td>
                                                <td className="px-4 py-2 text-[var(--text-color)]">Tanker</td>
                                                <td className="px-4 py-2 text-[var(--text-color)]">In Transit</td>
                                                <td className="px-4 py-2 text-[var(--text-color)]">Robert Brown</td>
                                                <td className="px-4 py-2 text-[var(--text-color)]">9.45 AM</td>
                                            </tr>
                                            <tr className="bg-[var(--interior-card-color)] rounded-lg">
                                                <td className="px-4 py-2 text-[var(--text-color)]">GHI789</td>
                                                <td className="px-4 py-2 text-[var(--text-color)]">Refrigerated</td>
                                                <td className="px-4 py-2 text-[var(--text-color)]">Auttttused</td>
                                                <td className="px-4 py-2 text-[var(--text-color)]">Frank Morgan</td>
                                                <td className="px-4 py-2 text-[var(--text-color)]">10:00 AM</td>
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