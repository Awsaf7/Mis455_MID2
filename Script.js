function showMessage() {
  alert("Thank you for visiting Kitty Pure! We sell the best cat litter, dry food, and wet food for your cat.");
}

var cartTotal = 0;
var cartItems = "";

function addToCart(productName, price) {
  cartTotal = cartTotal + price;
  cartItems = cartItems + productName + " - " + price + " Tk\n";

  document.getElementById("basketItems").innerText = cartItems;
  document.getElementById("basketTotal").innerText = "Total: " + cartTotal + " Tk";

  alert(productName + " has been added to your basket!");
}

function clearCart() {
  cartTotal = 0;
  cartItems = "";
  document.getElementById("basketItems").innerText = "No items added yet.";
  document.getElementById("basketTotal").innerText = "Total: 0 Tk";
}

function contactInfo() {
  alert("You can reach us at 01698742692. Visit us at Gulshan 2, Road 108, House 70.");
}