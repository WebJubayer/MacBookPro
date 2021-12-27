const bestPrice = document.getElementById('best-price');
const memoryPrice = document.getElementById('memory-price');
const storagePrice = document.getElementById('storage-price');
const deliveryCost = document.getElementById('delivery-cost');
const totalPrice = document.getElementById('total-price')

//update total
function updatetotal(){
    const bestPrice = document.getElementById('best-price');
    const bestPriceNumber = parseFloat(bestPrice.innerText);

    const memoryPrice = document.getElementById('memory-price');
    const memoryPriceNumber = parseFloat(memoryPrice.innerText);

    const storagePrice = document.getElementById('storage-price');
    const storagePriceNumber = parseFloat(storagePrice.innerText);

    const deliveryCost = document.getElementById('delivery-cost');
    const deliveryCostNumber = parseFloat(deliveryCost.innerText);

    const totalPrice = document.getElementById('total-price');


    const totalsum = memoryPriceNumber + storagePriceNumber + deliveryCostNumber;

   totalPrice.innerText = bestPriceNumber + totalsum;
    return totalPrice.innerText;
}

document.getElementById('best-price').addEventListener('click', function(){
    updatetotal()
})

//extra momory price show
document.getElementById('memoryButton1').addEventListener('click', function(){
   memoryPrice.innerText = 0;
   updatetotal()
});
document.getElementById('memoryButton2').addEventListener('click', function(){
    memoryPrice.innerText = 180;
    updatetotal()
});
//---------extra storage price show--------------
document.getElementById('storagepricebutton1').addEventListener('click', function(){
    storagePrice.innerText = 0;
    updatetotal()
});
document.getElementById('storagepricebutton2').addEventListener('click', function(){
     storagePrice.innerText = 100;
     updatetotal()
});
document.getElementById('storagepricebutton3').addEventListener('click', function(){
    storagePrice.innerText = 180;
    updatetotal()
});
//delivery cost show
document.getElementById('deliverycostbutton1').addEventListener('click', function(){
    deliveryCost.innerText = 0;
    updatetotal()
});
document.getElementById('deliverycostbutton2').addEventListener('click', function(){
    deliveryCost.innerText = 20;
    updatetotal()
});
const finalPrice = document.getElementById('final-price')
document.getElementById('applybutton').addEventListener('click', function(){
    const promocode = document.getElementById('promo-code');
  const promocodetext = promocode.value ;
  const discount = totalPrice.innerText * 0.2;
 if(promocodetext == 'steavekaku'){
    finalPrice.innerText = totalPrice.innerText - discount;
 }

})
  
