describe("The Bill with settings bill widget function", () => {
  let billSettings;

  beforeEach(() => {
    billSettings = new BillWithSettings();
  });

  // Test case to verify that the call cost is updated correctly.
  it("should update the call cost correctly", () => {
    const newCallCost = 0.5;
    billSettings.setCallCost(newCallCost);
    assert.strictEqual(billSettings.getCallCost(), newCallCost);
  });

  // Test case to verify that the SMS cost is updated correctly.
  it("should update the SMS cost correctly", () => {
    const newSmsCost = 0.25;
    billSettings.setSmsCost(newSmsCost);
    assert.strictEqual(billSettings.getSmsCost(), newSmsCost);
  });

  // Test case to verify that the warning level is updated correctly.
  it("should update the warning level correctly", () => {
    const newWarningLevel = 20;
    billSettings.setWarningLevel(newWarningLevel);
    assert.strictEqual(billSettings.getWarningLevel(), newWarningLevel);
  });

  // Test case to verify that the critical level is updated correctly.
  it("should update the critical level correctly", () => {
    const newCriticalLevel = 30;
    billSettings.setCriticalLevel(newCriticalLevel);
    assert.strictEqual(billSettings.getCriticalLevel(), newCriticalLevel);
  });

  // Test case for reaching the critical level
  it('should apply "danger" class to total element when critical level is reached', () => {
    const newCriticalLevel = 30;
    billSettings.setCriticalLevel(newCriticalLevel);
    billSettings.setCallCost(15);
    billSettings.setSmsCost(15);

    billSettings.makeCall();
    billSettings.sendSms();

    assert.strictEqual(billSettings.getCriticalLevel(), newCriticalLevel);
    assert.strictEqual(billSettings.hasReachedCriticalLevel(), true);
    assert.strictEqual(billSettings.criticalTotalClassName(), "danger");
  });

  // Test case for reaching the warning level
  it('should apply "warning" class to total element when warning level is reached', () => {
    const newWarningLevel = 10;
    const newCriticalLevel = 30;
    billSettings.setWarningLevel(newWarningLevel);
    billSettings.setCriticalLevel(newCriticalLevel);
    billSettings.setCallCost(7);
    billSettings.setSmsCost(5);

    billSettings.makeCall();
    billSettings.sendSms();

    assert.strictEqual(billSettings.getCriticalLevel(), newCriticalLevel);
    assert.strictEqual(billSettings.getWarningLevel(), newWarningLevel);
    assert.strictEqual(billSettings.hasReachedCriticalLevel(), false);
    assert.notEqual(billSettings.criticalTotalClassName(), "danger");
    assert.strictEqual(billSettings.hasReachedWarningLevel(), 1);
    assert.strictEqual(billSettings.warningTotalClassName(), "warning");
    
  });

  // Test case for not reaching any threshold
  it('should not apply "danger" or "warning" class to total element when no threshold is reached', () => {
    const newWarningLevel = 10;
    const newCriticalLevel = 20;
    billSettings.setWarningLevel(newWarningLevel);
    billSettings.setCriticalLevel(newCriticalLevel);
    billSettings.setCallCost(3);
    billSettings.setSmsCost(1.50);

    billSettings.makeCall();
    billSettings.sendSms();

    assert.strictEqual(billSettings.getWarningLevel(), newWarningLevel);
    assert.strictEqual(billSettings.getCriticalLevel(), newCriticalLevel);
    assert.strictEqual(billSettings.hasReachedWarningLevel(), 0);
    assert.strictEqual(billSettings.hasReachedCriticalLevel(), false);
    assert.notEqual(billSettings.warningTotalClassName(), "warning");
    assert.notEqual(billSettings.criticalTotalClassName(), "danger");
  });

  // Test case for updating call total when call radio button is checked
  it('should update call total and SMS total correctly when call radio button is checked', () => {
    const newWarningLevel = 10;
    const newCriticalLevel = 20;
    billSettings.setWarningLevel(newWarningLevel);
    billSettings.setCriticalLevel(newCriticalLevel);
    billSettings.setCallCost(3);
    billSettings.setSmsCost(1.50);

    billSettings.makeCall();
    billSettings.makeCall();
    billSettings.sendSms();
    billSettings.sendSms();

    assert.strictEqual(billSettings.getTotalCallCost(), 6);
    assert.strictEqual(billSettings.getTotalSmsCost(), 3);
  });

  // Test case for not updating call/SMS total when critical level is reached
  it('should not update call/SMS total when critical level is reached', () => {
    const newWarningLevel = 10;
    const newCriticalLevel = 20;
    billSettings.setWarningLevel(newWarningLevel);
    billSettings.setCriticalLevel(newCriticalLevel);
    billSettings.setCallCost(3);
    billSettings.setSmsCost(1.50);

    billSettings.makeCall();
    billSettings.makeCall();
    billSettings.makeCall();
    billSettings.makeCall();
    billSettings.makeCall();
    billSettings.makeCall();
    billSettings.makeCall();

    billSettings.makeCall();
    billSettings.sendSms();
    billSettings.sendSms();

    assert.strictEqual(billSettings.getWarningLevel(), newWarningLevel);
    assert.strictEqual(billSettings.getCriticalLevel(), newCriticalLevel);
    assert.strictEqual(billSettings.hasReachedCriticalLevel(), true );
    assert.equal(billSettings.criticalTotalClassName(), "danger");
    assert.strictEqual(billSettings.getTotalCallCost(), 21);
    assert.strictEqual(billSettings.getTotalSmsCost(), 0);
  });
    
});
