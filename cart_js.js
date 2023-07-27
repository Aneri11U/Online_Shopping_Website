

let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCart = document.querySelector('.listCart');
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
        name: 'HP Laptop',
        image: '1.webp',
        price:  29990
    },
    {
        id: 2,
        name: 'Lenovo Laptop',
        image: '2.jpg',
        price: 33990
    },
    {
        id: 3,
        name: 'Dell Laptop',
        image: '3.jpg',
        price: 56990
    },
    {
        id: 4,
        name: 'ASUS Laptop',
        image: '4.jpg',
        price: 40990
    },
    {
        id: 5,
        name: 'HP Pavilion',
        image: 'shopping1.webp',
        price:  80000
    },
    {
        id: 6,
        name: 'Lenovo yoga slim',
        image: 'shopping2.webp',
        price:  120000
    },
{
        id: 7,
        name: 'Lenove ideapad',
        image: 'ideapad.jpg',
        price:  65000
    },
{
        id: 8,
        name: 'Galaxy Book',
        image: 'galaxy.webp',
        price: 135000
    },
{
        id: 9,
        name: 'ASUS Book',
        image: 'asus1.jpg',
        price:  75000
    },{
        id: 10,
        name: 'MacBook',
        image: 'mac.webp',
        price:  140000
    },
];

let listCarts  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}&#8377;</div>
            <button onclick="addToCart(${key}) ">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCart(key){
    if(listCarts[key] == null){
        // copy product form list to list Cart
        listCarts[key] = JSON.parse(JSON.stringify(products[key]));
        listCarts[key].quantity = 1;
    }
    reloadCart();
}
function reloadCart(){
    listCart.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCarts.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}&#8377;</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCart.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCarts[key];
    }else{
        listCarts[key].quantity = quantity;
        listCarts[key].price = quantity * products[key].price;
    }
    reloadCart();
}
function clearAll(){
   listCarts.length=0;
}