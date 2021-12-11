const setName = data => {

    const comments = a => `<p class='comment'>Comments: ${a.body}</p>`
    var posts = data.map(a => `<p>Name: ${a.name}</p>${comments(a)}`).join('<div class="line"></div>')


    document.querySelector('.data').innerHTML += posts

}

async function getUsers() {
    try {
        const response = await fetch('http://localhost:1234/')
        const data = await response.json()
        setName(data)

    } catch (error) {
        console.error(error)
    }

}


getUsers()