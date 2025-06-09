import { useState } from 'react';
import { Slidebar, Navbar } from '../components/Navbar';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa6';
// import '../assets/styles/Driver.css';

function Carousel() {
  const [showAdd, setShowAdd] = useState(false);
  const [showModify, setShowModify] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [page, setPage] = useState(0);
  const itemsPerPage = 6;
  const [selectedId, setSelectedId] = useState(null);

  const [allItems, setAllItems] = useState([
    { id: 1, name: 'Conductor 1', status: 'Ocupado' },
    { id: 2, name: 'Conductor 2', status: 'Disponible' },
    { id: 3, name: 'Conductor 3', status: 'Disponible' },
    { id: 4, name: 'Conductor 4', status: 'Disponible' },
    { id: 5, name: 'Conductor 5', status: 'Ocupado' },
    { id: 6, name: 'Conductor 6', status: 'Ocupado' },
    { id: 7, name: 'Conductor 7', status: 'Ocupado' },
    { id: 8, name: 'Conductor 8', status: 'Ocupado' },
    { id: 9, name: 'Conductor 9', status: 'Ocupado' },
    { id: 10, name: 'Conductor 10', status: 'Ocupado' },
    { id: 11, name: 'Conductor 11', status: 'Disponible' },
    { id: 12, name: 'Conductor 12', status: 'Disponible' },
  ]);

  const visibleItems = allItems.slice(page * itemsPerPage, (page + 1) * itemsPerPage);
  const selectedItem = allItems.find((item) => item.id === selectedId);

  const handleNext = () => {
    setPage((prev) => (prev + 1) % Math.ceil(allItems.length / itemsPerPage));
  };

  const handlePrev = () => {
    setPage((prev) => (prev - 1 + Math.ceil(allItems.length / itemsPerPage)) % Math.ceil(allItems.length / itemsPerPage));
  };

  const enable = (id) => {
    setSelectedId(id);
  };
  const btAdd = (id, name, status) => {
    const Add = { id, name, status };
    setAllItems([...allItems, Add]);
  }
  const btModify = (id, name, status) => {
    const Modify = allItems.map(item =>
      item.id === id ? { ...item, name, status } : item
    );
    setAllItems(Modify);
  };
  const btEliminate = (id) => {
    const newItems = allItems.filter(item => item.id !== id);
    setAllItems(newItems);
  }


  return (
    <div className="flex gap-5 flex-col">
      <h1 className="text-white text-4xl uppercase font-bold mb-4">Conductores</h1>

      <div className="space-x-3 w-full h-12">
        <button
          onClick={() => setShowAdd(true)}
          className="cursor-pointer transition-all bg-[var(--color-primary)] text-white px-6 py-2 rounded-lg border-[#155a8a] border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
        >
          Agregar
        </button>
        <button
          disabled={!selectedItem}
          onClick={() => setShowModify(true)}
          className="cursor-pointer transition-all bg-[var(--color-primary)] text-white px-6 py-2 rounded-lg border-[#155a8a] border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
        >
          Modificar
        </button>
        <button
          disabled={!selectedItem}
          onClick={() => setShowDelete(true)}
          className="cursor-pointer transition-all bg-[var(--color-primary)] text-white px-6 py-2 rounded-lg border-[#155a8a] border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
        >
          Eliminar
        </button>
      </div>

      <div className="flex w-full justify-center items-center gap-2 mt-8">

        <button
          onClick={handlePrev}
          className="bg-[#1c77bc] text-white w-10 h-32 rounded-lg flex items-center justify-center hover:bg-blue-600 transition"
        >
          <FaArrowLeft />
        </button>


        {visibleItems.map((item) => (
          <div
            key={item.id}
            className="bg-[#1c1c2b] text-white w-50 h-40 flex flex-col items-center justify-center rounded-lg shadow-md gap-1 p-2"
          >
            <FaUser />
            <p className="font-bold">{item.name}</p>
            <p className={item.status === 'Disponible' ? 'text-green-400' : 'text-red-400'}>
              {item.status}
            </p>
            <button
              onClick={() => enable(item.id)}
              className="bg-[#1c77bc] text-white w-20 h-10 rounded-lg flex items-center justify-center hover:bg-blue-600 transition"
            >
              Boton
            </button>
          </div>
        ))}


        <button
          onClick={handleNext}
          className="bg-[#1c77bc] text-white w-10 h-32 rounded-lg flex items-center justify-center hover:bg-blue-600 transition"
        >
          <FaArrowRight />
        </button>
      </div>

      <SelectedDriverTable driver={selectedItem} />
      {showAdd && (
        <AddDriverForm onClose={() => setShowAdd(false)} onAdd={btAdd} />
      )}
      {showModify && selectedItem && (
        <ModifyDriverForm onClose={() => setShowModify(false)} onModify={btModify} driver={selectedItem} />
      )}
      {showDelete && selectedItem && (
        <DeleteDriverForm onClose={() => setShowDelete(false)} onDelete={btEliminate} driver={selectedItem} />
      )}
    </div>
  );
}
function AddDriverForm({ onClose, onAdd }) {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState('Disponible');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(Number(id), name, status);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-[#161b28] p-6 rounded-lg w-full max-w-md">
        <h2 className="text-white text-xl mb-4">Agregar Conductor</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="number"
            placeholder="ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="w-full p-2 rounded bg-[#222634] text-white"
            required
          />
          <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 rounded bg-[#222634] text-white"
            required
          />
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full p-2 rounded bg-[#222634] text-white"
          >
            <option>Disponible</option>
            <option>Ocupado</option>
          </select>
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-[#1c77bc] text-white px-4 py-2 rounded hover:bg-blue-600 transition disabled:opacity-50"

            >
              Agregar
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition disabled:opacity-50"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function ModifyDriverForm({ onClose, onModify, driver }) {
  const [name, setName] = useState(driver.name);
  const [status, setStatus] = useState(driver.status);

  const handleSubmit = (e) => {
    e.preventDefault();
    onModify(driver.id, name, status);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-[#161b28] p-6 rounded-lg w-full max-w-md">
        <h2 className="text-white text-xl mb-4">Modificar Conductor</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 rounded bg-[#222634] text-white"
            required
          />
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full p-2 rounded bg-[#222634] text-white"
          >
            <option>Disponible</option>
            <option>Ocupado</option>
          </select>
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-[#1c77bc] text-white px-4 py-2 rounded hover:bg-blue-600 transition disabled:opacity-50"
            >
              Modificar
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition disabled:opacity-50"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function DeleteDriverForm({ onClose, onDelete, driver }) {
  const handleDelete = () => {
    onDelete(driver.id);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-[#161b28] p-6 rounded-lg w-full max-w-md text-white">
        <h2 className="text-xl mb-4">Eliminar Conductor</h2>
        <p>¿Estás seguro que deseas eliminar a <strong>{driver.name}</strong>?</p>
        <div className="flex justify-between mt-4">
          <button
            onClick={handleDelete}
            className="bg-[#1c77bc] text-white px-4 py-2 rounded hover:bg-blue-600 transition disabled:opacity-50"

          >
            Eliminar
          </button>
          <button
            onClick={onClose}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition disabled:opacity-50"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}

function SelectedDriverTable({ driver }) {
  if (!driver) {
    return (
      <div className="text-center text-gray-400 p-4">
        Selecciona un conductor
      </div>
    );
  }
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-spacing-y-2 text-sm rounded-lg bg-[#111622]">
        <thead>
          <tr className="text-left text-gray-400 uppercase tracking-wide">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Nombre</th>
            <th className="px-4 py-2">Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr key={driver.id} className="bg-[#161b28]">
            <td className="px-4 py-2 text-white">{driver.id}</td>
            <td className="px-4 py-2 text-white">{driver.name}</td>
            <td className="px-4 py-2 text-white">{driver.status}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}


function Driver() {
  return (
    <div className="driver-page">
      <Slidebar />
      <div className="flex w-full justify-end h-screen bg-[#131321]">
        <div className="flex w-[88%] h-screen">
          <div className="flex-1 bg-[#0a0e1a] p-8">
            <Navbar />
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Driver;