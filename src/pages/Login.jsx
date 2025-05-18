import { useState } from 'react'
import '../assets/styles/Login.css'
import { FaTruckFast } from "react-icons/fa6";

function Navbar() {
    return (
        <nav className="fixed w-full bottom-4 z-50">
            <div className="flex justify-end items-center h-16">
                <img src='./logo.png' className='w-[350px] h-[350px]'></img>
            </div>
        </nav>
    )
}

function Welcome() {
    return (
        <div className="flex flex-col flex-1 justify-center items-center h-screen w-full pb-30">
            <div class="loader pb-8">
                <p>Expertos en</p>
                <div class="words">
                    <span class="word">Envios</span>
                    <span class="word">Transporte</span>
                    <span class="word">Logistica</span>
                    <span class="word">Distribucion</span>
                    <span class="word">Envios</span>
                </div>
            </div>
            <h1 className="text-6xl font-bold text-white">Bienvenido Denuevo!</h1>
        </div>
    )
}

function Form() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Email:', email)
        console.log('Password:', password)
    }

    return (
        <div className="flex justify-center items-center bg-[#181818] max-h-lg h-screen w-[750px]">
            <div
                className="overflow-hidden"
            >
                <div className="p-8">


                    <h2 className="text-4xl text-center font-extrabold text-[#E0E0E0]">
                        Ingresar
                    </h2>
                    <p className="mt-4 text-[#A0A0A0] text-center">Inicia sesión para administrar tus servicios.</p>
                    <form onSubmit={handleSubmit} className="mt-8 space-y-16">
                        <div className="rounded-md shadow-sm space-y-4">
                            <div className="relative group">
                                <span className="absolute -left-0.5 top-2 bottom-2 w-1.5 rounded bg-gradient-to-b from-[#4b79c5] to-[#334875] opacity-70 transition-all duration-300 group-focus-within:opacity-100"></span>
                                <input
                                    placeholder="Email address"
                                    className="peer w-[500px] pl-6 pr-4 pt-6 pb-2 text-sm bg-[#030704] border border-gray-200 rounded-lg shadow-md focus:border-transparent focus:ring-2 focus:ring-indigo-300 focus:outline-none transition-all duration-300 delay-200 placeholder-transparent"
                                    required
                                    autoComplete="off"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    name="email"
                                    id="email"
                                />
                                <label
                                    htmlFor="email"
                                    className={`absolute left-6 transition-all duration-200 ease-in-out peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#4b79c5] peer-focus:font-semibold ${email ? "top-1 text-sm text-[#4b79c5] font-semibold" : "top-3.5 text-base text-gray-400"
                                        }`}
                                >
                                    Email
                                </label>
                            </div>
                            <div className="relative group">
                                <span className="absolute -left-0.5 top-2 bottom-2 w-1.5 rounded bg-gradient-to-b from-[#4b79c5] to-[#334875] opacity-70 transition-all duration-300 group-focus-within:opacity-100"></span>
                                <input
                                    placeholder="Password"
                                    className="peer w-[500px] pl-6 pr-4 pt-6 pb-2 text-sm bg-[#030704] border border-gray-200 rounded-lg shadow-md focus:border-transparent focus:ring-2 focus:ring-indigo-300 focus:outline-none transition-all duration-300 delay-200 placeholder-transparent"
                                    required
                                    autoComplete="off"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    name="password"
                                    id="password"
                                />
                                <label
                                    htmlFor="password"
                                    className={`absolute left-6 transition-all duration-200 ease-in-out peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#4b79c5] peer-focus:font-semibold ${password ? "top-1 text-sm text-[#4b79c5] font-semibold" : "top-3.5 text-base text-gray-400"
                                        }`}
                                >
                                    Password
                                </label>
                            </div>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center">
                                <input
                                    className="h-4 w-4 text-[#6C4DF5] focus:ring-[#7C65E9] border-[#0D0B1D] rounded"
                                    type="checkbox"
                                    name="remember-me"
                                    id="remember-me"
                                />
                                <label className="ml-2 block text-sm text-[#A0A0A0]" htmlFor="remember-me" underline="decoration-[#1c77bc]">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a
                                    className="font-medium text-[#1c77bb] hover:text-[#175e97]"
                                    href="#"
                                >
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <div className='flex justify-center items-center'>
                            <button
                                className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-[#1c77bc] backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 border border-white/20"
                                type="submit"
                            >
                                <span className="text-lg">Login</span>
                                <div
                                    className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]"
                                >
                                    <div className="relative h-full w-10 bg-white/20"></div>
                                </div>
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

function Login() {
    return (
        <div className="relative flex items-center justify-start min-h-screen min-w-screen z-0 bg-[url('/bg-login.jpg')] bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-[#222d47] opacity-80 z-0 backdrop-blur-sm"></div>
            <Navbar />
            <div className="relative z-20 flex items-center justify-center h-screen w-full">
                <Form />
                <Welcome />
            </div>
        </div>
    )
}

export default Login;