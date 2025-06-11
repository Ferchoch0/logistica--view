import { useState } from 'react'
import '../assets/styles/Employees.css'
import { Slidebar, Navbar } from '../components/Navbar'
import { FaShippingFast, FaTimes } from "react-icons/fa";


function EmployeeForm({ onClose }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="relative bg-[var(--card-color)] p-6 rounded-lg w-full max-w-md">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-[var(--text-color)] text-xl hover:text-red-500"
                >
                    <FaTimes />
                </button>

                <h2 className="text-[var(--text-color)] text-2xl mb-4">Registrar Empleado</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-[var(--sub-text-color)] mb-2">Nombre del Empleado</label>
                        <input type="text" className="w-full p-2 rounded bg-[var(--sub-card-color)] text-[var(--text-color)]" />
                    </div>
                    <div>
                        <label className="block text-[var(--sub-text-color)] mb-2">Vehículo Asignado</label>
                        <input type="text" className="w-full p-2 rounded bg-[var(--sub-card-color)] text-[var(--text-color)]" />
                    </div>
                    <div>
                        <label className="block text-[var(--sub-text-color)] mb-2">Cargo</label>
                        <input type="text" className="w-full p-2 rounded bg-[var(--sub-card-color)] text-[var(--text-color)]" />
                    </div>
                    <div>
                        <label className="block text-[var(--sub-text-color)] mb-2">Estado</label>
                        <select className="w-full p-2 rounded bg-[var(--sub-card-color)] text-[var(--text-color)]">
                            <option>Activo</option>
                            <option>Inactivo</option>
                            <option>En Vacaciones</option>
                            <option>En Viaje</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-[var(--sub-text-color)] mb-2">Teléfono</label>
                        <input type="tel" className="w-full p-2 rounded bg-[var(--sub-card-color)] text-[var(--text-color)]" />
                    </div>
                    <div>
                        <label className="block text-[var(--sub-text-color)] mb-2">Correo Electrónico</label>
                        <input type="email" className="w-full p-2 rounded bg-[var(--sub-card-color)] text-[var(--text-color)]" />
                    </div>
                    <button
                        type="submit"
                        className="bg-[#1c77bc] text-white w-full px-4 py-2 rounded hover:bg-blue-600 transition disabled:opacity-50">
                        Registrar
                    </button>
                </form>
            </div>
        </div>
    );
}

function EmployeeAmount({ count }) {
    return (
        <div className="flex items-center justify-between mb-4 h-12">
            <h2 className="text-[var(--text-color)] text-xl">Total de Empleados: {count}</h2>
            <div className="flex items-center gap-2">
                <FaShippingFast className="text-[var(--text-color)] text-2xl" />
                <span className="text-[var(--text-color)] text-lg">{count} Empleados</span>
            </div>
        </div>
    );
}

function EmployeeTitle() {
    const [showForm, setShowForm] = useState(false);

    const handleAddEmployee = () => {
        setShowForm(true);
    };

    const handleCloseForm = () => {
        setShowForm(false);
    };

    return (
        <div className='flex flex-col mb-4'>
            <h1 className='text-[var(--text-color)] text-4xl uppercase font-bold mb-4'>Empleados</h1>
            <div className="flex items-center justify-between mb-4 h-12">
                <button
                    onClick={handleAddEmployee}
                    className="cursor-pointer transition-all bg-[var(--color-primary)] text-white px-6 py-2 rounded-lg border-[#155a8a] border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
                >
                    Añadir Empleado
                </button>
            </div>

            <EmployeeAmount count={10} />

            {showForm && <EmployeeForm onClose={handleCloseForm} />}



        </div>
    );
}



function EmployeeCard({ name, vehicle, position, status, phone, mail }) {
    return (
        <div className="flex flex-col justify-start gap-4 items-center w-[280px] h-[230px] bg-[var(--card-color)] p-4 rounded-lg overflow-hidden shadow-lg">
            <div className='flex items-center w-full'>
                <div className="card-img w-[70px] h-[70px] relative float-left rounded-full "></div>
                <div className="flex flex-col justify-center items-start ml-4">
                    <label className='text-[var(--text-color)]'>{name}</label>
                    <span className='text-[var(--text-color)]'>Vehicle: {vehicle}</span>
                </div>
            </div>
            <div className='flex flex-col items-start justify-start gap-1 w-full mt-2'>
                <span className='text-[var(--sub-text-color)] text-sm'>Cargo: {position}</span>
                <span className='text-[var(--sub-text-color)] text-sm'>Estado: {status}</span>
                <span className='text-[var(--sub-text-color)] text-sm'>Teléfono: {phone}</span>
                <span className='text-[var(--sub-text-color)] text-sm'>Correo: {mail}</span>
            </div>
        </div>
    )
}

function Employees() {
    return (
        <div>
            <Slidebar />
            <div className='flex w-full justify-end h-screen bg-[#131321]'>
                <div className='flex w-[88%] h-screen'>
                    <div className="flex-1 bg-[var(--bg-color)] p-8">
                        <Navbar />
                        <EmployeeTitle />
                        <div className="grid grid-cols-5 w-full justify-items-center gap-10">
                            <EmployeeCard
                                name="John Doe"
                                vehicle="Camión 1"
                                position="Conductor"
                                status="Activo"
                                phone="123-456-7890"
                                mail=""
                            />

                            <EmployeeCard
                                name="Jane Smith"
                                vehicle="Furgoneta 2"
                                position="Asistente"
                                status="En Viaje"
                                phone="987-654-3210"
                                mail=""
                            />


                            <EmployeeCard
                                name="Alice Johnson"
                                vehicle="Camión 3"
                                position="Gerente"
                                status="En Vacaciones"
                                phone="555-123-4567"
                                mail=""
                            />

                            <EmployeeCard
                                name="John Doe"
                                vehicle="Camión 1"
                                position="Conductor"
                                status="Activo"
                                phone="123-456-7890"
                                mail=""

                            />

                            <EmployeeCard
                                name="John Doe"
                                vehicle="Camión 1"
                                position="Conductor"
                                status="Activo"
                                phone="123-456-7890"
                                mail=""
                            />

                            <EmployeeCard
                                name="Jane Smith"
                                vehicle="Furgoneta 2"
                                position="Asistente"
                                status="En Viaje"
                                phone="987-654-3210"
                                mail=""
                            />


                            <EmployeeCard
                                name="Alice Johnson"
                                vehicle="Camión 3"
                                position="Gerente"
                                status="En Vacaciones"
                                phone="555-123-4567"
                                mail=""
                            />

                            <EmployeeCard
                                name="John Doe"
                                vehicle="Camión 1"
                                position="Conductor"
                                status="Activo"
                                phone="123-456-7890"
                                mail=""

                            />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Employees;