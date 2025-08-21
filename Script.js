const products = [
    {name: "Produkt 1", price: "19,99€", image: "https://via.placeholder.com/150"},
    {name: "Produkt 2", price: "29,99€", image: "https://via.placeholder.com/150"},
    {name: "Produkt 3", price: "39,99€", image: "https://via.placeholder.com/150"},
];

const productList = document.getElementById("product-list");

products.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.className = "product";
    productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <button>Kaufen</button>
    `;
    productList.appendChild(productDiv);
});
