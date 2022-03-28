let inputString = document.getElementById("tshirt-text");
let inputStringPreview = document.getElementById("tshirt-preview");
let text = "";

function tshirtLogo() {
    inputStringPreview.innerHTML = inputString.value;
    text = inputString.value;
    
    const errorMsg = document.getElementById("tshirt-text-help");
    if (text.length > 20) {
        inputString.setAttribute("class", "form-control is-invalid");
        errorMsg.setAttribute("class", "form-text error-message");
    }
    else {
        inputString.setAttribute("class", "form-control");
        errorMsg.setAttribute("class", "form-text");
    }
}
inputString.addEventListener("input", tshirtLogo);
console.log(inputString);

let selectElement = document.getElementById("tshirt-font");

selectElement.addEventListener('change', e => {
    inputStringPreview.style.fontFamily = selectElement.value;
});

let inputStringSize = document.getElementById("tshirt-font-size")

inputStringSize.addEventListener("input", e => {
    inputStringPreview.style.fontSize = inputStringSize.value + "px";
});

let inputStringColor = document.getElementsByClassName("tshirt-color");
let selectedBox = 0;
for (let i = 0; i < inputStringColor.length; i++) {
    inputStringColor[i].style.cursor = "pointer";
    inputStringColor[i].addEventListener('click', () => {
        inputStringColor[selectedBox].classList.remove("selected");
        selectedBox = i;
        inputStringColor[selectedBox].classList.add("selected");
        inputStringPreview.style.color = inputStringColor[i].getAttribute("data-color");
    })
}

let form = document.getElementById("tshirt-form");
let errorMessage = document.getElementsByClassName("error-message")[0];
let basePrice = 20.0, baseTax = 0.80, numberOfItem = 0;
let subTotal = 0, tax = 0, total = 0;

// Cart Information
let cartMessage = document.getElementById("cart-message");
let eleCartItem = document.getElementsByClassName("cart-item")[0];
let qty = document.getElementById("qty");
let eleSuTotal = document.getElementById("subtotal");
let eleTax = document.getElementById("tax");
let eleTotal = document.getElementById("total");
// ###############

function calculateCart() {
    numberOfItem++;
    subTotal = basePrice * numberOfItem;
    tax = baseTax * numberOfItem;
    total = subTotal + tax;
}
function addCartValidation(e) {
    e.preventDefault();
    if (text == "") {
        errorMessage.innerHTML = "Text is required";
        inputString.setAttribute("class", "form-control is-invalid");
        return 0;
    }
    else if (text.length > 20) {
        errorMessage.innerHTML = "Text cannot be longer than 20 characters";
        return 0;
    }
    else
        errorMessage.innerHTML = "";
    return 1;
}
function showToCart() {
    cartMessage.setAttribute("class", "hide");
    eleCartItem.setAttribute("class", "cart-item");
    qty.innerHTML = numberOfItem;
    eleSuTotal.innerHTML = subTotal.toFixed(2);
    eleTax.innerHTML = tax.toFixed(2);
    eleTotal.innerHTML = total.toFixed(2);
}
function removeCart() {
    cartMessage.setAttribute("class", "");
    cartMessage.innerHTML = "Cart is empty"

    eleCartItem.setAttribute("class", "hide");
    qty.innerHTML = "0";
    eleSuTotal.innerHTML = "$0.00";
    eleTax.innerHTML = "$0.00";
    eleTotal.innerHTML = "$0.00";

    text = "", subTotal = 0, tax = 0, total = 0, numberOfItem = 0;
}
function addToCart(e) {
    if (addCartValidation(e)) {
        calculateCart();
        showToCart();
    }
    form.reset();
}

form.addEventListener("submit", addToCart);
document.getElementById("btn-remove").addEventListener("click", removeCart);
