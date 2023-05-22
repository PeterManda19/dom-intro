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
let callCost = billSettings.setCallCost(callCostInput);
let smsCost = billSettings.setSmsCost(smsCostInput);
let warningLevel = billSettings.setWarningLevel(warningLevelInput);
let criticalLevel = billSettings.setCriticalLevel(criticalLevelInput);

/**
 * Checks the value thresholds and displays the total value in the right color.
 */
function checkThresholdsAndDisplayTotalColor() {
  
  if (billSettings.hasReachedCriticalLevel()) {
    totalSettingsElement.classList.remove(billSettings.warningTotalClassName());
    totalSettingsElement.classList.add(billSettings.criticalTotalClassName());
  } else if (billSettings.hasReachedWarningLevel()) {
    totalSettingsElement.classList.remove("danger");
    totalSettingsElement.classList.add(billSettings.warningTotalClassName());
  } else {
    totalSettingsElement.classList.remove("danger");
    totalSettingsElement.classList.remove("warning");
  }
}

/**
 * Updates the call or SMS total based on the selected bill item type.
 * @param {HTMLElement} checkedBillitem - The checked bill item radio button element.
 */
function updateCallSmsTotal(checkedBillitem) {
  if (!billSettings.hasReachedCriticalLevel()) {
    // Add the appropriate value to the call / sms total
    if (checkedBillitem.value.toLowerCase() === "call") {
      billSettings.makeCall();
    } else if (checkedBillitem.value.toLowerCase() === "sms") {
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

  billSettings.setCallCost(callCost);
  billSettings.setSmsCost(smsCost);
  billSettings.setWarningLevel(warningLevel);
  billSettings.setCriticalLevel(criticalLevel);

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
    //overallTotal = callTotalcost + smsTotalcost;
    billSettings.getTotalCost();

    callTotalSettingsElement.innerHTML = billSettings.getTotalCallCost().toFixed(2);
    smsTotalSettingsElement.innerHTML = billSettings.getTotalSmsCost().toFixed(2);
    totalSettingsElement.innerHTML = billSettings.getTotalCost().toFixed(2);

    totalSettingsElement.textContent = billSettings.getTotalCost().toFixed(2);

    // Check the value thresholds and display the total value in the right color
    checkThresholdsAndDisplayTotalColor();
  }
}

// Add an event listener for when the 'Update settings' button is pressed
updateSettingsBtn.addEventListener("click", updateSettings);

// Add an event listener for when the add button is pressed
addButton.addEventListener("click", handleAddButtonPress);
