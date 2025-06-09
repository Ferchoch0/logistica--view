import React from 'react'
import DarkMode from '../components/DarkMode'
import {
    LuPencil,
    LuUserRoundPlus,
    LuSettings,
    LuUsersRound,
    LuMoon,
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
                <li className="flex items-center text-[#7e8590] gap-2 transition-all duration-300 ease-out px-[7px] py-[4px] rounded select-none">
                    <span className="w-[19px] h-[19px] flex items-center justify-center">
                        {/* Puedes usar un ícono de luna, por ejemplo de react-icons */}
                        <LuMoon className="w-full h-full transition-all duration-300 ease-out group-hover:stroke-white" />
                    </span>
                    <p className="font-semibold flex-1">Modo Oscuro</p>
                    <DarkMode />
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

export default UserMenu;