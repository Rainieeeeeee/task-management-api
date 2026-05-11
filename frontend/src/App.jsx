import { BrowserRouter } from "react-router-dom"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import TodoPage from "./pages/TodoPage"
import { Navigate } from "react-router-dom"

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Navigate to = "/login" />} />
        <Route path = "/login" element = {<LoginPage />} />
        <Route path = "/todos" element = {<TodoPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
