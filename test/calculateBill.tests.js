describe('calculateBill', function() {
  // Test case 1
  it('should return the correct total bill for a given bill string', function() {
    // Input
    const billString = 'item1,item2,item3';

    // Expected output
    const expectedTotalBill = 30;

    // Call the function being tested
    const actualTotalBill = calculateBill(billString);

    // Assertion
    strictEqual(actualTotalBill, expectedTotalBill);
  });

});