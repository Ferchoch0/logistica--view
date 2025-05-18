import { useState } from 'react'
import '../assets/styles/Navbar.css'
import { FaRegUser} from "react-icons/fa";
import { PiNutBold, PiGasPumpBold} from "react-icons/pi";
import { LuTruck } from "react-icons/lu";
import { MdPeopleOutline} from "react-icons/md";
import { SiGooglecontaineroptimizedos } from "react-icons/si";
import { VscReport } from "react-icons/vsc";
import { GiPathDistance } from "react-icons/gi";
import { RiAdminLine, RiSteering2Fill } from "react-icons/ri";



function Slidebar() {
    return (
        <nav className="flex justify-start items-center max-h-lg h-screen z-20">
            <div className="flex flex-col items-center justify-between h-screen w-64 bg-[#131321] pt-4 pb-4">
                <h1 className="text-white text-2xl font-bold mb-8">BERETTA</h1>
                <ul className="flex-1 flex flex-col items-start justify-start space-y-8 w-full">
                    <li className="w-4/5">
                        <a href="#" className="inline-flex items-center gap-2 w-full text-white px-4 py-2 hover:text-[#6C4DF5] hover:bg-[#191a2a] hover:border-l-4 hover:border-l-[#6C4DF5] transition-all rounded"><span><PiNutBold /></span>General</a>
                    </li>
                    <li className="w-4/5">
                        <a href="#" className="inline-flex items-center gap-2 w-full text-white px-4 py-2 hover:text-[#6C4DF5] hover:bg-[#191a2a] hover:border-l-4 hover:border-l-[#6C4DF5] transition-all rounded"><span><FaRegUser /></span>Usuarios</a>
                    </li>
                    <li className="w-4/5">
                        <a href="#" className="inline-flex items-center gap-2 w-full text-white px-4 py-2 hover:text-[#6C4DF5] hover:bg-[#191a2a] hover:border-l-4 hover:border-l-[#6C4DF5] transition-all rounded"><span><LuTruck /></span>Vehiculos</a>
                    </li>
                    <li className="w-4/5">
                        <a href="#" className="inline-flex items-center gap-2 w-full text-white px-4 py-2 hover:text-[#6C4DF5] hover:bg-[#191a2a] hover:border-l-4 hover:border-l-[#6C4DF5] transition-all rounded"><span><RiSteering2Fill /></span>Conductores</a>
                    </li>
                    <li className="w-4/5">
                        <a href="#" className="inline-flex items-center gap-2 w-full text-white px-4 py-2 hover:text-[#6C4DF5] hover:bg-[#191a2a] hover:border-l-4 hover:border-l-[#6C4DF5] transition-all rounded"><span><SiGooglecontaineroptimizedos /></span>Carga</a>
                    </li>
                    <li className="w-4/5">
                        <a href="#" className="inline-flex items-center gap-2 w-full text-white px-4 py-2 hover:text-[#6C4DF5] hover:bg-[#191a2a] hover:border-l-4 hover:border-l-[#6C4DF5] transition-all rounded"><span><GiPathDistance /></span>Rutas</a>
                    </li>
                    <li className="w-4/5">
                        <a href="#" className="inline-flex items-center gap-2 w-full text-white px-4 py-2 hover:text-[#6C4DF5] hover:bg-[#191a2a] hover:border-l-4 hover:border-l-[#6C4DF5] transition-all rounded"><span><VscReport /></span>Reportes</a>
                    </li>
                    <li className="w-4/5">
                        <a href="#" className="inline-flex items-center gap-2 w-full text-white px-4 py-2 hover:text-[#6C4DF5] hover:bg-[#191a2a] hover:border-l-4 hover:border-l-[#6C4DF5] transition-all rounded"><span><PiGasPumpBold /></span>Surtidor</a>
                    </li>
                    <li className="w-4/5">
                        <a href="#" className="inline-flex items-center gap-2 w-full text-white px-4 py-2 hover:text-[#6C4DF5] hover:bg-[#191a2a] hover:border-l-4 hover:border-l-[#6C4DF5] transition-all rounded"><span><MdPeopleOutline /></span>Empleados</a>
                    </li>
                    <li className="w-4/5">
                        <a href="#" className="inline-flex items-center gap-2 w-full text-white px-4 py-2 hover:text-[#6C4DF5] hover:bg-[#191a2a] hover:border-l-4 hover:border-l-[#6C4DF5] transition-all rounded"><span><RiAdminLine  /></span>Administradores</a>
                    </li>
                </ul>
                <div className="flex items-center justify-center mt-4">
                    <button className="bg-[#6C4DF5] text-white px-4 py-2 rounded hover:bg-[#7C65E9]">
                        Cerrar Sesión
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Slidebar