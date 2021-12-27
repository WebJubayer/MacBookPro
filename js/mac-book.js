// memory cost function 
function costCalc(cost, ExtraCost) {
    const CostText = document.getElementById(cost);
    const CostExtra = ExtraCost;
    CostText.innerText = CostExtra;
    return CostExtra;
}
// Price Update function 
function updatePrice() {
    const prevPrice = document.getElementById('price-sum');

    // new extra memory cost
    const newMemoryCost = parseFloat(document.getElementById('memory-cost').innerText);
    // new extra storage cost
    const newStorageCost = parseFloat(document.getElementById('storage-cost').innerText);
    // new extra delivery cost
    const newDeliveryCost = parseFloat(document.getElementById('delivery-charge').innerText);

    prevPrice.innerText = newMemoryCost + newStorageCost + newDeliveryCost + 1299;
    // price sum update without promocode 
    const prevPriceText = parseFloat(prevPrice.innerText);
    return prevPriceText;

}
// 8GB Memory 
document.getElementById('eightGB').addEventListener('click', function () {
    //    cost update 
    costCalc('memory-cost', 0);
    // price sum update 
    updatePrice();
    // Total Price Update 
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = updatePrice();

})


// 16 GB memory 
document.getElementById('sixteenGB').addEventListener('click', function () {
    //    cost update 
    costCalc('memory-cost', 180);
    // price sum update
    updatePrice();
    // Total Price Update
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = updatePrice();

})


// 256GB SSD 
document.getElementById('ssd1').addEventListener('click', function () {
    //    cost update 
    costCalc('storage-cost', 0);
    // price sum update
    updatePrice();
    // Total Price Update
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = updatePrice();
})
// 512GB SSD Button
document.getElementById('ssd2').addEventListener('click', function () {
    //    cost update 
    costCalc('storage-cost', 100);
    // price sum update
    updatePrice();
    // Total Price Update
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = updatePrice();
})
// 1TB SSD Button
document.getElementById('ssd3').addEventListener('click', function () {
    //    cost update 
    costCalc('storage-cost', 180);
    // price sum update
    updatePrice();
    // Total Price Update
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = updatePrice();
})
// 25 August Delivery Button
document.getElementById('free-delivery').addEventListener('click', function () {
    //    cost update 
    costCalc('delivery-charge', 0);
    // price sum update
    updatePrice();
    // Total Price Update
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = updatePrice();

})
// 25 August Delivery Button
document.getElementById('charged-delivery').addEventListener('click', function () {
    //    cost update 
    costCalc('delivery-charge', 20);
    // price sum update
    updatePrice();
    // Total Price Update
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = updatePrice();
})

// Promo code check & total price  
document.getElementById('apply-btn').addEventListener('click', function () {
    const promoInput = document.getElementById('promo-input')
    const promoInputValue = promoInput.value;
    const totalPrice = document.getElementById('total-price');
    // promo check 
    if (promoInputValue == 'stevekaku') {
        // update totalPrice 
        totalPrice.innerText = updatePrice() * 0.8;

    }
    else {
        // update totalPrice 
        totalPrice.innerText = updatePrice();
    }
    promoInput.value = '';
})



