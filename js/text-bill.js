// get a reference to the textbox where the bill type is to be entered
const billTypeText = document.querySelector(".billTypeText");

//get a reference to the add button
const addToBillBtn = document.querySelector(".addToBillBtn");

//create a variable that will keep track of the total bill
let totalBill = 0;

//add an event listener for when the add button is pressed
addToBillBtn.addEventListener("click", function() {

  //in the event listener check if the value in the bill type textbox is 'sms' or 'call'
  const billTypeEntered = billTypeText.value.trim();
  let cost = 0;

  if (billTypeEntered.toLowerCase() === "call") {
    cost = 2.75;
  } else if (billTypeEntered.toLowerCase() === "sms") {
    cost = 0.75;
  }

  // * add the appropriate value to the running total
  totalBill += cost;

  // * add nothing for invalid values that is not 'call' or 'sms'.
  // * display the latest total on the screen
  const callTotal = document.querySelector(".callTotalOne");
  const smsTotal = document.querySelector(".smsTotalOne");
  const total = document.querySelector(".totalOne");

  if (billTypeEntered.toLowerCase() === "call") {
    callTotal.textContent = (parseFloat(callTotal.textContent) + cost).toFixed(2);
  } else if (billTypeEntered.toLowerCase() === "sms") {
    smsTotal.textContent = (parseFloat(smsTotal.textContent) + cost).toFixed(2);
  }

  total.textContent = totalBill.toFixed(2);

  //check if the total cost exceed R30.00 show the total cost in orange, if over R50 show it in red
  if (totalBill > 50) {
    total.style.color = "red";
  } else if (totalBill > 30) {
    total.style.color = "orange";
  } else {
    total.style.color = "black";
  }

});
