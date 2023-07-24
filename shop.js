//  Reference - https://www.youtube.com/watch?v=Gnh-9IH6BEc

// cart open close
let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('.close-cart');
//for the checkout
let payNow =document.querySelector('.checkout');
let CheckoutForm= document.querySelector('.big-form')
let exitNow=document.querySelector('.exit')
//open cart
let shopContent = document.querySelectorAll(".product-box")
payNow.onclick=()=>{
    CheckoutForm.style.opacity = 1;
    CheckoutForm.style.pointerEvents = "auto";
    shopContent.forEach(item => {
        item.style.pointerEvents = "none";
      });
};

function closeCheckOut(){
    CheckoutForm.style.opacity = 0;
    CheckoutForm.style.pointerEvents = "none";
    shopContent.forEach(item => {
        item.style.pointerEvents = "auto";
      });
}

cartIcon.onclick = () => {
    cart.classList.add('active');
};
// close cart
closeCart.onclick = () => {
    cart.classList.remove('active');
};

// making add to cart
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

//making function

function ready() {
    //remove item from cart
    var removeCartButton = document.getElementsByClassName('cart-remove');
    for (var i = 0; i < removeCartButton.length; i++) {
        var button = removeCartButton[i];
        button.addEventListener("click", removeCartItem);

    }
    //quantity change
    var quantityInput = document.getElementsByClassName("cart-quantity");
    for (var i = 0; i < quantityInput.length; i++) {
        var input = quantityInput[i];
        input.addEventListener("change", quantityChanged);
    }
    // Add to Cart
    var addCart = document.getElementsByClassName("add-to-cart");
    for (var i = 0; i < addCart.length; i++) {
        var button = addCart[i];
        button.addEventListener("click", addCartClicked);
    }




}




// quantity change - function (in cart increase quantity and reduce)
function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateTotal();
    updateCartIcon();
}

// remove cart item
function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateTotal();
}

// Add Cart Function
//checkig and selecting items in the cart


function addCartClicked(event) {
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price = shopProducts.getElementsByClassName("product-price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
    addProductToCart(title, price, productImg);
    updateTotal();
    updateCartIcon();
}
function addProductToCart(title, price, productImg) {
    var cartShopBox = document.createElement('div');
    cartShopBox.classList.add("cart-box");
    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
    for (var i = 0; i < cartItemsNames.length; i++) {
        if (cartItemsNames[i].innerText == title) {
            alert("Already  Selected please ,increase in the cart ");
            return;
        }
    }

//printing in the cart
    var cartBoxContent = `  
     <img src=${productImg} width="100px"alt="" class="cart-img">
    <div class="details-box">
      <div class="cart-product-title ">${title}</div>
      <div class="cart-price">${price}</div>
      <input type="number" name="" id="" value="1" class="cart-quantity">
    </div>
    <!-- remove item -->
    <i class='bx bxs-trash-alt cart-remove' ></i>` ;

    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);
    cartShopBox
        .getElementsByClassName("cart-remove")[0]
        .addEventListener("click", removeCartItem);
    cartShopBox
        .getElementsByClassName("cart-quantity")[0]
        .addEventListener("change", quantityChanged);
    updateCartIcon();
}






function updateTotal() {
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = cartContent.getElementsByClassName('cart-box');
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        var price = parseFloat(priceElement.innerText.replace('$', ''));
        var quantity = quantityElement.value;
        total += price * quantity;
    }

    var totalElement = document.getElementsByClassName('total-price')[0];
    var  totalElements =document.getElementsByClassName('total-price-final')[0];
    if (total === 0 && cartBoxes.length === 0) {
        totalElement.innerText = '$ 0';
        totalElements.innerHTML='Your Total is $0';
    } else {
        totalElement.innerText = '$ ' + total;
        totalElements.innerHTML='Your Total is: $'+ total;
    }
   
}
// quantity in cart icon
function updateCartIcon() {
    var cartBoxes = document.getElementsByClassName('cart-box');
    var quantity = 0;

    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        quantity += parseInt(quantityElement.value);
    }
    var cartIcon = document.querySelector("#cart-icon");
    cartIcon.setAttribute("data-quantity", quantity);
}


window.addEventListener('scroll', function() {
    CheckoutForm.style.top = (window.scrollY + 165) + 'px';
  });


function validatingForm(){
//getting inputs from fields
        let name =document.getElementsById("c-name").value;
        let email =document.getElementsById("email").value;
        let address =document.getElementsById("address").value;
        let city =document.getElementsById("city").value;
        let state =document.getElementsById("state").value;
        let zip =document.getElementsById("Zip").value;
        let nameOncard=document.getElementById("name-on-card").value;
        let cardnumber=document.getElementById("expdate").value;
        let cvv= document.getElementById("cvv").value;
        let checkout=document.getElementById("Term-and-Condition").checked


if(
    name === ""||
    email ===""||
    address ===""||
    city ===""||
    state ===""||
    zip ===""||
    nameOncard===""||
    cardnumber ===""||
    cvv ===""||
    checkout !== checked
    

){alert("Please fill all the fields with currect values !!")}
else{
    alert("Payment is Succesfull")
}

  }