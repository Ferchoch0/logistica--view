import React, { useState } from 'react'
import '../assets/styles/Navbar.css'
import { FaRegUser, FaUser, FaSearch } from "react-icons/fa";
import { PiNutBold, PiGasPumpBold} from "react-icons/pi";
import { LuTruck } from "react-icons/lu";
import { MdPeopleOutline} from "react-icons/md";
import { SiGooglecontaineroptimizedos } from "react-icons/si";
import { VscReport } from "react-icons/vsc";
import { GiPathDistance } from "react-icons/gi";
import { RiAdminLine, RiSteering2Fill } from "react-icons/ri";
import { useNavigate, Link } from 'react-router-dom'; // <-- Agrega esta línea


function Navbar() {
    return (
        <div className='flex items-center justify-between mb-4'>
            <div className='flex items-center gap-4'>
                <span className='flex items-center justify-center text-gray-600 rounded-full bg-gray-300 w-10 h-10'><FaUser /></span>
                <p className="text-white text-2xl font-bold">Bienvenido Devuelta, User</p>
            </div>
            <div className='flex items-center gap-4'>
                <button className='bg-[#151523] text-white px-4 py-2 rounded-full w-10 h-10 hover:bg-[#1c77bc] flex items-center gap-2 mt-4'>
                    <FaSearch />
                </button>
                <button className='bg-[#151523] text-white px-4 py-2 rounded-full w-10 h-10 hover:bg-[#1c77bc] flex items-center gap-2 mt-4'>
                    <FaUser />
                </button>
            </div>
        </div>
    )
}



function Slidebar() {

    const navigate = useNavigate();

    const handleNav = (path) => {
        navigate(path);
    };




    return (
        <nav className="fixed flex justify-start items-center max-h-lg h-screen z-20">
            <div className="flex flex-col items-center justify-between h-screen w-64 bg-[#161b28] pt-4 pb-4">
                <h1 className="text-white text-2xl font-bold mb-8">BERETTA</h1>
                <ul className="flex-1 flex flex-col items-start justify-start space-y-8 w-full">
                    <li className="w-4/5">
                        <Link to="/" href='' className="inline-flex items-center gap-2 w-full text-white px-4 py-2 hover:text-[#1c77bc] hover:bg-[#142042] hover:border-l-4 hover:border-l-[#1c77bc] transition-all rounded">
                            <span><PiNutBold /></span>General
                        </Link>
                    </li>
                    <li className="w-4/5">
                        <Link to="/" className="inline-flex items-center gap-2 w-full text-white px-4 py-2 hover:text-[#1c77bc] hover:bg-[#142042] hover:border-l-4 hover:border-l-[#1c77bc] transition-all rounded">
                            <span><FaRegUser /></span>Usuarios
                        </Link>
                    </li>
                    <li className="w-4/5">
                        <Link to="/vehicles" className="inline-flex items-center gap-2 w-full text-white px-4 py-2 hover:text-[#1c77bc] hover:bg-[#142042] hover:border-l-4 hover:border-l-[#1c77bc] transition-all rounded">
                            <span><LuTruck /></span>Vehiculos
                        </Link>
                    </li>
                    <li className="w-4/5">
                        <Link to="/" className="inline-flex items-center gap-2 w-full text-white px-4 py-2 hover:text-[#1c77bc] hover:bg-[#142042] hover:border-l-4 hover:border-l-[#1c77bc] transition-all rounded"><span>
                            <RiSteering2Fill /></span>Conductores
                        </Link>
                    </li>
                    <li className="w-4/5">
                        <Link to="/" className="inline-flex items-center gap-2 w-full text-white px-4 py-2 hover:text-[#1c77bc] hover:bg-[#142042] hover:border-l-4 hover:border-l-[#1c77bc] transition-all rounded"><span>
                            <SiGooglecontaineroptimizedos /></span>Carga
                        </Link>
                    </li>
                    <li className="w-4/5">
                        <Link to="/" className="inline-flex items-center gap-2 w-full text-white px-4 py-2 hover:text-[#1c77bc] hover:bg-[#142042] hover:border-l-4 hover:border-l-[#1c77bc] transition-all rounded">
                            <span><GiPathDistance /></span>Rutas
                        </Link>
                    </li>
                    <li className="w-4/5">
                        <Link to="/" className="inline-flex items-center gap-2 w-full text-white px-4 py-2 hover:text-[#1c77bc] hover:bg-[#142042] hover:border-l-4 hover:border-l-[#1c77bc] transition-all rounded"><span>
                            <VscReport /></span>Reportes
                        </Link>
                    </li>
                    <li className="w-4/5">
                        <Link to="/" className="inline-flex items-center gap-2 w-full text-white px-4 py-2 hover:text-[#1c77bc] hover:bg-[#142042] hover:border-l-4 hover:border-l-[#1c77bc] transition-all rounded"><span>
                            <PiGasPumpBold /></span>Surtidor
                        </Link>
                    </li>
                    <li className="w-4/5">
                        <Link to="/" className="inline-flex items-center gap-2 w-full text-white px-4 py-2 hover:text-[#1c77bc] hover:bg-[#142042] hover:border-l-4 hover:border-l-[#1c77bc] transition-all rounded"><span>
                            <MdPeopleOutline /></span>Empleados
                        </Link>
                    </li>
                    <li className="w-4/5">
                        <Link to="/" className="inline-flex items-center gap-2 w-full text-white px-4 py-2 hover:text-[#1c77bc] hover:bg-[#142042] hover:border-l-4 hover:border-l-[#1c77bc] transition-all rounded"><span>
                            <RiAdminLine  /></span>Administradores
                        </Link>
                    </li>
                </ul>
                <div className="flex items-center justify-center mt-4">
                    <button className="bg-[#1c77bc] text-white px-4 py-2 rounded hover:bg-[#1c77bc]" onClick={() => handleNav('/login')}>
                        Cerrar Sesión
                    </button>
                </div>
            </div>
        </nav>
    )
}

export {Slidebar, Navbar}