async function login(username, password){
    const url = "http://localhost:8080/user/login"

    return await fetch(url,{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body:JSON.stringify({username, password})

    })
}

async function register(username, password){
    const url = "http://localhost:8080/user/register"

    return await fetch(url,{
        method:"POST",
        headers: {"Content-Type": "application/json"},
        body:JSON.stringify({username, password})
    })

}

export {login,register}