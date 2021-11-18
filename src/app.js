const todoBoxes = document.getElementsByClassName("TodoBoxes")[0]
const todoInput = document.getElementsByClassName("create-todo")[0]

const arr = [
    {
        name: "varzesh",
        done: true,
    }
    ,
    {
        name: "tamrin",
        done: true,
    }
    ,
    {
        name: "motaalea",
        done: false,
    }
]
todoInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        handleInput(event)
        event.target.value = ""
    }
})

function buildTodo(obj) {
    return (`
        <div class="TodoBox">
            <div class="circle" onclick="checked('${obj.name}')">
            <img class="icon-done" src="../res/image/icon-done.svg">
            </div>
            <p>${obj.name}</p>
        </div>
        `)
}

const generateList = (arrInfo) => {
    return (arrInfo.map((item) => {
            console.log(item['done'])
            if (item['done']) {
                document.getElementsByClassName("circle")[0].classList.add('background: linear-gradient(to right, #55DDFF, #C058F3)')
                return (buildTodo(item))
            } else {
                document.getElementsByClassName("circle")[0].classList.remove('background: linear-gradient(to right, #55DDFF, #C058F3)')
                return (buildTodo(item))
            }

        }).join(" ")
    )
}

todoBoxes.innerHTML = generateList(arr);

const handleInput = (event) => {
    let obj = {name: "", done: false}
    obj.name = event.target.value;
    return (
        arr.push(obj),
            todoBoxes.innerHTML = generateList(arr)
    )

}

function checked(todoName) {
    for (let item of arr) {
        if (item['name'] === todoName) {
            item['done'] ? item['done'] = false : item['done'] = true
        }
    }


}