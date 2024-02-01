document.addEventListener("DOMContentLoaded", function() {
    // Array of products with details
    const products = [
        { id: 1, name: "Product 1", description: "This is a placeholder description for Product 1.", amazonLink: "https://www.amazon.com/product1", flipkartLink: "https://www.flipkart.com/product1" },
        // Add more products with similar structure
        // { id: 2, name: "Product 2", description: "Description for Product 2", amazonLink: "https://www.amazon.com/product2", flipkartLink: "https://www.flipkart.com/product2" },
        // ...
    ];

    // Function to generate HTML for each product
    function generateProductHTML(product) {
        return `
            <div class="product" id="product${product.id}">
                <img src="placeholder.png" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Description: ${product.description}</p>
                <a href="${product.amazonLink}" target="_blank">Buy on Amazon</a>
                <a href="${product.flipkartLink}" target="_blank">Buy on Flipkart</a>
            </div>
        `;
    }

    // Function to render products in the catalog section
    function renderProducts() {
        const catalogSection = document.getElementById("catalog");

        // Loop through each product and append its HTML to the catalog section
        products.forEach(product => {
            const productHTML = generateProductHTML(product);
            catalogSection.innerHTML += productHTML;
        });
    }

    // Call the renderProducts function to display products on page load
    renderProducts();
});

function changeColor(color, productId) {
    document.getElementById(productId).style.backgroundColor = color;
}

function submitForm() {
    // You can add the logic to handle form submission (e.g., send data to server) here
    alert("Form submitted successfully!");
}

