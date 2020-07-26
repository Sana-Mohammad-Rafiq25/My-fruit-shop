let enterBudget = 0;
let total = 0;
let Balance = 0;
let quantity = 0;
//let Balance = enterBudget - total;
let quantityOfApple = 0;
const priceOfApple = 28;
let quantityOfBanana = 0;
const priceOfBanana = 6;
let quantityOfMango = 0;
const priceOfMango = 25;
let totalCostOfApple = 0;
let totalCostOfMango = 0;
let totalCostOfBanana = 0;
let totalQuantity = 0;



// function onload() {
//     console.log("---", document.getElementById("total"));
// }


function inputBudget() {

    let enterBudget = parseInt(document.querySelector("#enter-budget").value);
    console.log(enterBudget);

    let budgetValue = document.querySelector("#budget-value");
    budgetValue.innerHTML = "Your budget is:" + enterBudget;
    // Balance = enterBudget - total;

    // if (enterBudget <= 0) {
    //     alert("first enter your budget!");
    // } else 
    if (enterBudget <= 5) {

        alert("Your Budget is not sufficient!");

    }

    // switch enterBudget() {}
}





function calculateBalance() {
    document.getElementById("enter-budget").value = enterBudget;
    document.getElementById("remaining-balance").innerHTML = Balance;
    document.getElementById("total").innerHTML = total;
    Balance = enterBudget - total;

    console.log("remainingBalance");
    inputBudget()
    checkTotal()
}


function checkTotal() {
    total = totalCostOfApple + totalCostOfMango + totalCostOfBanana;
    document.querySelector("#total").innerHTML = total;
    console.log(total);
    if (total > enterBudget) {
        alert("insufficient budget");
        //     console.log("insufficient budget");
    }
    // else {
    //     console.log("you have sufficient money");
    // }

}

function checkQuantity() {
    document.querySelector("#quantityOfApple").innerHTML = quantityOfApple;
    document.querySelector("#quantityOfMango").innerHTML = quantityOfMango;
    document.querySelector("#quantityOfBanana").innerHTML = quantityOfBanana;

    quantity = quantityOfApple + quantityOfMango + quantityOfBanana;
    document.querySelector("#quantity").innerHTML = quantity;

    console.log(quantity);

}

function calculateTotalOfApple() {
    totalCostOfApple = quantityOfApple * priceOfApple;
    document.getElementById("total").innerHTML = total;
    checkTotal();
    checkQuantity();
    calculateBalance()
}

function addApple() {
    ++quantityOfApple;
    document.getElementById("quantityOfApple").innerHTML = quantityOfApple;

    inputBudget()
    calculateTotalOfApple();
    calculateBalance();

}


function minusApple() {
    if (quantityOfApple > 0) --quantityOfApple;
    document.getElementById("quantityOfApple").innerHTML = quantityOfApple;
    // ELSE{
    // alert("fruit is already zero");}
    calculateTotalOfApple();
    calculateBalance();
    inputBudget()
}




// function checkResult() {
//     let isBuyingExceed = false;
//     if (isBuyingExceed > enterBudget) {
//         alert("YOur Budget is out");
//     }
// }

function calculateTotalOfMango() {
    totalCostOfMango = quantityOfMango * priceOfMango;
    document.getElementById("total").innerHTML = total;
    checkTotal();
    checkQuantity();
    calculateBalance();
}

function addMango() {
    ++quantityOfMango;
    document.getElementById("quantityOfMango").innerHTML = quantityOfMango;
    inputBudget()
    calculateTotalOfMango();
    calculateBalance();
}

function minusMango() {
    if (quantityOfMango > 0) --quantityOfMango;
    document.getElementById("quantityOfMango").innerHTML = quantityOfMango;

    inputBudget()
    calculateTotalOfMango();
    calculateBalance();
}


function calculateTotalOfBanana() {
    totalCostOfBanana = quantityOfBanana * priceOfBanana;
    document.getElementById("total").innerHTML = total;
    checkTotal();
    checkQuantity();
    calculateBalance();
}

function addBanana() {
    ++quantityOfBanana;
    document.getElementById("quantityOfBanana").innerHTML = quantityOfBanana;
    inputBudget()
    calculateTotalOfBanana();
    calculateBalance();
}

function minusBanana() {
    if (quantityOfBanana > 0) --quantityOfBanana;
    document.getElementById("quantityOfBanana").innerHTML = quantityOfBanana;
    inputBudget()
    calculateTotalOfBanana();
    calculateBalance();
}