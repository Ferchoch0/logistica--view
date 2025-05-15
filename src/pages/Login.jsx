import { useState } from 'react'

function Form() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Email:', email)
        console.log('Password:', password)
    }

    return (
        <div className="max-w-lg ml-[350px] w-full z-20">
            <div
                style={{
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                className="bg-[#1A1A2E] rounded-lg shadow-xl overflow-hidden"
            >
                <div className="p-8">
                    <h2 className="text-center text-3xl font-extrabold text-[#E0E0E0]">
                        Welcome Back
                    </h2>
                    <p className="mt-4 text-center text-[#A0A0A0]">Sign in to continue</p>
                    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                        <div className="rounded-md shadow-sm space-y-4">
                            <div className="relative group">
                                <span className="absolute -left-0.5 top-2 bottom-2 w-1.5 rounded bg-gradient-to-b from-indigo-500 to-purple-500 opacity-70 transition-all duration-300 group-focus-within:opacity-100"></span>
                                <input
                                    placeholder="Email address"
                                    className="peer w-full pl-6 pr-4 pt-6 pb-2 text-sm bg-[#0D0B1D] border border-gray-200 rounded-lg shadow-md focus:border-transparent focus:ring-2 focus:ring-indigo-300 focus:outline-none transition-all duration-300 delay-200 placeholder-transparent"
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
                                    className={`absolute left-6 transition-all duration-200 ease-in-out peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#6C4DF5] peer-focus:font-semibold ${email ? "top-1 text-sm text-[#6C4DF5] font-semibold" : "top-3.5 text-base text-gray-400"
                                        }`}
                                >
                                    Email
                                </label>
                            </div>
                            <div className="relative group">
                                <span className="absolute -left-0.5 top-2 bottom-2 w-1.5 rounded bg-gradient-to-b from-indigo-500 to-purple-500 opacity-70 transition-all duration-300 group-focus-within:opacity-100"></span>
                                <input
                                    placeholder="Password"
                                    className="peer w-full pl-6 pr-4 pt-6 pb-2 text-sm bg-[#0D0B1D] border border-gray-200 rounded-lg shadow-md focus:border-transparent focus:ring-2 focus:ring-indigo-300 focus:outline-none transition-all duration-300 delay-200 placeholder-transparent"
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
                                    className={`absolute left-6 transition-all duration-200 ease-in-out peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#6C4DF5] peer-focus:font-semibold ${password ? "top-1 text-sm text-[#6C4DF5] font-semibold" : "top-3.5 text-base text-gray-400"
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
                                <label className="ml-2 block text-sm text-[#A0A0A0]" htmlFor="remember-me">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a
                                    className="font-medium text-[#6C4DF5] hover:text-[#7C65E9]"
                                    href="#"
                                >
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button
                                className="group relative w-full text-white flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md bg-[#6C4DF5] hover:bg-[#7C65E9] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6C4DF5]"
                                type="submit"
                            >
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>
                <div className="px-8 py-4 bg-[#0D0B1D] text-center">
                    <span className="text-[#A0A0A0]">Don't have an account?</span>
                    <a className="font-medium text-[#6C4DF5] hover:text-[#7C65E9]" href="#">
                        Sign up
                    </a>
                </div>
            </div>
        </div>
    )
}

function Login() {
    return (
        <div className="relative flex items-center justify-start min-h-screen min-w-screen z-0 bg-[url('/bg-login.jpg')] bg-cover bg-center bg-no-repeat">
            <div
                className="absolute inset-0 z-10"
                style={{
                    backgroundImage: "linear-gradient(48deg, #0D0B1D 48%, transparent 130%)"
                }}
            ></div>
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
            <Form />
        </div>
    )
}

export default Login;