import { useState } from 'react';
import { Slidebar, Navbar } from '../components/Navbar';
import { FaChevronLeft, FaChevronRight, FaFilter } from 'react-icons/fa';

function Road_page() {
  const [showAdd, setShow] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  const [allItems, setAllItems] = useState([
    {
      id: 1,
      Start: 'Av. Alsina 123, Banfield',
      Destiny: 'Calle Azara 456, Banfield',
      status: 'Proceso',
      vehicle_registration: 'ABC123',
      startDate: '2025-06-01',
      endDate: '-'
    },
    {
      id: 2,
      Start: 'Calle Maipú 789, Banfield',
      Destiny: 'Av. Yrigoyen 1010, Banfield',
      status: 'Finalizado',
      vehicle_registration: 'DEF456',
      startDate: '2025-05-25',
      endDate: '2025-05-26'
    },
    {
      id: 3,
      Start: 'Calle Vergara 321, Banfield',
      Destiny: 'Calle Pueyrredón 654, Banfield',
      status: 'Finalizado',
      vehicle_registration: 'GHI789',
      startDate: '2025-05-20',
      endDate: '2025-05-21'
    },
    {
      id: 4,
      Start: 'Calle Rincón 888, Banfield',
      Destiny: 'Calle Peña 999, Banfield',
      status: 'Proceso',
      vehicle_registration: 'JKL012',
      startDate: '2025-06-03',
      endDate: '-'
    },
    {
      id: 5,
      Start: 'Calle French 234, Banfield',
      Destiny: 'Calle Medrano 432, Banfield',
      status: 'Finalizado',
      vehicle_registration: 'MNO345',
      startDate: '2025-05-15',
      endDate: '2025-05-16'
    },
    {
      id: 6,
      Start: 'Calle Larroque 555, Banfield',
      Destiny: 'Calle Uriarte 777, Banfield',
      status: 'Proceso',
      vehicle_registration: 'PQR678',
      startDate: '2025-06-04',
      endDate: '-'
    },
    {
      id: 7,
      Start: 'Calle Campos 876, Banfield',
      Destiny: 'Av. Alsina 2020, Banfield',
      status: 'Finalizado',
      vehicle_registration: 'STU901',
      startDate: '2025-05-10',
      endDate: '2025-05-11'
    }
  ]);

  return (
    <div>
      <h1 className="text-[var(--text-color)] text-4xl uppercase font-bold mb-4 ">Rutas</h1>

      <div className="flex items-center gap-4 mb-4">
        <button
          className="cursor-pointer transition-all bg-[var(--color-primary)] text-white px-6 py-2 rounded-lg border-[#155a8a] border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
          onClick={() => setShow(true)}
        >
          Registrar ruta
        </button>

        <button
          className="cursor-pointer transition-all bg-[var(--color-primary)] text-white px-6 py-2 rounded-lg border-[#155a8a] border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
          onClick={() => setShowUpdate(true)}
        >
          Finalizar ruta
        </button>
      </div>

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

      {showAdd && <AddRoadForm onClose={() => setShow(false)} />}
      {showUpdate && <UpdateRoadStatusForm onClose={() => setShowUpdate(false)} />}
      <SelectedRoadTable road={allItems} />
    </div>
  );
}

function SelectedRoadTable({ road }) {
  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full table-auto border-spacing-y-2 text-sm rounded-lg bg-[var(--card-color)]">
        <thead>
          <tr className="text-left text-gray-400 uppercase tracking-wide">
            <th className="px-4 py-2">Partida</th>
            <th className="px-4 py-2">Destino</th>
            <th className="px-4 py-2">Estado</th>
            <th className="px-4 py-2">Matrícula</th>
            <th className="px-4 py-2">Inicio</th>
            <th className="px-4 py-2">Finalizado</th>
          </tr>
        </thead>
        <tbody>
          {road.map((item) => (
            <tr key={item.id} className="bg-[var(--sub-card-color)">
              <td className="px-4 py-2 text-[var(--text-color)]">{item.Start}</td>
              <td className="px-4 py-2 text-[var(--text-color)]">{item.Destiny}</td>
              <td className="px-4 py-2 text-[var(--text-color)]">{item.status}</td>
              <td className="px-4 py-2 text-[var(--text-color)]">{item.vehicle_registration}</td>
              <td className="px-4 py-2 text-[var(--text-color)]">{item.startDate}</td>
              <td className="px-4 py-2 text-[var(--text-color)]">{item.endDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between mt-4">
        <button className="flex items-center gap-2 px-4 py-2 bg-[#1c77bc] text-white rounded hover:bg-blue-600 transition">
        <FaChevronLeft />
        Anterior
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#1c77bc] text-white rounded hover:bg-blue-600 transition">
        Siguiente
        <FaChevronRight />
        </button>
        </div>
    </div>
  );
}



function AddRoadForm({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-[var(--card-color)] p-6 rounded-lg w-full max-w-md">
        <h2 className="text-[var(--text-color)] text-xl mb-4">Agregar Ruta</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Partida" className="w-full p-2 rounded bg-[var(--sub-card-color)] text-[var(--sub-text-color)]" required />
          <input type="text" placeholder="Destino" className="w-full p-2 rounded bg-[var(--sub-card-color)] text-[var(--sub-text-color)]" required />
          <select className="w-full p-2 rounded bg-[var(--sub-card-color)] text-[var(--text-color)] ">
            <option>Proceso</option>
            <option>Finalizado</option>
          </select>
          <input type="text" placeholder="Matrícula" className="w-full p-2 rounded bg-[var(--sub-card-color)] text-[var(--sub-text-color)]" required />
          <input type="date" placeholder="Fecha inicio" className="w-full p-2 rounded bg-[var(--sub-card-color)] text-[var(--sub-text-color)]" required />
          <input type="date" placeholder="Fecha finalización" className="w-full p-2 rounded bg-[var(--sub-card-color)] text-[var(--sub-text-color)]" required />

          <div className="flex justify-between">
            <button type="submit" className="bg-[#1c77bc] text-white px-4 py-2 rounded hover:bg-blue-600 transition">Agregar</button>
            <button type="button" onClick={onClose} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

function UpdateRoadStatusForm({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-[var(--card-color)] p-6 rounded-lg w-full max-w-md">
        <h2 className="text-[var(--text-color)] text-xl mb-4">Finalizar Ruta</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Matrícula del vehículo" className="w-full p-2 rounded bg-[var(--sub-card-color)] text-[var(--sub-text-color)]" required />
          <input type="date" placeholder="Fecha finalización" className="w-full p-2 rounded bg-[var(--sub-card-color)] text-[var(--sub-text-color)]" required />

          <div className="flex justify-between">
            <button type="submit" className="bg-[#1c77bc] text-white px-4 py-2 rounded hover:bg-blue-600 transition">Finalizar</button>
            <button type="button" onClick={onClose} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Road() {
  return (
    <div className="road-page">
      <Slidebar />
      <div className="flex w-full justify-end h-full bg-[var(--bg-color)]">
        <div className="flex w-[88%] min-h-screen h-full">
          <div className="flex-1 bg-[var(--bg-color)] p-8">
            <Navbar />
            <Road_page />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Road;
