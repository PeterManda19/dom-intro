// get a reference to the sms or call radio buttons
const billItemTypeRadios = document.querySelectorAll(".billItemTypeRadio");

// get a reference to the add button
const radioBillAddBtn = document.querySelector(".radioBillAddBtn");

// create a variable that will keep track of the total bill
let totalCost = 0;
let callTotal = 0;
let smsTotal = 0;

// add an event listener for when the add button is pressed
radioBillAddBtn.addEventListener("click", function() {

  // get the checked radio button for the bill item type
  var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");

  // check if a radio button is checked before getting its value
  if (checkedRadioBtn) {
    // get the value of the checked radio button
    var billItemType = checkedRadioBtn.value;
    // add the appropriate value to the running total
    if (billItemType.toLowerCase()  === "call") {
      totalCost += 2.75;
      callTotal += 2.75;
    } else if (billItemType.toLowerCase()  === "sms") {
      totalCost += 0.75;
      smsTotal += 0.75;
    }
  }

  // display the latest total on the screen
  const callTotalElement = document.querySelector(".callTotalTwo");
  const smsTotalElement = document.querySelector(".smsTotalTwo");
  const totalElement = document.querySelector(".totalTwo");

  callTotalElement.innerHTML = callTotal.toFixed(2);
  smsTotalElement.innerHTML = smsTotal.toFixed(2);
  totalElement.innerHTML = totalCost.toFixed(2);

  totalElement.textContent = totalCost.toFixed(2);

  if (totalCost > 50) {
    totalElement.classList.remove("warning");
    totalElement.classList.add("danger");
  } else if (totalCost > 30) {
    totalElement.classList.remove("danger");
    totalElement.classList.add("warning");
  } else {
    totalSettingsElement.classList.remove("danger");
    totalSettingsElement.classList.remove("warning");
  }
});
