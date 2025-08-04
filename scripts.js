const buttonShowAll = document.querySelector('.show-all')
const list = document.querySelector('ul')
const buttonMapAll = document.querySelector('.map-all')
const buttonSumAll = document.querySelector('.sum-all')
const buttonFilterAll = document.querySelector('.filter-all')

function formatCurrency(value){
    const newValue = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value)

    return newValue
}

function showAll(productArray) {
    let myLi = ''
    productArray.forEach(product => {
        myLi +=
            `<li>
                <img src=${product.src}>
                <h2>${product.name}</h2>
                <p class="item-price">${formatCurrency(product.price)}</p>
            </li>`

        list.innerHTML = myLi
    })
}

function mapAll(){
    const newPrices = menuOptions.map(product => ({
        name: product.name,
        price: product.price * 0.9,
        src: product.src,
        vegan: product.vegan
    }))

    showAll(newPrices)
}

function sumAll(){
    const sum = menuOptions.reduce((acc, value) => acc + value.price, 0)

    list.innerHTML = `O valor total
    dos itens é:
    ${formatCurrency(sum)}`
}

function filterAll(){
    const justVegan = menuOptions.filter(product => product.vegan)

    showAll(justVegan)
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAll)
buttonSumAll.addEventListener('click', sumAll)
buttonFilterAll.addEventListener('click', filterAll)