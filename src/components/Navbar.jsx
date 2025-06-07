import React, { useState } from 'react'
import '../assets/styles/Navbar.css'
import { FaRegUser, FaUser, FaSearch } from "react-icons/fa";
import { PiNutBold, PiGasPumpBold } from "react-icons/pi";
import { LuTruck } from "react-icons/lu";
import { MdPeopleOutline } from "react-icons/md";
import { SiGooglecontaineroptimizedos } from "react-icons/si";
import { VscReport } from "react-icons/vsc";
import { GiPathDistance } from "react-icons/gi";
import { RiAdminLine, RiSteering2Fill } from "react-icons/ri";
import { useNavigate, Link } from 'react-router-dom';
import {
    LuPencil,
    LuUserRoundPlus,
    LuSettings,
    LuTrash2,
    LuUsersRound,
} from "react-icons/lu";


function UserMenu() {
    return (
        <div className="absolute top-25 right-7 w-[200px] bg-gradient-to-br from-[#242832] to-[#201e2c] rounded-[10px] py-[15px] flex flex-col gap-[10px] z-50">
            <ul className="list-none flex flex-col gap-2 px-[10px]">
                <li className="flex items-center text-[#7e8590] gap-2 transition-all duration-300 ease-out px-[7px] py-[4px] rounded cursor-pointer hover:bg-[#1c77bc] hover:text-white hover:translate-x-[1px] hover:-translate-y-[1px] active:scale-95">
                    <span className="w-[19px] h-[19px]">
                        <LuPencil className="w-full h-full transition-all duration-300 ease-out group-hover:stroke-white" />
                    </span>
                    <p className="font-semibold">Dejar Nota</p>
                </li>
                <li className="flex items-center text-[#7e8590] gap-2 transition-all duration-300 ease-out px-[7px] py-[4px] rounded cursor-pointer hover:bg-[#1c77bc] hover:text-white hover:translate-x-[1px] hover:-translate-y-[1px] active:scale-95">
                    <span className="w-[19px] h-[19px]">
                        <LuUserRoundPlus className="w-full h-full transition-all duration-300 ease-out group-hover:stroke-white" />
                    </span>
                    <p className="font-semibold">Agregar Miembro</p>
                </li>
            </ul>

            <div className="border-t-[1.5px] border-[#42434a]" />

            <ul className="list-none flex flex-col gap-2 px-[10px]">
                <li className="flex items-center text-[#7e8590] gap-2 transition-all duration-300 ease-out px-[7px] py-[4px] rounded cursor-pointer hover:bg-[#1c77bc] hover:text-white hover:translate-x-[1px] hover:-translate-y-[1px] active:scale-95">
                    <span className="w-[19px] h-[19px]">
                        <LuSettings className="w-full h-full transition-all duration-300 ease-out group-hover:stroke-white" />
                    </span>
                    <p className="font-semibold">Ajustes</p>
                </li>
            </ul>

            <div className="border-t-[1.5px] border-[#42434a]" />

            <ul className="list-none flex flex-col gap-2 px-[10px]">
                <li className="flex items-center text-[#1c77bc] gap-2 transition-all duration-300 ease-out px-[7px] py-[4px] rounded cursor-pointer hover:bg-[rgba(20,92,145,0.536)] hover:translate-x-[1px] hover:-translate-y-[1px] active:scale-95">
                    <span className="w-[19px] h-[19px]">
                        <LuUsersRound className="w-full h-full stroke-[#1c77bc]" />
                    </span>
                    <p className="font-semibold">Team Access</p>
                </li>
            </ul>
        </div>
    )
}

