// Get a reference to the sms or call radio buttons
const callRadioBtn = document.querySelector(".billItemTypeWithSettings[value='call']");
const smsRadioBtn = document.querySelector(".billItemTypeWithSettings[value='sms']");

// Get references to all the settings fields
const callCostInput = document.querySelector(".callCostSetting");
const smsCostInput = document.querySelector(".smsCostSetting");
const warningLevelInput = document.querySelector(".warningLevelSetting");
const criticalLevelInput = document.querySelector(".criticalLevelSetting");

// Display the latest total on the screen
const callTotalSettingsElement = document.querySelector(".callTotalSettings");
const smsTotalSettingsElement = document.querySelector(".smsTotalSettings");
const totalSettingsElement = document.querySelector(".totalSettings");

// Get a reference to the add button
const addButton = document.querySelector(".addButton");

// Get a reference to the 'Update settings' button
const updateSettingsBtn = document.querySelector(".updateSettings");

// Create variables that will keep track of all the settings
let callCost = 0;
let smsCost = 0;
let warningLevel = 0;
let criticalLevel = 0;

// Create variables that will keep track of all three totals
let callTotalcost = 0;
let smsTotalcost = 0;
let overallTotal = 0;

// Add an event listener for when the 'Update settings' button is pressed
updateSettingsBtn.addEventListener("click", function () {
  
  // Update the values of the settings variables
  // Number checks if the input is a valid number
  callCost = Number(callCostInput.value) || 0;// use zero if input is not a number
  smsCost = Number(smsCostInput.value) || 0;// use zero if input is not a number
  warningLevel = Number(warningLevelInput.value) || 0;// use zero if input is not a number
  criticalLevel = Number(criticalLevelInput.value) || 0;// use zero if input is not a number

  checkValue();
  
  }
);

// Add an event listener for when the add button is pressed
addButton.addEventListener("click", function () {
  // Get the value from the billItemTypeRadio radio buttons
  var checkedBillitem = document.querySelector("input[name='billItemTypeWithSettings']:checked");
  if (checkedBillitem) {
    if(overallTotal < criticalLevel){
      // Add the appropriate value to the call / sms total
    if (checkedBillitem.value.toLowerCase() === "call") {
      callTotalcost += callCost;
    } else if (checkedBillitem.value.toLowerCase() === "sms") {
      smsTotalcost += smsCost;
    }
  }
    
    // Add the appropriate value to the overall total
    overallTotal = callTotalcost + smsTotalcost;

    callTotalSettingsElement.innerHTML = callTotalcost.toFixed(2);
    smsTotalSettingsElement.innerHTML = smsTotalcost.toFixed(2);
    totalSettingsElement.innerHTML = overallTotal.toFixed(2);

    totalSettingsElement.textContent = Number(overallTotal.toFixed(2));

    // Check the value thresholds and display the total value in the right color
    checkValue();
  }
});

function checkValue(){
  if (overallTotal > criticalLevel) {
    totalSettingsElement.classList.remove("warning");
    totalSettingsElement.classList.add("danger");
    } else if (overallTotal >= warningLevel  && overallTotal < criticalLevel) {
      totalSettingsElement.classList.remove("danger");
      totalSettingsElement.classList.add("warning");
    } else if(overallTotal < warningLevel) {
      totalSettingsElement.classList.remove("danger");
      totalSettingsElement.classList.remove("warning");
    }
}
