console.log("Hi there Deone!");

let numberofDice = document.querySelector("#number-of-dice");
let rollButton = document.querySelector("#roll-button");
let totalNumber = document.querySelector("#total-number");
let showAllRolls = document.querySelector("#show-all-rolls");
let rollResults = document.querySelector("#roll-results");
let dieRolls = []


function giveMeRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;

}

rollButton.addEventListener("click", function() {
    // console.log(numberofDice.value);
    let maxRolls = Number(numberofDice.value);
    let count = 0;
    dieRolls = [];
    numberofDice.value = "";
    while(count < maxRolls) {
       // dieRolls.push("The number rolled: " + count);
       dieRolls.push( giveMeRandomNumber());
        count++;

    }
    let total = 0
    let i = 0

    while(i < dieRolls.length) {
        total = dieRolls[i] + total
        i++
    }

    console.log(dieRolls)

    totalNumber.innerHTML = total;

     
})

showAllRolls.addEventListener("click", function() {
    //Resetting back to original value - rollResults.innerHTML = ""
    rollResults.innerHTML = ""
    let count = 0;
    while(count < dieRolls.length) {
        rollResults.innerHTML += "<li>" + dieRolls[count] + "</li>";
        count++;

    }

})
 

