const button = document.querySelector('.button-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-task')

let itemList = []

function addNewTask() {
    if (input.value.trim() === '') {
        AlertEmpty()
        return
    }

    itemList.push({
        tarefa: input.value,
        concluida: false,
    })

    input.value = ''

    showTask()
}

function showTask() {
    let newLi = ''

    itemList.forEach((item, position) => {
        newLi += `
        <li class="task ${item.concluida && 'done'}">
            <img src="./img/check.png" alt="Check-Tarefa" onclick="checkTask(${position})">  
            <p>${item.tarefa}</p>
            <img src="./img/trash.png" alt="Delete-Tarefa" onclick="deleItem(${position})">  
         </li>
         `
    })
    listaCompleta.innerHTML = newLi

    localStorage.setItem('list', JSON.stringify(itemList))
}

function checkTask(position) {
    itemList[position].concluida = !itemList[position].concluida

    showTask()
}

function deleItem(position) {
    itemList.splice(position, 1)

    showTask()
}

function reloadTask() {
    const taskLocalStorage = localStorage.getItem('list')

    if (taskLocalStorage) {
        itemList = JSON.parse(taskLocalStorage)
    }
    showTask()
}

function AlertEmpty() {
    swal({
        title: "Tarefa Vazia!",
    });

}

reloadTask()
button.addEventListener('click', addNewTask)
