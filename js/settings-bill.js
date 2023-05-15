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

// Create variables that will keep track of all the settings
let num = 0;
let callCost = num;
let smsCost = num;
let warningLevel = num;
let criticalLevel = num;

// Create variables that will keep track of all three totals
let callTotalcost = num;
let smsTotalcost = num;
let overallTotal = num;


// Add an event listener for when the 'Update settings' button is pressed
updateSettingsBtn.addEventListener("click", function () {
  
  // Update the values of the settings variables
  const newCallCost = parseFloat(callCostInput.value) || num.toFixed(2);// use zero if input is not a number
  const newSmsCost = parseFloat(smsCostInput.value) || num.toFixed(2);// use zero if input is not a number
  const newWarningLevel = parseFloat(warningLevelInput.value) || num.toFixed(2);// use zero if input is not a number
  const newCriticalLevel = parseFloat(criticalLevelInput.value) || num.toFixed(2);// use zero if input is not a number

  if (newCriticalLevel > criticalLevel && newCriticalLevel > warningLevel) {
    // update critical level and adjust color if necessary
    criticalLevel = newCriticalLevel;

    const totalSettingsElement = document.querySelector(".totalSettings");

    if (overallTotal > warningLevel && overallTotal < criticalLevel) {
      totalSettingsElement.style.color = "orange";
    } else if (overallTotal > criticalLevel) {
      totalSettingsElement.style.color = "red";
      addButton.disabled = true;
    }
  } else if (newWarningLevel > warningLevel && newWarningLevel < criticalLevel) {
    // update warning level and adjust color if necessary
    warningLevel = newWarningLevel;

    const totalSettingsElement = document.querySelector(".totalSettings");

    if (overallTotal > criticalLevel) {
      totalSettingsElement.style.color = "red";
      addButton.disabled = true;
    } else {
      totalSettingsElement.style.color = "black";
      addButton.disabled = false;
    }
  } else {
    // update all settings
    callCost = newCallCost;
    smsCost = newSmsCost;
    warningLevel = newWarningLevel;
    criticalLevel = newCriticalLevel;

    // Reset the totals to zero
    callTotalcost = num;
    smsTotalcost = num;
    overallTotal = num;

    // Reset the displayed values on the screen
    document.querySelector(".callTotalSettings").textContent = callTotalcost.toFixed(2);
    document.querySelector(".smsTotalSettings").textContent = smsTotalcost.toFixed(2);
    document.querySelector(".totalSettings").textContent = overallTotal.toFixed(2);

    // Reset the color of the total value displayed on the screen
    document.querySelector(".totalSettings").style.setProperty("orange", "black");
    document.querySelector(".totalSettings").style.setProperty("red", "black");

    // Re-enable the add button
    addButton.disabled = false;
  }
});


// Add an event listener for when the add button is pressed
addButton.addEventListener("click", function () {
  // Get the value from the billItemTypeRadio radio buttons
  var checkedBillitem = document.querySelector("input[name='billItemTypeWithSettings']:checked");
  if (checkedBillitem) {
    // Add the appropriate value to the call / sms total
    if (checkedBillitem.value.toLowerCase() === "call") {
      callTotalcost += callCost;
    } else if (checkedBillitem.value.toLowerCase() === "sms") {
      smsTotalcost += smsCost;
    }

    // Add the appropriate value to the overall total
    overallTotal = callTotalcost + smsTotalcost;

    // Display the latest total on the screen
    const callTotalSettingsElement = document.querySelector(".callTotalSettings");
    const smsTotalSettingsElement = document.querySelector(".smsTotalSettings");
    const totalSettingsElement = document.querySelector(".totalSettings");
    
    callTotalSettingsElement.innerHTML = callTotalcost.toFixed(2);
    smsTotalSettingsElement.innerHTML = smsTotalcost.toFixed(2);
    totalSettingsElement.innerHTML = overallTotal.toFixed(2);

    totalSettingsElement.textContent = Number(overallTotal.toFixed(2));

    // Check the value thresholds and display the total value in the right color
    if (overallTotal > criticalLevel) {
      totalSettingsElement.style.color = "red";
      addButton.disabled = true; // Prevent any new costs from being added
    } else if (overallTotal > warningLevel  && overallTotal < criticalLevel) {
      totalSettingsElement.style.color = "orange";
    } else if(overallTotal < warningLevel) {
      totalSettingsElement.style.color = "black";
      addButton.disabled = false; // Re-enable the add button
    }
  }
});
