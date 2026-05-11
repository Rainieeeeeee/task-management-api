import { useEffect, useState } from "react"
import { getTodos, addTodos, deleteTodos, updateTodos } from "../api/todo"

function TodoPage() {
    const [todolist, setTodolist] = useState([])
    const [newTodo, setNewtodo] = useState("")

    function fetchTodos() {
        getTodos().then(response => {
            response.json().then(data => {
                setTodolist(data)
            })
        })
    }

    useEffect(() => {
        fetchTodos()
    }, [])

    async function addNewtodo() {
        if (!newTodo.trim()) return
        await addTodos(newTodo)
        setNewtodo("")
        fetchTodos()
    }

    async function deleteTodo(id) {
        await deleteTodos(id)
        fetchTodos()
    }

    async function handleUpdateTodo(id, completed) {
        await updateTodos(id, completed)
        fetchTodos()
    }

    const completedCount = todolist.filter(todo => todo.completed).length
    const pendingCount = todolist.length - completedCount

    return (
        <div className="min-h-screen bg-slate-100 flex">
            <aside className="w-64 bg-white border-r border-slate-200 p-6">
                <h1 className="text-2xl font-bold text-blue-600">
                    TaskFlow
                </h1>

                <p className="text-sm text-slate-500 mt-1">
                    Personal productivity dashboard
                </p>

                <nav className="mt-10 space-y-3">
                    <div className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg font-medium">
                        My Tasks
                    </div>
                    <div className="text-slate-500 px-4 py-2 rounded-lg hover:bg-slate-50">
                        Completed
                    </div>
                    <div className="text-slate-500 px-4 py-2 rounded-lg hover:bg-slate-50">
                        Settings
                    </div>
                </nav>
            </aside>

            <main className="flex-1 p-10">
                <div className="flex justify-between items-start mb-8">
                    <div>
                        <h2 className="text-4xl font-bold text-slate-800">
                            My Tasks
                        </h2>
                        <p className="text-slate-500 mt-2">
                            Manage your daily workflow and track progress.
                        </p>
                    </div>

                    <button className="bg-white border border-slate-200 text-slate-600 px-4 py-2 rounded-lg shadow-sm hover:bg-slate-50">
                        Logout
                    </button>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
                        <p className="text-sm text-slate-500">Total Tasks</p>
                        <p className="text-3xl font-bold text-slate-800 mt-2">
                            {todolist.length}
                        </p>
                    </div>

                    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
                        <p className="text-sm text-slate-500">Pending</p>
                        <p className="text-3xl font-bold text-yellow-600 mt-2">
                            {pendingCount}
                        </p>
                    </div>

                    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
                        <p className="text-sm text-slate-500">Completed</p>
                        <p className="text-3xl font-bold text-green-600 mt-2">
                            {completedCount}
                        </p>
                    </div>
                </div>

                <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h3 className="text-xl font-semibold text-slate-800">
                                Task List
                            </h3>
                            <p className="text-sm text-slate-500">
                                Create, update, and complete your tasks.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-3 mb-6">
                        <input
                            className="flex-1 border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Add a new task..."
                            value={newTodo}
                            onChange={(e) => setNewtodo(e.target.value)}
                        />

                        <button
                            className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
                            onClick={addNewtodo}
                        >
                            Add Task
                        </button>
                    </div>

                    <div className="space-y-3">
                        {todolist.map(todo => (
                            <div
                                key={todo.id}
                                className="flex items-center justify-between border border-slate-200 rounded-xl p-4 hover:bg-slate-50 transition"
                            >
                                <div className="flex items-center gap-4">
                                    <input
                                        type="checkbox"
                                        checked={todo.completed}
                                        onChange={() => handleUpdateTodo(todo.id, !todo.completed)}
                                        className="w-4 h-4"
                                    />

                                    <div>
                                        <p className={`font-medium ${todo.completed ? "text-slate-400 line-through" : "text-slate-800"}`}>
                                            {todo.title}
                                        </p>

                                        <span className={`text-xs px-2 py-1 rounded-full ${
                                            todo.completed
                                                ? "bg-green-100 text-green-700"
                                                : "bg-yellow-100 text-yellow-700"
                                        }`}>
                                            {todo.completed ? "Completed" : "Pending"}
                                        </span>
                                    </div>
                                </div>

                                <button
                                    className="text-red-500 hover:text-red-700 font-medium"
                                    onClick={() => deleteTodo(todo.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    )
}

export default TodoPage