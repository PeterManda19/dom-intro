// Create an instance of BillWithSettings
const BillSettings = BillWithSettings();

// get a reference to the calculate button
const calculateBtn = document.querySelector(".calculateBtn");

// get a reference to the billTotal element
const billTotal = document.querySelector(".billTotal");

// get a reference to the billString
const billString = document.querySelector(".billString");

// Create variables that will keep track of all the settings using BillWithSettings Factory Function
let CallCost = BillSettings.setCallCost(2.75);
let SmsCost = BillSettings.setSmsCost(0.75);
let WarningLevel = BillSettings.setWarningLevel(20);
let CriticalLevel = BillSettings.setCriticalLevel(30);

// create the function that will be called when the calculate button is pressed
function calculateBill() {
  
    //  * this function should read the string value entered - split it on a comma.
  const billItems = billString.value.split(",");

  //  * loop over all the entries in the the resulting list
  let total = 0;
  for (let i = 0; i < billItems.length; i++) {
    const billItem = billItems[i].trim(); // remove any whitespace around the item
    //  * check if it is a call or an sms and add the right amount to the overall total
    // using BillWithSettings Factory Function
    if (billItem.toLowerCase() === "call") {
      total += BillSettings.getCallCost();
    } else if (billItem.toLowerCase() === "sms") {
      total += BillSettings.getTotalSmsCost();
    }
  }

  //  * once done looping over all the entries - display the total onto the screen in the billTotal element
  billTotal.textContent = total.toFixed(2); // round to 2 decimal places
  
  // Check the value thresholds and display the total value in the right color
  checkThresholdsAndDisplayTotalColor(total)
}

/**
 * Checks the value thresholds and displays the total value in the right color.
 * using BillWithSettings Factory Function
 */
function checkThresholdsAndDisplayTotalColor(total) {
  if (total > BillSettings.getCriticalLevel()) {
    billTotal.classList.remove("warning");
    billTotal.classList.add("danger");
  } else if (total > BillSettings.getWarningLevel()) {
    billTotal.classList.remove("danger"); 
    billTotal.classList.add("warning");
  } else {
    billTotal.classList.remove("danger");
    billTotal.classList.remove("warning");
  }
}

// link the function to a click event on the calculate button
calculateBtn.addEventListener("click", calculateBill);
