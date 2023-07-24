const menuEmail = document.querySelector('.navbar-email');
const menuEmailOculto = document.querySelector('.desktop-menu');
const menuMobileBoton = document.querySelector('.menu');
const menuMobileOculto = document.querySelector('.mobile-menu');
const carritoIcon = document.querySelector('.navbar-shopping-cart');
const carritoDetails = document.querySelector('.shopping-cart-detail');
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuMobileBoton.addEventListener('click', toggleMovilMenu);
carritoIcon.addEventListener('click', toggleCarritoDetails);

function toggleDesktopMenu() {
    menuEmailOculto.classList.toggle('inactive');
    carritoDetails.classList.add('inactive');
}
function toggleMovilMenu(){
    menuMobileOculto.classList.toggle('inactive');
    carritoDetails.classList.add('inactive');
}

function toggleCarritoDetails(){
    carritoDetails.classList.toggle('inactive');
    menuMobileOculto.classList.add('inactive');
    menuEmailOculto.classList.add('inactive');
}

//Crear lista de productos
const productList = [];
productList.push({
    name: 'Bike',
    price: 50,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Bike',
    price: 50,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Bike',
    price: 50,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Bike',
    price: 50,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Bike',
    price: 50,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Bike',
    price: 50,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const imgProduct = document.createElement('img');
        imgProduct.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = product.price + '€';
        const productName = document.createElement('p');
        productName.innerText = product.name;
        
        productInfoDiv.append(productPrice, productName);
        
    
        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCard);
    
        productInfo.append(productInfoDiv, productInfoFigure);
        
        productCard.append(imgProduct, productInfo);
      
        cardsContainer.appendChild(productCard);
     
    }
}

renderProducts(productList);