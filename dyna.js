document.addEventListener("DOMContentLoaded", () => {
    const totalDisplay = document.querySelector(".total");

    function updateTotalPrice() {
        let total = 0;
        document.querySelectorAll(".list-products > .card-body").forEach((card) => {
            let qty = parseInt(card.querySelector(".quantity").textContent);
            let price = parseInt(card.querySelector(".unit-price").textContent);
            total += qty * price;
        });
        totalDisplay.textContent = total + " $"; 
    }

    document.querySelectorAll(".list-products > .card-body").forEach((card) => {
        const quantityDisplay = card.querySelector(".quantity");
        const decreaseBtn = card.querySelector(".fa-minus-circle");
        const increaseBtn = card.querySelector(".fa-plus-circle");
        const trashBtn = card.querySelector(".fa-trash-alt");
        const heartBtn = card.querySelector(".fa-heart");
        const unitPrice = parseInt(card.querySelector(".unit-price").textContent);
        let quantity = 0;

        // Toggle couleur du cœur
        heartBtn.addEventListener("click", () => {
            heartBtn.style.color = heartBtn.style.color === "black" ? "red" : "pink";
        });

        //  Mise à jour de la quantité
        function updateQuantity() {
            quantityDisplay.textContent = quantity;
            decreaseBtn.style.opacity = quantity === 0 ? "0.5" : "1"; 
            updateTotalPrice();
        }

        //  Augmenter la quantité
        increaseBtn.addEventListener("click", () => {
            quantity++; 
            updateQuantity();
        });

        //  Diminuer la quantité
        decreaseBtn.addEventListener("click", () => {
            if (quantity > 0) {
                quantity--; 
                updateQuantity();
            }
        });

        //  Supprimer uniquement le prix du total
        trashBtn.addEventListener("click", () => {
            let productTotalPrice = quantity * unitPrice;
            let currentTotal = parseInt(totalDisplay.textContent);
            let newTotal = currentTotal - productTotalPrice; 
            
            totalDisplay.textContent = newTotal + " $"; 
            quantity = 0; 
            updateQuantity(); 
        });

        updateQuantity(); 
    });
});
