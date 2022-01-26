var viewCartButton = document.getElementsByClassName('view-cart')[0];
var shoppingCart = document.getElementsByClassName('shopping-cart')[0];

// viewCartButton.addEventListener('click', function () {
//   if (shoppingCart.style.display === '') {
//     shoppingCart.style.display = 'block';
//   } else {
//     shoppingCart.style.display = '';
//   }
// });

viewCartButton.addEventListener('click', function () {
  if (shoppingCart.className.indexOf('show') === -1) {
    shoppingCart.className += ' show';
  } else {
    shoppingCart.className = 'shopping-cart';
  }
});