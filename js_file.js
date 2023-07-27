var fin = 0;
var a = false;

function alphapress(){
    console.log(event);
    if((event.keyCode>=65 && event.keyCode<=90) || event.keyCode==8){
        // fin= fin + 1;
        return true;
    }
    else
    {
        event.preventDefault();
        return false;
    }
}		

function checkname(){
    if(f.uname.value==""){
        ename.innerText="Please enter the name!!"
        ename.style.color='red';
    }
    else{
        ename.innerText="";
        fin= fin + 1;
        event.preventDefault();
    }
}		

// function checkadd(){
		// 	if(f.uaddress.value==""){
		// 		add.innerText="Please enter the address!!"
		// 		add.style.color='red';
		// 	}
		// 	else{
		// 		fin= fin + 1;
		// 		event.preventDefault();
		// 	}
// }       

function checkuid(){
    if(f.uid.value==""){
        user.innerText="Please enter the user id!!"
        user.style.color='red';
    }
    else{
        user.innerText="";
        fin= fin + 1;
        event.preventDefault();
    }
}        

function checkemail(){
    pattern = /\d{2}[aA-zZ]{3}\d{3}@nirmauni\.ac\.in$/;
    str = f.email.value;
    console.log(str.match(pattern));
    if (str.search(pattern)!=0){
        e.innerText="Error! Enter email again";
        e.style.color='red';
    }
    else{
        e.innerText="";
        fin= fin + 1;
    }
}		

function checkpassword(){
    if(f.upassword.value==""){
        pass2.innerText="Please enter the password!!";
        pass2.style.color='red';
    }
    else if(f.upassword.value != f.urepassword.value){
        pass2.innerText="Error! Password does not match";
        pass2.style.color='red';
    }
    else{
        pass2.innerText="Password matched";
        pass2.style.color='aqua';
        fin= fin + 1;
    }
}		

function checkpassword2(){
    pattern=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}/;
    str = f.upassword.value;
    console.log(str.match(pattern));
    if(str.search(pattern)!=0){
        pass1.innerText = "Error! Enter password again";
        pass1.style.color='red';
    }
    else{
        fin= fin + 1;
        pass1.innerText = "";
    }
}		

function check_number(){
    pattern=/(\d{3}(\s|-)\d{3}(\s|-)\d{4})$|(\d{10})$/;
    str=f.number.value;
    console.log(str.match(pattern));
    if(str.search(pattern)!=0){
        p.innerText = "Error! Enter number again";
        p.style.color='red';
    }
    else{
        fin = fin + 1;
        p.innerText = "";
    }
}		
// var p=false;
function Say(){
	if(fin==6){
        // p=true;
		ch=confirm("Confirm??");
        if(ch==true){
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            alert('Signup successful!');
            location.replace("file:///C:/Users/Aneri%20Thakkar/Desktop/WT_prac9/prac9.html");
            return ch;
        }
        
        // return ch;
        return false;
        // return true;

	}

	else{
		alert("Please enter all the required details!!");
		flag = true;

		if (f.uname.value == ""){
			ename.innerHTML = "*Please enter name";
			ename.style.color='red';
			flag = false;
		}
		else{
			ename.innerHTML="";
		}

                // if (f.uaddress.value == ""){
				// 	add.innerHTML = "**Please enter address";
				// 	add.style.color='red';
				// 	flag = false;
				// }
				// else{
				// 	add.innerHTML="";
				// }

        if (f.uid.value == ""){
			user.innerHTML = "*Please enter user id";
			user.style.color='red';
			flag = false;
		}
		else{
			user.innerHTML="";
		}
    	if (f.email.value == ""){
        	e.innerHTML = "*Please enter email id";
			e.style.color='red';
        	flag = false;
       	}
       	else {
      		e.innerHTML = "";
    	}
		if (f.number.value == ""){
        	p.innerHTML = "*Please enter phone number";
			p.style.color='red';
            flag = false;
       	}
       	else{
      	    p.innerHTML = "";
    	}
		if (f.upassword.value == ""){
        	pass1.innerHTML = "*Please enter password";
			pass1.style.color='red';
        	flag = false;
       	}
       	else{
      		pass1.innerHTML = "";
    	}
	    if (f.urepassword.value == ""){
        	pass2.innerHTML = "*Please enter repassword";
		    pass2.style.color='red';
            flag = false;
        }
       	else{
      		pass2.innerHTML = "";
		}

	    return flag;
	}
}

var test=false;
// var t=0;
// function check_user(){
//     if(f.uname.value==""){
//         ename.innerText="Please enter the username!!"
//         ename.style.color='red';
//     }
//     else{
//         ename.innerText="";
//         // fin= fin + 1;
//         t =t +1;
//         event.preventDefault();
//     }
// }	
// function check_mail(){
//     if(f.uname.value==""){
//         ename.innerText="Please enter the mail!!"
//         ename.style.color='red';
//     }
//     else{
//         ename.innerText="";
//         // fin= fin + 1;
//         t =t +1;
//         event.preventDefault();
//     }
// }	
// function check_pass(){
//     if(f.uname.value==""){
//         ename.innerText="Please enter the password!!"
//         ename.style.color='red';
//     }
//     else{
//         ename.innerText="";
//         // fin= fin + 1;
//         t =t +1;
//         event.preventDefault();
//     }
// }	
function check(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
      alert('Login successful!');
      location.replace("shop.html");
      return true;
    //   location.replace("prac9.html");
    } 
    else if(username!=storedUsername) {
        test=false;
        alert('user not exist');
        return false;
    }
    else{
        test=false;
        alert('Invalid password');
        return false;
    }

};

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
            <button onclick="addToCart(${key})">Add To Cart</button>`;
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
