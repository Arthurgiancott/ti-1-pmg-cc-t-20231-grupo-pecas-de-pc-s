let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Placa de Vídeo GTX 1650 PNY NVIDIA GeForce Single Fan, 4 GB GDDR5  ',
        image: '1.JPG',
        price: 1199
    },
    {
        id: 2,
        name: 'Placa de Vídeo RX 6750 XT Mech 2X 12G OC MSI AMD, 12 GB GDDR6',
        image: '2.JPG',
        price: 3299
    },
    {
        id: 3,
        name: 'Placa-mãe Intel® Z690 (LGA 1700) ATX com PCIe® 5.0',
        image: '3.JPG',
        price: 1360
    },
    {
        id: 4,
        name: 'PC Gamer Acer Predator Orion 5000 Intel Core i7-11700, RGB, NVIDIA GeForce RTX3070, 16GB RAM, SSD 1TB, Windows 11 Home, Preto',
        image: '4.JPG',
        price: 22599
    },
    {
        id: 5,
        name: 'PC Gamer Tertz Loyalty, Intel Core i7 13700kf, 32GB DDR5, RTX 4080, 1TB, Windows 10 Trial',
        image: '5.JPG', 
        price: 20999
    },
    {
        id: 6,
        name: 'Water Cooler Cooler Master Masterliquid ML360 Illusion, Para Processador - MLX-D36M-A18P2-R1',
        image: '6.JPG',
        price: 1699
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Adicionar ao carrinho</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
    
}