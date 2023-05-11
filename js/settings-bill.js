// Get a reference to the sms or call radio buttons
const callRadioBtn = document.querySelector(".billItemTypeWithSettings[value='call']");
const smsRadioBtn = document.querySelector(".billItemTypeWithSettings[value='sms']");

// Get references to all the settings fields
const callCostInput = document.querySelector(".callCostSetting");
const smsCostInput = document.querySelector(".smsCostSetting");
const warningLevelInput = document.querySelector(".warningLevelSetting");
const criticalLevelInput = document.querySelector(".criticalLevelSetting");

// Get a reference to the add button
const addButton = document.querySelector(".button-primary");

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
  callCost = parseFloat(callCostInput.value);
  smsCost = parseFloat(smsCostInput.value);
  warningLevel = parseFloat(warningLevelInput.value);
  criticalLevel = parseFloat(criticalLevelInput.value);

  // Reset the totals to zero
  callTotalcost = 0;
  smsTotalcost = 0;
  overallTotal = 0;

  // Reset the displayed values on the screen
  document.querySelector(".callTotalSettings").textContent = callTotalcost.toFixed(2);
  document.querySelector(".smsTotalSettings").textContent = smsTotalcost.toFixed(2);
  document.querySelector(".totalSettings").textContent = overallTotal.toFixed(2);

  // Reset the color of the total value displayed on the screen
  document.querySelector(".totalSettings").classList.remove("warning");
  document.querySelector(".totalSettings").classList.remove("danger");
});

// Add an event listener for when the add button is pressed
addButton.addEventListener("click", function () {
  // Get the value from the billItemTypeRadio radio buttons
  var checkedBillitem = document.querySelector("input[name='billItemTypeWithSettings']:checked");
  if (checkedBillitem) {
    // Add the appropriate value to the call / sms total
    if (checkedBillitem.value === "call") {
      callTotalcost += callCost;
    } else if (checkedBillitem.value === "sms") {
      smsTotalcost += smsCost;
    }

    // Add the appropriate value to the overall total
    overallTotal = callTotalcost + smsTotalcost;

    // Display the latest total on the screen
    document.querySelector(".callTotalSettings").textContent = callTotalcost.toFixed(2);
    document.querySelector(".smsTotalSettings").textContent = smsTotalcost.toFixed(2);
    document.querySelector(".totalSettings").textContent = overallTotal.toFixed(2);

    // Check the value thresholds and display the total value in the right color
    if (overallTotal >= criticalLevel) {
      document.querySelector(".totalSettings").classList.add("danger");
      addButton.disabled = true; // Prevent any new costs from being added
    } else if (overallTotal >= warningLevel) {
      document.querySelector(".totalSettings").classList.add("warning");
    } else {
      document.querySelector(".totalSettings").classList.remove("warning");
      document.querySelector(".totalSettings").classList.remove("danger");
      addButton.disabled = false; // Re-enable the add button
    }
  }
});
