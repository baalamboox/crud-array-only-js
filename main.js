const buttonAdd = document.querySelector('#add_fruit')
const fruit = document.querySelector('#fruit')
const fruitList = document.querySelector('#fruit_list')
const fruits = ['Apple', 'Higo']
const readFruits = ({ fruits }) => {
    fruitList.replaceChildren()
    fruits.map((item, index) => {
        let li = document.createElement('li')
        let buttonDelete = document.createElement('button')
        let buttonUpdate = document.createElement('button')
        li.textContent = item
        buttonDelete.textContent = 'Delete'
        buttonDelete.id = index
        buttonDelete.onclick = () => deleteFruit({ id: index })
        buttonUpdate.textContent = 'Update'
        buttonUpdate.id = index
        buttonUpdate.onclick = () => updateFruit({ id: index })
        li.appendChild(buttonDelete)
        li.appendChild(buttonUpdate)
        fruitList.appendChild(li)
    })
}
const deleteFruit = ({ id }) => {
    if (id === 0) {
        fruits.splice(id, 1)
    } else {
        fruits.splice(id, id)
    }
    readFruits({ fruits })
}
const updateFruit = ({ id }) => {
    fruits[id] = prompt('Actualizar a:', fruits[id])
    readFruits({ fruits })
}
const createFruit = () => {
    fruits.push(fruit.value)
    readFruits({ fruits })
    fruit.value = ''
}
buttonAdd.addEventListener('click', createFruit)
readFruits({ fruits })