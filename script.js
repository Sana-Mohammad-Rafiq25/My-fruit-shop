let enterBudget = 0;
let total = 0;
let Balance = enterBudget - total;
let quantityOfApple = 0;
const priceOfApple = 28;
let quantityOfBanana = 0;
const priceOfBanana = 6;
let quantityOfMango = 0;
const priceOfMango = 25;
let totalCostOfApple = 0;
let totalCostOfMango = 0;
let totalCostOfBanana = 0;
let quantity = 0;



// function onload() {
//     console.log("---", document.getElementById("total"));
// }


function inputBudget() {

    let enterBudget = parseInt(document.querySelector("#enter-budget").value);
    console.log(enterBudget);
    console.log(typeof enterBudget);
    let budgetValue = document.querySelector("#budget-value");
    budgetValue.innerHTML = "Your budget is:" + enterBudget;
    // remainingBalance = inputBudget - consumeMoney;


    if (enterBudget <= 5) {
        
        alert("Your Budget is not sufficient!");
        //console.log("your budget is not sufficient")
        alert("first enter your budget!"); 
    }
    // else{
    // switch enterBudget()
    // }


}

function checkQuantity() {
    //budget = document.getElementById("enterBudget").Value;
    //  return quantityOfApple, quantityOfBanana, quantityOfMango <= 0;

    quantity = quantityOfApple + quantityOfMango + quantityOfBanana;
    document.querySelector("#quantity").innerHTML = quantity;
    console.log(quantity);
}

function calculateBalance() {
    budget = document.getElementById("enter-budget").value;
    remainingBalance = enterBudget - total;
    document.getElementById("remainingBalance").innerHTML = Balance;

    console.log("remainingBalance");
}

// function inputBudget() {
//     let price = document.querySelector("input").value;
//     console.log(price);
//     console.log(typeOf );
//     // document.getElementById("demo").innerHTML = x;
//   }

function checkTotal() {
    total = totalCostOfApple + totalCostOfMango + totalCostOfBanana;
    document.querySelector("#total").innerHTML = total;
    console.log(total);
    //if (total > enterBudget) {
    //alert("insufficient budget");
    //     console.log("insufficient budget");
    // }
    // else {
    //     console.log("you have sufficient money");
    // }

}

function calculateTotalOfApple() {
    totalCostOfApple = quantityOfApple * priceOfApple;
    document.getElementById("total").innerHTML = total;
    checkTotal()
}

function addApple() {
    ++quantityOfApple;
    document.getElementById("quantityOfApple").innerHTML = quantityOfApple;

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
}




function checkResult() {
    let isBuyingExceed = false;
    if (isBuyingExceed > enterBudget) {
        alert("YOur Budget is out");
    }
}

function calculateTotalOfMango() {
    totalCostOfMango = quantityOfMango * priceOfMango;
    document.getElementById("total").innerHTML = total;
    checkTotal()
}

function addMango() {
    ++quantityOfMango;
    document.getElementById("quantityOfMango").innerHTML = quantityOfMango;

    calculateTotalOfMango();
    calculateBalance();
}

function minusMango() {
    if (quantityOfMango > 0) --quantityOfMango;
    document.getElementById("quantityOfMango").innerHTML = quantityOfMango;

    calculateTotalOfMango();
    calculateBalance();
}


function calculateTotalOfBanana() {
    totalCostOfBanana = quantityOfBanana * priceOfBanana;
    document.getElementById("total").innerHTML = total;
    checkTotal()
}

function addBanana() {
    ++quantityOfBanana;
    document.getElementById("quantityOfBanana").innerHTML = quantityOfBanana;

    calculateTotalOfBanana();
    calculateBalance();
}

function minusBanana() {
    if (quantityOfBanana > 0) --quantityOfBanana;
    document.getElementById("quantityOfBanana").innerHTML = quantityOfBanana;

    calculateTotalOfBanana();
    calculateBalance();
}
