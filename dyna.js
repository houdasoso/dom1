document.addEventListener("DOMContentLoaded", () => {
    // Select all product cards
    const productCards = document.querySelectorAll(".card-body");

    productCards.forEach((card) => {
        const quantityDisplay = card.querySelector(".quantity");
        const decreaseBtn = card.querySelector(".fa-minus-circle");
        const increaseBtn = card.querySelector(".fa-plus-circle");
        const trashBtn = card.querySelector(".fa-trash-alt"); // Select trash icon
        const productCards = document.querySelectorAll(".card-body");
        const unitPrice = parseInt(card.querySelector(".unit-price").textContent);
        let quantity = 0;

        productCards.forEach((card) => {
            const heartBtn = card.querySelector(".fa-heart"); // Select heart icon
    
            heartBtn.addEventListener("click", () => {
                // Toggle color between red and black
                if (heartBtn.style.color === "black") {
                    heartBtn.style.color = "red";
                } else {
                    heartBtn.style.color = "black";
                }
            });
        });
        function updateQuantity() {
            quantityDisplay.textContent = quantity;
            decreaseBtn.style.opacity = quantity === 0 ? "0.5" : "1";
            updateTotalPrice();
        }

        function updateTotalPrice() {
            let total = 0;
            document.querySelectorAll(".card-body").forEach((card) => {
                let qty = parseInt(card.querySelector(".quantity").textContent);
                let price = parseInt(card.querySelector(".unit-price").textContent);
                total += qty * price;
            });
            document.querySelector(".total").textContent = total + " $";
        }

        increaseBtn.addEventListener("click", () => {
            quantity++;
            updateQuantity();
        });

        decreaseBtn.addEventListener("click", () => {
            if (quantity > 0) {
                quantity--;
                updateQuantity();
            }
        });

        // Remove product when clicking the trash icon
        trashBtn.addEventListener("click", () => {
            card.remove();
            updateTotalPrice(); // Update total price after removing item
        });

        updateQuantity();
    });
});
