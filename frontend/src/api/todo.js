async function getTodos(){
    const token = localStorage.getItem("token")
    const url = "http://localhost:8080/todo"


    return await fetch(url,{
        method:"GET",
        headers: {"Authorization": "Bearer " + token}
    })

}

async function addTodos(title){
    const token = localStorage.getItem("token")
    const url = "http://localhost:8080/todo"

    return await fetch(url,{
        method:"POST",
        headers: {"Authorization": "Bearer " + token, "Content-Type": "application/json"},
        body:JSON.stringify({title})

    })
}

async function deleteTodos(id){
    const token = localStorage.getItem("token")
    const url = "http://localhost:8080/todo/" + id

    return await fetch(url,{
        method:"DELETE",
        headers: {"Authorization": "Bearer " + token},

    })
}

async function updateTodos(id,completed){
    const token = localStorage.getItem("token")
    const url = "http://localhost:8080/todo/"

    return await fetch(url,{
        method:"PUT",
        headers: {"Authorization": "Bearer " + token,
            "Content-Type": "application/json"
        },
        body:JSON.stringify({id,completed})

    })
}

export {getTodos,addTodos,deleteTodos,updateTodos}