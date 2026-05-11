import { useState } from "react"
import { login, register } from "../api/auth"
import { useNavigate } from "react-router-dom"

function LoginPage() {
    const [isLogin, setIsLogin] = useState(true)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const changeStatus = () => {
        setIsLogin(!isLogin)
    }

    async function handleLogin() {
        const response = await login(username, password)

        if (!response.ok) {
            alert("Login failed")
            return
        }

        const token = await response.text()
        localStorage.setItem("token", token)

        navigate("/todos")
    }

    async function handleRegister() {
        const response = await register(username, password)

        if (!response.ok) {
            alert("Register failed")
            return
        }

        alert("Register successful")

        setIsLogin(true)
        setUsername("")
        setPassword("")
    }

    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center px-6">
            <div className="w-full max-w-5xl bg-white rounded-2xl shadow-sm border border-slate-200 grid grid-cols-1 md:grid-cols-2 overflow-hidden">

                <div className="bg-blue-600 text-white p-10 flex flex-col justify-between">
                    <div>
                        <h1 className="text-4xl font-bold">
                            TaskFlow
                        </h1>

                        <p className="mt-4 text-blue-100 leading-relaxed">
                            A modern productivity platform for managing tasks,
                            tracking progress, and organizing daily workflow.
                        </p>
                    </div>

                    <div className="mt-10">
                        <p className="text-sm text-blue-100">
                            Built with React, Spring Boot, MySQL, Redis, AWS, and JWT authentication.
                        </p>
                    </div>
                </div>

                <div className="p-10 flex flex-col justify-center">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-800">
                            {isLogin ? "Welcome back" : "Create account"}
                        </h2>

                        <p className="text-slate-500 mt-2">
                            {isLogin
                                ? "Sign in to continue to your workspace."
                                : "Register to start managing your tasks."}
                        </p>
                    </div>

                    <div className="mt-8 space-y-5">

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">
                                Username
                            </label>

                            <input
                                className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">
                                Password
                            </label>

                            <input
                                type="password"
                                className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        {isLogin ? (
                            <button
                                onClick={handleLogin}
                                className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
                            >
                                Sign In
                            </button>
                        ) : (
                            <button
                                onClick={handleRegister}
                                className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
                            >
                                Create Account
                            </button>
                        )}
                    </div>

                    <p className="text-sm text-slate-500 mt-6 text-center">
                        {isLogin
                            ? "Don’t have an account?"
                            : "Already have an account?"}

                        <button
                            onClick={changeStatus}
                            className="ml-2 text-blue-600 font-medium hover:underline"
                        >
                            {isLogin ? "Register" : "Login"}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage