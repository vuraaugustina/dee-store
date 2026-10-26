//grab the html elements

const productContainer = document.querySelector(".product-container");
const cartBtn = document.getElementById("cart-btn");
const modalElem = document.getElementById("cart-modal");
const cartCountElem = document.getElementById("cart-count");

async function fetchProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const productsArray = await response.json();
        console.log(productsArray);
        displayFetchedProducts(productsArray);
    } catch (error) {
        console.error("Error fetching products:", error);
        productContainer.innerHTML = "<p>Failed to load products..</p>"
    }
}

function displayFetchedProducts(products) {
    const productCard = products.map((product) => {
        return `
        <div class = "product-card">
        <img src = "${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>${product.description.slice(0,100)}</p>
        <p class = "price">$${product.price}</p>
        </div>
         `
    }).join("");
    productContainer.innerHTML = productCard;
}
document.addEventListener("DOMContentLoaded", fetchProducts);