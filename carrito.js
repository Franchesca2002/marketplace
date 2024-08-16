let cartItems = [];


function addToCart(productName, price) {
    const products = { name: productName, price: price };
    cartItems.push(products);
    updateCart();
}


function removeFromCart(index) {
    cartItems.splice(index, 1);
    updateCart();
}


function updateCart() {
    const cartList = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartList.innerHTML = '';
    
    let total = 0;
    
    cartItems.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        
       
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Eliminar';
        removeButton.style.marginLeft = '10px';
        removeButton.onclick = () => removeFromCart(index);
        
        listItem.appendChild(removeButton);
        cartList.appendChild(listItem);
        
        total += item.price;
    });
    
    cartTotal.textContent = total.toFixed(2);
    
    
    document.getElementById('cart-count').textContent = cartItems.length;
}