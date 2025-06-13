import { useState } from 'react'
import { Slidebar, Navbar } from '../components/Navbar'
import { FaShippingFast, FaTimes, FaFilter} from "react-icons/fa";

function VehicleSection({ number, type }) {
    return (
        <div className="w-64 bg-[var(--card-color)] p-9 space-y-3 relative overflow-hidden rounded-lg">
            <div className="w-24 h-24 bg-[var(--color-primary)] rounded-full absolute -right-5 -top-7">
                <p className="absolute bottom-6 left-7 text-white text-2xl">{number}</p>
            </div>
            <span className="text-[var(--text-color)] w-12 text-4xl">
                <FaShippingFast/>
            </span>

            <h1 className="font-bold text-xl text-[var(--text-color)] pt-4">{type}</h1>
        </div>
    );
}

function Filter() {
  const [showFilter, setShowFilter] = useState(false);
    
  return(
    <div>
        <div className="flex justify-end mb-2">
        <button
        onClick={() => setShowFilter(prev => !prev)}
        className="flex items-center gap-2 px-4 py-2 bg-[#1c77bc] text-white rounded hover:bg-blue-600 transition"
        >
          <FaFilter />
        Filtro
        </button>
        </div>

      {showFilter && (
        <div className="mb-4 mt-12 p-4 bg-[var(--bg-color)] rounded-lg space-y-3 text-white --text-color">
          <h3 className="text-[var(--text-color)] font-semibold">Filtrar rutas</h3>
          <form className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input type="text" placeholder="Matrícula" className="p-2 rounded bg-[var(--sub-card-color)] text-[var(--sub-text-color)]" />
            <select className="p-2 rounded bg-[var(--sub-card-color)] text-[var(--text-color)]">
              <option value="">Estado</option>
              <option value="Proceso">Proceso</option>
              <option value="Finalizado">Finalizado</option>
            </select>
            <input type="date" placeholder="Fecha inicio" className="p-2 rounded bg-[var(--sub-card-color)] text-[var(--sub-text-color)]" />    
            <input type="date" placeholder="Fecha finalización" className="p-2 rounded bg-[var(--sub-card-color)] text-[var(--sub-text-color)]" />
            <button className="col-span-full bg-blue-600 hover:bg-blue-700 transition text-white px-4 py-2 rounded" type="submit">
              Aplicar filtros
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

function VehicleForm({ onClose }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/80">
            <div className="relative bg-[var(--card-color)] p-6 rounded-lg w-full max-w-md">
                <button
                    onClick={onClose}
                    className="absolute text-[var(--text-color)] top-2 right-2 text-xl hover:text-red-500 cursor-pointer"
                >
                    <FaTimes />
                </button>

                <h2 className="text-[var(--text-color)] text-2xl mb-4">Registrar Vehículo</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-[var(--sub-text-color)] mb-2">Nombre del Vehículo</label>
                        <input type="text" className="w-full p-2 rounded bg-[var(--sub-card-color)] text-[var(--text-color)]" />
                    </div>
                    <div>
                        <label className="block text-[var(--sub-text-color)] mb-2">Tipo de Vehículo</label>
                        <select className="w-full p-2 rounded bg-[var(--sub-card-color)] text-[var(--text-color)]">
                            <option>Camión</option>
                            <option>Furgoneta</option>
                            <option>Araña</option>
                            <option>Otro</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="bg-[#1c77bc] text-white w-full px-4 py-2 rounded hover:bg-blue-600 transition disabled:opacity-50"
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
            <h1 className="text-[var(--text-color)] text-4xl uppercase font-bold mb-4">Vehículos</h1>

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
            <table className="min-w-full table-auto border-spacing-y-2 text-sm rounded-lg bg-[var(--card-color)]">
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
                        <tr key={vehicle.id} className="bg-[var(--sub-card-color)] rounded-lg">
                            <td className="px-4 py-2 text-[var(--text-color)]">{vehicle.id}</td>
                            <td className="px-4 py-2 text-[var(--text-color)]">{vehicle.name}</td>
                            <td className="px-4 py-2 text-[var(--text-color)]">{vehicle.type}</td>
                            <td className="px-4 py-2 text-[var(--text-color)]">{vehicle.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}


function Vehicles() {
    return (
        <div>
            <Slidebar />
            <div className='flex w-full justify-end h-full bg-[#131321]'>
                <div className='flex w-[88%] min-h-screen h-full'>
                    <div className="flex-1 bg-[var(--bg-color)] p-8">
                        <Navbar />
                        <VehicleTitle />
                        <Filter />
                        <VehiclesTable />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Vehicles;

