import { useState } from 'react'
import { Slidebar, Navbar } from '../components/Navbar'
import { FaGasPump, FaTimes } from "react-icons/fa";


function PumpAmount({ number, description = "Gasolina" }) {
    return (
        <div className="w-64 bg-[#161b28] p-9 space-y-3 relative overflow-hidden rounded-lg">
            <div className="w-24 h-24 bg-[var(--color-primary)] rounded-full absolute -right-5 top-10">
                <p className="absolute bottom-10 left-6 text-white text-2xl">{number}%</p>
            </div>
            <div className='flex text-[#1c77bc] text-2xl items-center'>
                <span className="w-8">
                    <FaGasPump />
                </span>
                {description}
            </div>


        </div>
    );
}
function PumpForm({ onClose }) {
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="relative bg-[#161b28] p-6 rounded-lg w-full max-w-md">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-white text-xl hover:text-red-500"
                >
                    <FaTimes />
                </button>

                <h2 className="text-white text-2xl mb-4">Registrar Movimiento</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-white mb-2">Matricula del vehiculo</label>
                        <input type="text" className="w-full p-2 rounded bg-[#222634] text-white" />
                    </div>
                    <div>
                        <label className="block text-white mb-2">Tipo de Movimiento</label>
                        <select className="w-full p-2 rounded bg-[#222634] text-white">
                            <option>Carga</option>
                            <option>Descarga</option>
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

function PumpTitle() {
    const [showForm, setShowForm] = useState(false);

    return (
        <div className="flex flex-col items-start justify-between pb-4 rounded-lg mb-6">
            <h1 className="text-white text-4xl uppercase font-bold mb-4">Surtidor</h1>

            <div className="flex items-center justify-between w-full mb-4 h-12">
                <button
                    onClick={() => setShowForm(true)}
                    className="cursor-pointer transition-all bg-[var(--color-primary)] text-white px-6 py-2 rounded-lg border-[#155a8a] border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
                >
                    Registrar Movimiento
                </button>
            </div>

            {showForm && <PumpForm onClose={() => setShowForm(false)} />}

            <div className="flex space-x-4">
                <PumpAmount number="4" />
            </div>
        </div>
    );
}

function PumpTable() {
    const [movements] = useState([
        { id: 1, amount: 200, type: 'Ingreso', plate: '' },
        { id: 2, amount: 150, type: 'Retiro', plate: 'ABC123' },
        { id: 3, amount: 100, type: 'Retiro', plate: 'XYZ789' },
        { id: 4, amount: 300, type: 'Ingreso', plate: '' },
    ]);

    return (
        <div>
            <table className="min-w-full table-auto border-spacing-y-2 text-sm rounded-lg bg-[#111622] mt-8">
                <thead>
                    <tr className="text-left text-gray-400 uppercase tracking-wide">
                        <th className="px-4 py-2">ID</th>
                        <th className="px-4 py-2">Cantidad</th>
                        <th className="px-4 py-2">Tipo de Movimiento</th>
                        <th className="px-4 py-2">Matrícula</th>
                    </tr>
                </thead>
                <tbody>
                    {movements.map(mov => (
                        <tr key={mov.id} className="bg-[#161b28] rounded-lg">
                            <td className="px-4 py-2 text-white">{mov.id}</td>
                            <td className="px-4 py-2 text-white">{mov.amount}</td>
                            <td className="px-4 py-2 text-white">{mov.type}</td>
                            <td className="px-4 py-2 text-white">
                                {mov.type === 'Retiro' ? mov.plate : ''}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}


function Pump() {
    return (
        <div>
            <Slidebar />
            <div className='flex w-full justify-end h-screen bg-[#131321]'>
                <div className='flex w-[88%] h-screen'>
                    <div className="flex-1 bg-[#0a0e1a] p-8">
                        <Navbar />
                        <PumpTitle />
                        <PumpTable />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pump;