function Navbar() {
    const [showForm, setShowForm] = useState(false);

    const handleFormToggle = () => {
        setShowForm(!showForm);
        console.log("Form toggled:", !showForm);
    }

    return (
        <div className='flex items-center justify-between mb-4'>
            <div className='flex items-center gap-4'>
                <span className='flex items-center justify-center text-gray-600 rounded-full bg-gray-300 w-10 h-10'><FaUser /></span>
                <p className="text-white text-2xl font-bold">Bienvenido Devuelta, User</p>
            </div>
            <div className='flex items-center gap-4'>
                <button onClick={() => handleFormToggle()} className='bg-[#161b28] cursor-pointer text-white px-4 py-2 rounded-full w-12 h-12 hover:bg-[#1c77bc] flex items-center gap-2 mt-4'>
                    <FaUser />
                </button>
                {showForm && <UserMenu />}
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
        <nav className="fixed flex justify-start items-center w-[12%] max-h-lg h-screen z-20">
            <section className="flex flex-col items-center justify-between h-screen w-full bg-[#161b28] pt-4 pb-4">
                <article>
                    <img src="/logo.png" alt="" />
                </article>

                <hr className="w-[90%] my-5 border-t-2 border-[#2e3448] opacity-80" />
                

                <article className='flex-1 flex flex-col items-start justify-start w-full px-4 space-y-6 '>
                    <ul className="flex flex-col items-start justify-start w-full mt-4">
                        <li className="w-4/5">
                            <Link to="/" href='' className="inline-flex items-center gap-2 w-full text-white px-4 py-2 hover:text-[#1c77bc] hover:bg-[#142042] hover:border-l-4 hover:border-l-[#1c77bc] transition-all rounded">
                                <span><PiNutBold /></span>General
                            </Link>
                        </li>
                    </ul>

                    <span className='text-[#1c77bc] font-semibold uppercase mt-2'>Personal</span>

                    <ul className="flex flex-col items-start justify-start space-y-6 w-full">

                        <li className="w-4/5">
                            <Link to="/vehicles" className="inline-flex items-center gap-2 w-full text-white px-4 py-2 hover:text-[#1c77bc] hover:bg-[#142042] hover:border-l-4 hover:border-l-[#1c77bc] transition-all rounded">
                                <span><LuTruck /></span>Vehiculos
                            </Link>
                        </li>
                        <li className="w-4/5">
                            <Link to="/drivers" className="inline-flex items-center gap-2 w-full text-white px-4 py-2 hover:text-[#1c77bc] hover:bg-[#142042] hover:border-l-4 hover:border-l-[#1c77bc] transition-all rounded"><span>
                                <RiSteering2Fill /></span>Conductores
                            </Link>
                        </li>
                        <li className="w-4/5">
                            <Link to="/employees" className="inline-flex items-center gap-2 w-full text-white px-4 py-2 hover:text-[#1c77bc] hover:bg-[#142042] hover:border-l-4 hover:border-l-[#1c77bc] transition-all rounded"><span>
                                <MdPeopleOutline /></span>Empleados
                            </Link>
                        </li>
                    </ul>


                    <span className='text-[#1c77bc] font-semibold uppercase mt-2'>Logistica</span>

                    <ul className="flex flex-col items-start justify-start space-y-6 w-full">
                        <li className="w-4/5">
                            <Link to="/loads" className="inline-flex items-center gap-2 w-full text-white px-4 py-2 hover:text-[#1c77bc] hover:bg-[#142042] hover:border-l-4 hover:border-l-[#1c77bc] transition-all rounded"><span>
                                <SiGooglecontaineroptimizedos /></span>Carga
                            </Link>
                        </li>
                        <li className="w-4/5">
                            <Link to="/road" className="inline-flex items-center gap-2 w-full text-white px-4 py-2 hover:text-[#1c77bc] hover:bg-[#142042] hover:border-l-4 hover:border-l-[#1c77bc] transition-all rounded">
                                <span><GiPathDistance /></span>Rutas
                            </Link>
                        </li>
                        <li className="w-4/5">
                            <Link to="/" className="inline-flex items-center gap-2 w-full text-white px-4 py-2 hover:text-[#1c77bc] hover:bg-[#142042] hover:border-l-4 hover:border-l-[#1c77bc] transition-all rounded"><span>
                                <VscReport /></span>Reportes
                            </Link>
                        </li>
                        <li className="w-4/5">
                            <Link to="/pump" className="inline-flex items-center gap-2 w-full text-white px-4 py-2 hover:text-[#1c77bc] hover:bg-[#142042] hover:border-l-4 hover:border-l-[#1c77bc] transition-all rounded"><span>
                                <PiGasPumpBold /></span>Surtidor
                            </Link>
                        </li>
                    </ul>

                </article>

                <div className="flex items-center justify-center mt-4">
                    <button className="bg-[#1c77bc] text-white px-4 py-2 rounded hover:bg-[#1c77bc]" onClick={() => handleNav('/login')}>
                        Cerrar Sesión
                    </button>
                </div>
            </section>
        </nav>
    )
}

export { Slidebar, Navbar }