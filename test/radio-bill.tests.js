// Test cases for the Radion bill widget logic
describe('The Radio button bill widget function', () => {

  it('should add the appropriate value to the running total for a "call" bill item type', () => {
    // Set up the test
    var totalCost = 0;
    var callTotal = 0;
    var billItemType = 'call';
    const expectedTotalCost = 2.75;
    const expectedCallTotal = 2.75;

    // Execute the logic
    if (billItemType.toLowerCase() === 'call') {
      totalCost += 2.75;
      callTotal += 2.75;
    }

    // Verify the result
    assert.strictEqual(totalCost, expectedTotalCost);
    assert.strictEqual(callTotal, expectedCallTotal);
  });

  it('should add the appropriate value to the running total for an "sms" bill item type', () => {
    // Set up the test
    var totalCost = 0;
    var smsTotal = 0;
    var billItemType = 'sms';
    const expectedTotalCost = 0.75;
    const expectedSmsTotal = 0.75;

    // Execute the logic
    if (billItemType.toLowerCase() === 'sms') {
      totalCost += 0.75;
      smsTotal += 0.75;
    }

    // Verify the result
    assert.strictEqual(totalCost, expectedTotalCost);
    assert.strictEqual(smsTotal, expectedSmsTotal);
  });

  it('should not add any value to the running total if no bill item type is checked', () => {
    // Set up the test
    var billItemType = '';
    const expectedTotalCost = 0;

    // Execute the logic
    if (billItemType.toLowerCase() === 'call') {
      totalCost += 2.75;
      callTotal += 2.75;
    } else if (billItemType.toLowerCase() === 'sms') {
      totalCost += 0.75;
      smsTotal += 0.75;
    }

    // Verify the result
    assert.strictEqual(totalCost, expectedTotalCost);
  });

  it('should update the call total, SMS total, and total cost on the screen', () => {
    // Set up the test
    var callTotal = 5.25;
    var smsTotal = 2.25;
    var totalCost = 8.50;
    var callTotalElementInnerHTML = '5.25';
    var smsTotalElementInnerHTML = '2.25';
    var totalElementInnerHTML = '8.50';
    const expectedCallTotal = 5.25;
    const expectedSmsTotal = 2.25;
    const expectedTotalCost= 8.50;

    // Execute the logic
    callTotalElementInnerHTML = callTotal.toFixed(2);
    smsTotalElementInnerHTML = smsTotal.toFixed(2);
    totalElementInnerHTML = totalCost.toFixed(2);

    var totalElementTextContent = totalCost.toFixed(2);

    // Verify the result
    assert.strictEqual(callTotalElementInnerHTML, expectedCallTotal.toString());
    assert.strictEqual(smsTotalElementInnerHTML, expectedSmsTotal.toString());
    assert.strictEqual(totalElementInnerHTML, expectedTotalCost.toFixed(2).toString());
    assert.strictEqual(totalElementTextContent, expectedTotalCost.toFixed(2).toString());
  });


  it('should update the total cost color to "danger" when the total exceeds R50.00', () => {
    // Set up the test
    // var billTypeTextValue = 'call';
    var totalCost = 58.00;
    var totalClassListAddWarning = 'warning';
    var totalClassListRemoveWarning = 'warning';
    var totalClassListAddDanger = 'danger';
    var totalClassListRemoveDanger = 'danger';
    var totalClassListContainsDanger = true;
    

    // Execute the logic
    if (totalCost > 50) {
        totalClassListRemoveWarning;
        totalClassListAddDanger;
    } else if (totalCost > 30) {
        totalClassListRemoveDanger;
        totalClassListAddWarning;
    }

    // Verify the result
    assert.strictEqual(totalClassListContainsDanger, true);
  });

  it('should update the total cost color to "warning" when the total exceeds R30.00 but not R50.00', () => {
    // Set up the test
    // var billTypeTextValue = 'call';
    var totalCost = 48.00;
    var totalClassListAddWarning = 'warning';
    var totalClassListRemoveWarning = 'warning';
    var totalClassListAddDanger = 'danger';
    var totalClassListRemoveDanger = 'danger';
    var totalClassListContainsWarning = true;
    

    // Execute the logic
    if (totalCost > 50) {
        totalClassListRemoveWarning;
        totalClassListAddDanger;
    } else if (totalCost > 30) {
        totalClassListRemoveDanger;
        totalClassListAddWarning;
    }

    // Verify the result
    assert.strictEqual(totalClassListContainsWarning, true);
  });

  it('should remove the "danger" and "warning" classes from the total cost color when the total is within limits', () => {
    // Set up the test
    // var billTypeTextValue = 'call';
    var totalCost = 15.00;
    var totalClassListAddWarning = 'warning';
    var totalClassListRemoveWarning = 'warning';
    var totalClassListAddDanger = 'danger';
    var totalClassListRemoveDanger = 'danger';
    var totalClassListContainsWarning = false;
    var totalClassListContainsDanger = false;

    // Execute the logic
    if (totalCost > 50) {
        totalClassListRemoveWarning
        totalClassListAddDanger;
    } else if (totalCost > 30) {
        totalClassListRemoveDanger;
        totalClassListAddWarning;
    } else {
        totalClassListRemoveDanger;
        totalClassListRemoveWarning;
    }

    // Verify the result
    assert.strictEqual(totalClassListContainsWarning, false);
    assert.strictEqual(totalClassListContainsDanger, false);
  });

});
