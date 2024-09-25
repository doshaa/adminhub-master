// Sample food product data
const foodProducts = [
    { id: 1, name: 'Pizza', price: 10, image: '🍕' },
    { id: 2, name: 'Burger', price: 8, image: '🍔' },
    { id: 3, name: 'Sushi', price: 12, image: '🍣' },
    { id: 4, name: 'Ice Cream', price: 5, image: '🍨' }
  ];
  
  // Cart array to store added products
  let cart = [];
  
  // Display food products dynamically
  const productList = document.getElementById('product-list');
  
  foodProducts.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    
    productDiv.innerHTML = `
      <h3>${product.image} ${product.name}</h3>
      <p>Price: $${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    
    productList.appendChild(productDiv);
  });
  
  // Function to add products to the cart
  function addToCart(productId) {
    const product = foodProducts.find(p => p.id === productId);
    cart.push(product);
    renderCart();
  }
  
  // Function to render the cart and calculate the total price
  function renderCart() {
    const cartItems = document.querySelector('.cart-items');
    const totalElement = document.querySelector('.total');
    cartItems.innerHTML = '';
    let total = 0;
  
    cart.forEach((item, index) => {
      const cartItem = document.createElement('li');
      cartItem.textContent = `${item.image} ${item.name} - $${item.price}`;
      
      // Button to remove item from cart
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.onclick = () => removeFromCart(index);
      
      cartItem.appendChild(removeButton);
      cartItems.appendChild(cartItem);
      
      total += item.price;
    });
  
    totalElement.textContent = `Total: $${total}`;
  }
  
  // Function to remove products from the cart
  function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
  }
  
  // Checkout logic
  const checkoutButton = document.getElementById('checkout-button');
  checkoutButton.onclick = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
    } else {
      alert('Checkout successful!');
      cart = [];
      renderCart();
    }
  };
  
// const arryData = [
//   { name: "drinks", url: "img/burger.jpg" },
//   { name: "burger", url: "img/burger.jpg" },
//   { name: "drinks", url: "img/burger.jpg" },
//   { name: "pizza", url: "img/burger.jpg" },
//   { name: "wok", url: "img/burger.jpg" },
//   { name: "pasta", url: "img/burger.jpg" },
// ];


    


// arryData.forEach((element) => {
//     const div = document.getElementById("Dashboard-data");
//     div.innerHTML += `
//     <div class="col-4">
//                           <div class="card shadow bordered" style="width: 15rem; ">
//                               <img src="${element.url}" class="card-img-top" alt="...">
//                               <div class="card-body">
//                                   <h5 class="card-title text-center p-2">${element.name}</h5>
  
//                               </div>
//                           </div>
//                       </div>
//     `;
    

// });
// document.getElementById('list-food') = addEventListener('click', removeData);
// function removeData(){
//     arryData =[];

 
        
// }


