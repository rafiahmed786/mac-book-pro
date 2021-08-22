// function for click handler 
function fullAmount(price,id){
    const productCostAmount = price;
    let productName = document.getElementById(id);
    productName.innerText=productCostAmount;
    let productCost = productName.innerText;
    let productTotal = parseFloat(productCost)

    calcTotal();
};
// event handler when user clicked on 8GB memory storage
document.getElementById("8gb-memory").addEventListener('click', function(){
    fullAmount(0, 'memory-cost')
});

// event handler when user clicked on 16GB memory storage
document.getElementById("16gb-memory").addEventListener('click', function(){
    // debugger;
    fullAmount(180, 'memory-cost')
});

// event handler when user clicked on 256GB ssd storage
document.getElementById("256gb-ssd").addEventListener('click', function(){
    fullAmount(0, 'storage-cost')
});

// event handler when user clicked on 512GB ssd storage
document.getElementById("512gb-ssd").addEventListener('click', function(){
    fullAmount(100, 'storage-cost')
});

// event handler when user clicked on 1TB ssd storage 
document.getElementById("1TB-ssd").addEventListener('click', function(){
    fullAmount(180, 'storage-cost')
});

// event handler when user clicked on delivery free button
document.getElementById("delivery-free").addEventListener('click', function(){
    fullAmount(0,'delivery-amount')
    
});

// event handler when user clicked on delivery cost button
document.getElementById("delivery-cost").addEventListener('click', function(){
    fullAmount(20,'delivery-amount')
});

// using shortcut to declare product amount
function totalAmount(product){
    const productName = document.getElementById(product);
    let productCostAmount = parseFloat(productName.innerText);
    return productCostAmount;
};

// calculate total amount of all product
function calcTotal(){
    const totalProductCostAmount= totalAmount('product-amount');
    const totalMemoryCostAmount= totalAmount('memory-cost');
    const totalStorageCostAmount = totalAmount('storage-cost');
    const totalDeliveryCostAmount = totalAmount('delivery-amount');
    const total = totalMemoryCostAmount + totalStorageCostAmount + totalDeliveryCostAmount + totalProductCostAmount ;
    
    document.getElementById('total-amount').innerText = total;
    document.getElementById('total').innerText = total;
    return total;
};

// promo code
document.getElementById('input-button').addEventListener('click', function(){
    let inputName = document.getElementById('input');
    let inputValue = inputName.value;
    if(inputValue == "stevekaku" ){
        document.getElementById('total').innerText = calcTotal() - (calcTotal() /5);
    }
    inputName.value = "";
});

