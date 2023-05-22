describe("The Bill with settings bill widget function", () => {
  let billSettings;

  beforeEach(() => {
    billSettings = new BillWithSettings();
  });

  it("should update the call cost correctly", () => {
    const newCallCost = 0.5;
    billSettings.setCallCost(newCallCost);
    assert.strictEqual(billSettings.getCallCost(), newCallCost);
  });

  it("should update the SMS cost correctly", () => {
    const newSmsCost = 0.25;
    billSettings.setSmsCost(newSmsCost);
    assert.strictEqual(billSettings.getSmsCost(), newSmsCost);
  });

  it("should update the warning level correctly", () => {
    const newWarningLevel = 20;
    billSettings.setWarningLevel(newWarningLevel);
    assert.strictEqual(billSettings.getWarningLevel(), newWarningLevel);
  });

  it("should update the critical level correctly", () => {
    const newCriticalLevel = 30;
    billSettings.setCriticalLevel(newCriticalLevel);
    assert.strictEqual(billSettings.getCriticalLevel(), newCriticalLevel);
  });

});




