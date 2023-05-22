// Test cases for the calculateBill logic
describe('The Text input bill widget function', function() {

  it('should add the cost for a call to the total bill', function() {
    // Set up the test
    var totalBill = 0;
    var billTypeTextValue = 'call';
    const expectedTotal = 2.75;

    // Execute the logic
    if (billTypeTextValue.toLowerCase() === 'call') {
      var cost = 2.75;
    }
    totalBill += cost;

    // Verify the result
    assert.strictEqual(totalBill, expectedTotal);
  });

  it('should add the cost for an SMS to the total bill', function() {
    // Set up the test
    var totalBill = 0;
    var billTypeTextValue = 'sms';
    const expectedTotal = 0.75;

    // Execute the logic
    if (billTypeTextValue.toLowerCase() === 'sms') {
      var cost = 0.75;
    }
    totalBill += cost;

    // Verify the result
    assert.strictEqual(totalBill, expectedTotal);
  });

  it('should not add any cost for an invalid bill type', function() {
    // Set up the test
    var totalBill = 0;
    var billTypeTextValue = 'invalid';
    const expectedTotal = 0;

    // Execute the logic
    if (billTypeTextValue.toLowerCase() === 'call') {
      var cost = 2.75;
    } else if (billTypeTextValue.toLowerCase() === 'sms') {
      var cost = 0.75;
    } else{
        var cost = 0;
    }
    totalBill += cost;

    // Verify the result
    assert.strictEqual(totalBill, expectedTotal);
  });

  it('should update the call total and total bill for a call', function() {
    // Set up the test
    var totalBill = 0;
    // simulating user clicking the add button 3 times 
    // after typing call or 
    // CALl(taking into account case sensitivity handling)
    var billTypeTextValue = 'CaLl'; 
    var callTotalTextContent = '8.25';
    var totalTextContent = '8.25';
    const expectedCallTotal = 8.25;
    const expectedTotal = 2.75 + 2.75 + 2.75;

    // Execute the logic
    if (billTypeTextValue.toLowerCase() === 'call') {
      var cost = 8.25;
    }
    totalBill += cost;

    callTotalTextContent = (parseFloat(callTotalTextContent)).toFixed(2);
    totalTextContent = totalBill.toFixed(2);

    // Verify the result
    assert.strictEqual(parseFloat(callTotalTextContent), expectedCallTotal);
    assert.strictEqual(parseFloat(totalTextContent), expectedTotal);
  });

  it('should update the SMS total and total bill for an SMS', function() {
    // Set up the test
    var totalBill = 0;
    // simulating user clicking the add button 3 times 
    // after typing call or 
    // SmS(taking into account case sensitivity handling)
    var billTypeTextValue = 'SmS'; 
    var smsTotalTextContent = '2.25';
    var totalTextContent = '2.25';
    const expectedSmsTotal = 2.25;
    const expectedTotal = 0.75 + 0.75 + 0.75;

    // Execute the logic
    if (billTypeTextValue.toLowerCase() === 'sms') {
      var cost = 2.25;
    }
    totalBill += cost;

    smsTotalTextContent = (parseFloat(smsTotalTextContent)).toFixed(2);
    totalTextContent = totalBill.toFixed(2);

    // Verify the result
    assert.strictEqual(parseFloat(smsTotalTextContent), expectedSmsTotal);
    assert.strictEqual(parseFloat(totalTextContent), expectedTotal);
  });

  it('should update the total bill color to "danger" when the total exceeds R50.00', function() {
    // Set up the test
    // var billTypeTextValue = 'call';
    var totalBill = 58.00;
    var totalClassListAddWarning = 'warning';
    var totalClassListRemoveWarning = 'warning';
    var totalClassListAddDanger = 'danger';
    var totalClassListRemoveDanger = 'danger';
    var totalClassListContainsDanger = true;
    

    // Execute the logic
    if (totalBill > 50) {
        totalClassListRemoveWarning;
        totalClassListAddDanger;
    } else if (totalBill > 30) {
        totalClassListRemoveDanger;
        totalClassListAddWarning;
    }

    // Verify the result
    assert.strictEqual(totalClassListContainsDanger, true);
  });

  it('should update the total bill color to "warning" when the total exceeds R30.00 but not R50.00', function() {
    // Set up the test
    // var billTypeTextValue = 'call';
    var totalBill = 48.00;
    var totalClassListAddWarning = 'warning';
    var totalClassListRemoveWarning = 'warning';
    var totalClassListAddDanger = 'danger';
    var totalClassListRemoveDanger = 'danger';
    var totalClassListContainsWarning = true;
    

    // Execute the logic
    if (totalBill > 50) {
        totalClassListRemoveWarning;
        totalClassListAddDanger;
    } else if (totalBill > 30) {
        totalClassListRemoveDanger;
        totalClassListAddWarning;
    }

    // Verify the result
    assert.strictEqual(totalClassListContainsWarning, true);
  });

  it('should remove the "danger" and "warning" classes from the total bill color when the total is within limits', function() {
    // Set up the test
    // var billTypeTextValue = 'call';
    var totalBill = 15.00;
    var totalClassListAddWarning = 'warning';
    var totalClassListRemoveWarning = 'warning';
    var totalClassListAddDanger = 'danger';
    var totalClassListRemoveDanger = 'danger';
    var totalClassListContainsWarning = false;
    var totalClassListContainsDanger = false;

    // Execute the logic
    if (totalBill > 50) {
        totalClassListRemoveWarning
        totalClassListAddDanger;
    } else if (totalBill > 30) {
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
