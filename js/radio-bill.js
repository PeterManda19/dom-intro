// get a reference to the sms or call radio buttons
const billItemTypeRadios = document.querySelectorAll(".billItemTypeRadio");

// get a reference to the add button
const radioBillAddBtn = document.querySelector(".radioBillAddBtn");

// create a variable that will keep track of the total bill
let totalBill = 0;

// add an event listener for when the add button is pressed
radioBillAddBtn.addEventListener("click", function() {

  // in the event listener get the value from the billItemTypeRadio radio buttons
  let billItemType = "";
  for (const billItemTypeRadio of billItemTypeRadios) {
    if (billItemTypeRadio.checked) {
      billItemType = billItemTypeRadio.value;
    }
  }

  // * add the appropriate value to the running total
  if (billItemType === "call") {
    totalBill += 2.75;
  } else if (billItemType === "sms") {
    totalBill += 0.75;
  }

  // * add nothing for invalid values that is not 'call' or 'sms'.

  // * display the latest total on the screen
  const callTotal = document.querySelector(".callTotalTwo");
  const smsTotal = document.querySelector(".smsTotalTwo");
  const total = document.querySelector(".totalTwo");

  callTotal.innerHTML = (totalBill - smsTotal.innerHTML).toFixed(2);
  smsTotal.innerHTML = (totalBill - callTotal.innerHTML).toFixed(2);
  total.innerHTML = totalBill.toFixed(2);

  // set the appropriate color for the total amount
  if (totalBill > 30 && totalBill <= 50) {
    total.classList.remove("red");
    total.classList.add("orange");
  } else if (totalBill > 50) {
    total.classList.remove("orange");
    total.classList.add("red");
  } else {
    total.classList.remove("orange");
    total.classList.remove("red");
  }
});
