import { useState } from 'react'
import { Slidebar, Navbar } from '../components/Navbar'
import { FaTimes } from 'react-icons/fa';

function PumpForm({ onClose }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/80">
            <div className="relative bg-[var(--card-color)] p-6 rounded-lg w-full max-w-md">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-[var(--text-color)] text-xl hover:text-red-500 cursor-pointer"
                >
                    <FaTimes />
                </button>

                <h2 className="text-[var(--text-color)] text-2xl mb-4">Registrar Movimiento</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-[var(--sub-text-color)] mb-2">Matricula del vehiculo</label>
                        <input type="text" className="w-full p-2 rounded bg-[var(--sub-card-color)] text-[var(--text-color)]" />
                    </div>
                    <div>
                        <label className="block text-[var(--sub-text-color)] mb-2">Tipo de Movimiento</label>
                        <select className="w-full p-2 rounded bg-[var(--sub-card-color)] text-[var(--text-color)]">
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

function LoadsTitle() {
    const [showForm, setShowForm] = useState(false);

    return (
        <div className="flex flex-col items-start justify-between pb-4 rounded-lg mb-6">
            <h1 className="text-[var(--text-color)] text-4xl uppercase font-bold mb-4">Cargas</h1>

            <div className="flex items-center justify-between w-full mb-4 h-12">
                <button
                    onClick={() => setShowForm(true)}
                    className="cursor-pointer transition-all bg-[var(--color-primary)] text-white px-6 py-2 rounded-lg border-[#155a8a] border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
                >
                    Registrar Movimiento
                </button>
            </div>

            {showForm && <PumpForm onClose={() => setShowForm(false)} />}   
        </div>
    );
}


function Loads() {
    return (
        <div>
            <Slidebar />
            <div className='flex w-full justify-end h-full bg-[#131321]'>
                <div className='flex w-[88%] min-h-screen h-full'>
                    <div className="flex-1 bg-[var(--bg-color)] p-8">
                        <Navbar />
                        <LoadsTitle />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Loads;