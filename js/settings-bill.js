// Create an instance of BillWithSettings
const billSettings = new BillWithSettings();

// Get a reference to the sms or call radio buttons
const callRadioBtn = document.querySelector(".billItemTypeWithSettings[value='call']");
const smsRadioBtn = document.querySelector(".billItemTypeWithSettings[value='sms']");

// Get references to all the settings fields
const callCostInput = document.querySelector(".callCostSetting");
const smsCostInput = document.querySelector(".smsCostSetting");
const warningLevelInput = document.querySelector(".warningLevelSetting");
const criticalLevelInput = document.querySelector(".criticalLevelSetting");

// Get a reference to the add button
const addButton = document.querySelector(".addButton");

// Get a reference to the 'Update settings' button
const updateSettingsBtn = document.querySelector(".updateSettings");

// Get references to display the latest total on the screen
const callTotalSettingsElement = document.querySelector(".callTotalSettings");
const smsTotalSettingsElement = document.querySelector(".smsTotalSettings");
const totalSettingsElement = document.querySelector(".totalSettings");

// Create variables that will keep track of all the settings
let callCost = billSettings.setCallCost(0);
let smsCost = billSettings.setSmsCost(0);
let warningLevel = billSettings.setWarningLevel(0);
let criticalLevel = billSettings.setCriticalLevel(0);

// Create variables that will keep track of all three totals
let callTotalcost = billSettings.getTotalCallCost();
let smsTotalcost = billSettings.getTotalSmsCost();
let overallTotal = billSettings.getTotalCost();

/**
 * Checks the value thresholds and displays the total value in the right color.
 */
function checkThresholdsAndDisplayTotalColor() {
  if (overallTotal >= criticalLevel) {
    totalSettingsElement.classList.remove("warning");
    totalSettingsElement.classList.add("danger");
  } else if (overallTotal >= warningLevel && overallTotal < criticalLevel) {
    totalSettingsElement.classList.remove("danger");
    totalSettingsElement.classList.add("warning");
  } else if (overallTotal < warningLevel) {
    totalSettingsElement.classList.remove("danger");
    totalSettingsElement.classList.remove("warning");
  }
}

/**
 * Updates the call or SMS total based on the selected bill item type.
 * @param {HTMLElement} checkedBillitem - The checked bill item radio button element.
 */
function updateCallSmsTotal(checkedBillitem) {
  if (overallTotal < criticalLevel) {
    // Add the appropriate value to the call / sms total
    if (checkedBillitem.value.toLowerCase() === "call") {
      callTotalcost += callCost;
      billSettings.makeCall();
    } else if (checkedBillitem.value.toLowerCase() === "sms") {
      smsTotalcost += smsCost;
      billSettings.sendSms();
    }
  }
}

/**
 * Updates the values of the settings variables based on user input.
 */
function updateSettings() {
  // Number checks if the input is a valid number
  callCost = Number(callCostInput.value) || 0; // use zero if input is not a number
  smsCost = Number(smsCostInput.value) || 0; // use zero if input is not a number
  warningLevel = Number(warningLevelInput.value) || 0; // use zero if input is not a number
  criticalLevel = Number(criticalLevelInput.value) || 0; // use zero if input is not a number

  // Check the value thresholds and display the total value in the right color
  checkThresholdsAndDisplayTotalColor();
}

/**
 * Handles the event when the add button is pressed.
 * Updates the call/sms totals, overall total, and checks value thresholds.
 */
function handleAddButtonPress() {
  // Get the value from the billItemTypeRadio radio buttons
  var checkedBillitem = document.querySelector("input[name='billItemTypeWithSettings']:checked");

  if (checkedBillitem) {
    // Add the appropriate value to the call / sms total
    updateCallSmsTotal(checkedBillitem);

    // Add the appropriate value to the overall total
    overallTotal = callTotalcost + smsTotalcost;

    callTotalSettingsElement.innerHTML = callTotalcost.toFixed(2);
    smsTotalSettingsElement.innerHTML = smsTotalcost.toFixed(2);
    totalSettingsElement.innerHTML = overallTotal.toFixed(2);

    totalSettingsElement.textContent = overallTotal.toFixed(2);

    // Check the value thresholds and display the total value in the right color
    checkThresholdsAndDisplayTotalColor();
  }
}

// Add an event listener for when the 'Update settings' button is pressed
updateSettingsBtn.addEventListener("click", updateSettings);

// Add an event listener for when the add button is pressed
addButton.addEventListener("click", handleAddButtonPress);
