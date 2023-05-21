// Create an instance of BillWithSettings
const billSettings = BillWithSettings();

// get a reference to the calculate button
const calculateBtn = document.querySelector(".calculateBtn");

// get a reference to the billTotal element
const billTotal = document.querySelector(".billTotal");

// get a reference to the billString
const billString = document.querySelector(".billString");

// create the function that will be called when the calculate button is pressed
function calculateBill() {
  
    //  * this function should read the string value entered - split it on a comma.
  const billItems = billString.value.split(",");

  //  * loop over all the entries in the the resulting list
  let total = 0;
  for (let i = 0; i < billItems.length; i++) {
    const billItem = billItems[i].trim(); // remove any whitespace around the item
    //  * check if it is a call or an sms and add the right amount to the overall total
    if (billItem.toLowerCase() === "call") {
      total += 2.75;
    } else if (billItem.toLowerCase() === "sms") {
      total += 0.75;
    }
  }

  //  * once done looping over all the entries - display the total onto the screen in the billTotal element
  billTotal.textContent = total.toFixed(2); // round to 2 decimal places
  if (total > 30) {
    billTotal.style.color = "red";
  } else if (total > 20) {
    billTotal.style.color = "orange";
  } else {
    billTotal.style.color = "black";
  }
}

// link the function to a click event on the calculate button
calculateBtn.addEventListener("click", calculateBill);
