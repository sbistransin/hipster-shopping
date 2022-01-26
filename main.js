var viewCartButton = document.getElementsByClassName('view-cart')[0];
var shoppingCart = document.getElementsByClassName('shopping-cart')[0];
var products = document.getElementsByClassName('products')[0];
var buyButtons = document.getElementsByClassName('add-to-cart');


// my first attempt
// viewCartButton.addEventListener('click', function () {
//   if (shoppingCart.style.display === '') {
//     shoppingCart.style.display = 'block';
//   } else {
//     shoppingCart.style.display = '';
//   }
// });

// shopping cart listener
viewCartButton.addEventListener('click', function () {
  if (shoppingCart.className.indexOf('show') === -1) {
    shoppingCart.className += ' show';
  } else {
    shoppingCart.className = 'shopping-cart';
  }
});

// add to cart listener
products.addEventListener('click', function (e) {
  if (e.target.classList.contains("add-to-cart")) {
    console.log("click button");
  }
});