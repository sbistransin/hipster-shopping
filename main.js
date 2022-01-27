var viewCartButton = document.getElementsByClassName('view-cart')[0];
var shoppingCart = document.getElementsByClassName('shopping-cart')[0];
var products = document.getElementsByClassName('products')[0];
var clearCartButton = document.getElementsByClassName('clear-cart')[0];

var cart = [];
var total = 0;

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
  if (e.target.classList.contains('add-to-cart')) {
    var itemName = e.target.closest('.item')
      .getAttribute('data-name');

    var itemPrice = e.target.closest('.item')
      .getAttribute('data-price');

    var product = {
      name: itemName,
      price: itemPrice
    };

    cart.push(product);

    renderHTML();
    
  }
});


var renderHTML = function() {
  var cartList = document.getElementsByClassName('cart-list')[0];
  cartList.innerHTML = '';
  var items = '';
  var total = 0;

  for (let i = 0; i < cart.length; i++) {
    items += '<div>' + cart[i].name + " - $" + cart[i].price + '</div>';
    total += Number.parseInt(cart[i].price);
    document.getElementsByClassName('total')[0].innerHTML = total;
  }

  cartList.innerHTML = items;
  
};


// add clear cart listener
clearCartButton.addEventListener('click', function(e) {
  
  cart = [];
  var cartList = document.getElementsByClassName('cart-list')[0];
  cartList.innerHTML = '';
  
  var total = document.getElementsByClassName('total')[0].innerHTML = 0;
  
  
})

