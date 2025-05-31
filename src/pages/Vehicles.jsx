import { useState } from 'react'
import '../assets/styles/Vehicles.css'
import { Slidebar, Navbar } from '../components/Navbar'
import { FaShippingFast, FaTimes } from "react-icons/fa";


function VehicleSection({ number, type }) {
    return (
        <div className="w-64 bg-[#161b28] p-9 space-y-3 relative overflow-hidden rounded-lg">
            <div className="w-24 h-24 bg-[var(--color-primary)] rounded-full absolute -right-5 -top-7">
                <p className="absolute bottom-6 left-7 text-white text-2xl">{number}</p>
            </div>
            <span className="text-[#1c77bc] w-12 text-4xl">
                <FaShippingFast />
            </span>

            <h1 className="font-bold text-xl text-white pt-4">{type}</h1>
        </div>
    );
}
function VehicleForm({ onClose }) {
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="relative bg-[#161b28] p-6 rounded-lg w-full max-w-md">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-white text-xl hover:text-red-500"
                >
                    <FaTimes />
                </button>

                <h2 className="text-white text-2xl mb-4">Registrar Vehículo</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-white mb-2">Nombre del Vehículo</label>
                        <input type="text" className="w-full p-2 rounded bg-[#222634] text-white" />
                    </div>
                    <div>
                        <label className="block text-white mb-2">Tipo de Vehículo</label>
                        <select className="w-full p-2 rounded bg-[#222634] text-white">
                            <option>Camión</option>
                            <option>Furgoneta</option>
                            <option>Araña</option>
                            <option>Otro</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[var(--color-primary)] text-white px-4 py-2 rounded hover:bg-[var(--color-primary-hover)]"
                    >
                        Registrar
                    </button>
                </form>
            </div>
        </div>
    );
}

function VehicleTitle() {
    const [showForm, setShowForm] = useState(false);

    return (
        <div className="flex flex-col items-start justify-between pb-4 rounded-lg mb-6">
            <h1 className="text-white text-4xl uppercase font-bold mb-4">Vehículos</h1>

            <div className="flex items-center justify-between w-full mb-4 h-12">
                <button
                    onClick={() => setShowForm(true)}
                    className="cursor-pointer transition-all bg-[var(--color-primary)] text-white px-6 py-2 rounded-lg border-[#155a8a] border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
                >
                    Registrar Vehículo
                </button>
            </div>

            {showForm && <VehicleForm onClose={() => setShowForm(false)} />}

            <div className="flex space-x-4">
                <VehicleSection number="04" type="Camiones" />
                <VehicleSection number="02" type="Furgonetas" />
                <VehicleSection number="01" type="Arañas" />
                <VehicleSection number="03" type="Otros" />
            </div>
        </div>
    );
}

function VehiclesTable() {
    const [vehicles, setVehicles] = useState([
        { id: 1, name: 'Camión 1', type: 'Camión', status: 'Activo' },
        { id: 2, name: 'Camión 2', type: 'Camión', status: 'Inactivo' },
        { id: 3, name: 'Furgoneta 1', type: 'Furgoneta', status: 'Activo' },
        { id: 4, name: 'Furgoneta 2', type: 'Furgoneta', status: 'Inactivo' },
    ]);

    return (
        <div>
            <table className="min-w-full table-auto border-spacing-y-2 text-sm rounded-lg bg-[#111622]">
                <thead>
                    <tr className="text-left text-gray-400 uppercase tracking-wide">
                        <th className="px-4 py-2">ID</th>
                        <th className="px-4 py-2">Nombre</th>
                        <th className="px-4 py-2">Tipo</th>
                        <th className="px-4 py-2">Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {vehicles.map(vehicle => (
                        <tr key={vehicle.id} className="bg-[#161b28] rounded-lg">
                            <td className="px-4 py-2 text-white">{vehicle.id}</td>
                            <td className="px-4 py-2 text-white">{vehicle.name}</td>
                            <td className="px-4 py-2 text-white">{vehicle.type}</td>
                            <td className="px-4 py-2 text-white">{vehicle.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}


function Vehicles() {
    return (
        <div className="vehicles-page">
            <Slidebar />
            <div className='flex w-full justify-end h-screen bg-[#131321]'>
                <div className='flex w-[88%] h-screen'>
                    <div className="flex-1 bg-[#0a0e1a] p-8">
                        <Navbar />
                        <VehicleTitle />
                        <VehiclesTable />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Vehicles;

