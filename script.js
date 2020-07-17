let enterBudget = 0;
let total = 0;
let Balance = enterBudget - total;
let quantityOfApple = 0;
let priceOfApple = 28;
let quantityOfBanana = 0;
let priceOfBanana = 6;
let quantityOfMango = 0;
let priceOfMango = 25;



// function onload() {
//     console.log("---", document.getElementById("total"));
// }
// window.document.onload();

function inputBudget() {
    
    let enterBudget = parseInt(document.querySelector("input").value);
    console.log(enterBudget);
    console.log(typeof enterBudget);
   // remainingBalance = inputBudget - consumeMoney;
    
    
    if (inputBudget <= 5); {
        
        alert("Your Budget is not sufficient!");
        //alert("first enter your budget!"); 
    }
    // else{
    // switch enterBudget()
    // }
        

}

function checkQuantity() {
    budget = document.getElementById("enterBudget").nodeValue;
    return quantityOfApple, quantityOfBanana, quantityOfMango <= 0;


}

function calculateBalance() {
    budget = document.getElementById("enterBudget").value;
   remainingBalance = enterBudget - total;
    document.getElementById("remainingBalance").innerHTML = balance;
}

// function inputBudget() {
//     let price = document.querySelector("input").value;
//     console.log(price);
//     console.log(typeOf );
//     // document.getElementById("demo").innerHTML = x;
//   }

function checkTotal() {
    total = quantityOfApple * priceOfApple + quantityOfMango * priceOfMango + quantityOfBanana * priceOfBanana;
    document.querySelector("#total").innerHTML = total;
}

function calculateTotalOfApple() {
    total = quantityOfApple * priceOfApple;
    document.getElementById("total").innerHTML = total;
}

function addApple() {
    ++quantityOfApple;
    document.getElementById("quantityOfApple").innerHTML = quantityOfApple;
    
    calculateTotalOfApple();
    calculateBalance();

}


function minusApple() {
    if (quantityOfApple > 0) quantityOfApple--;
    document.getElementById("quantityOfApple").innerHTML = quantityOfApple;
    
    calculateTotalOfApple();
    calculateBalance();
}




function checkResult() {
    let isBuyingExceed = false;
    if (isBuyingExceed > enterBudget) {
        alert("YOur Budget is out");
    }
}

function calculateTotalOfMango() {
    total = quantityOfMango * priceOfMango;
    document.getElementById("total").innerHTML = total;
}

function addMango() {
    ++quantityOfMango;
    document.getElementById("quantityOfMango").innerHTML = quantityOfMango;
    
    calculateTotalOfMango();
    calculateBalance();
}

function minusMango() {
    if (quantityOfMango > 0) quantityOfMango--;
    document.getElementById("quantityOfMango").innerHTML = quantityOfMango;
    
    calculateTotalOfMango();
    calculateBalance();
}


function calculateTotalOfBanana() {
    total = quantityOfBanana * priceOfBanana;
    document.getElementById("total").innerHTML = total;
}

function addBanana() {
    ++quantityOfBanana;
    document.getElementById("quantityOfBanana").innerHTML = quantityOfBanana;
    
    calculateTotalOfBanana();
    calculateBalance();
}

function minusBanana() {
    if (quantityOfBanana > 0) quantityOfBanana--;
    document.getElementById("quantityOfBanana").innerHTML = quantityOfBanana;
    
    calculateTotalOfBanana();
    calculateBalance();
}
