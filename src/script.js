
// 1. Hämtar referenser till HTML-elementen
const productInput = document.getElementById("productInput");
const priceInput = document.getElementById("priceInput");
const addButton = document.getElementById("addButton");
const cartList = document.getElementById("cartList");

// 2. Skapar array för varukorgen
const cart = [];



function addToCart(){
    const productName = productInput.value.trim();
    const productPrice = Number(priceInput?.value);

    if (!productName || isNaN(productPrice) || productPrice <= 0) {
        console.log("Please enter correct values!");
        return;
    }

    const newProduct = {
        productName,
        productPrice,
        quantity: 1
    };

    let itemExist = false;

    for (const item of cart) {
        console.log("Сравниваем:", item.productName, "vs", productName);
        if(item.productName.trim().toLowerCase() === productName.trim().toLowerCase()) {
            console.log("Найдено совпадение!");
            item.quantity++
            itemExist = true;
        }
    }

    if(!itemExist) {
        cart.push(newProduct);
    }

    productInput.value = "";
    priceInput.value = "";

    console.log(cart);
    renderCart()
}

// 3. Funktion för att rendera varukorgens innehåll
function renderCart() {
  // Rensar först listan
  cartList.innerHTML = "";

  // Loopa igenom cart och lägg till varje produkt i listan
  for (const item of cart) {
    const li = document.createElement("li");
    li.textContent = `${item.productName} - ${item.productPrice} kr (Antal: ${item.quantity})`;
    cartList.appendChild(li);
  }
}

// 4. Funktion som körs när användaren klickar på knappen
addButton.addEventListener("click", addToCart)