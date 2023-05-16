describe('calculateBill', () => {
  // Test case 1
  it('should return the correct total bill for a given bill string', () => {
    // Input
    const billString = 'call, sms';

    // Expected output
    const expectedTotalBill = 3.50;

    // Call the function being tested
    const actualTotalBill = calculateBill(billString);

    // Assertion
    assert.equal(actualTotalBill, expectedTotalBill);
  });

  // Test case 2
  it('should return 0 if the bill string is empty', () => {
    // Input
    const billString = '';

    // Expected output
    const expectedTotalBill = 0;

    // Call the function being tested
    const actualTotalBill = calculateBill(billString);

    // Assertion
    assert.equal(actualTotalBill, expectedTotalBill);
  });

  // Test case 3
  it('should handle bill strings with a single item', () => {
    // Input
    const billString = 'sms';

    // Expected output
    const expectedTotalBill = 0.75;

    // Call the function being tested
    const actualTotalBill = calculateBill(billString);

    // Assertion
    assert.equal(actualTotalBill, expectedTotalBill);
  });

  // Test case 4
  it('should handle bill strings with leading/trailing whitespace', () => {
    // Input
    const billString = '   call, sms  , sms   ';

    // Expected output
    const expectedTotalBill = 4.25;

    // Call the function being tested
    const actualTotalBill = calculateBill(billString);

    // Assertion
    assert.equal(actualTotalBill, expectedTotalBill);
  });

  // Test case 5
  it('should handle bill strings with duplicate items', () => {
    // Input
    const billString = 'call,sms,call';

    // Expected output
    const expectedTotalBill = 6.25;

    // Call the function being tested
    const actualTotalBill = calculateBill(billString);

    // Assertion
    assert.equal(actualTotalBill, expectedTotalBill);
  });

  // Test case 6
  it('should handle bill strings with lowercase or uppercase', () => {
    // Input
    const billString = 'Call,sMs,cAlL';

    // Expected output
    const expectedTotalBill = 6.25;

    // Call the function being tested
    const actualTotalBill = calculateBill(billString);

    // Assertion
    assert.equal(actualTotalBill, expectedTotalBill);
  });

  // Test case 7
  it('should handle bill strings with invalid or missing item prices', () => {
    // Input
    const billString = 'coll, sns,call';

    // Expected output
    const expectedTotalBill = 2.75;

    // Call the function being tested
    const actualTotalBill = calculateBill(billString);

    // Assertion
    assert.equal(actualTotalBill, expectedTotalBill);
  });

});
