function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body:JSON.stringify({name:`${name}`, email:`${email}`})
    
    }).then(res => res.json()).then(data => {
        const displayDom = document.createElement('p')
        const idToDisplay = data["id"]
        displayDom.textContent = idToDisplay
        document.body.append(displayDom)
    }).catch(data => {
        const displayDom = document.createElement('p')
        const idToDisplay = data["message"]
        displayDom.textContent = idToDisplay
        document.body.append(displayDom)
    })
}
