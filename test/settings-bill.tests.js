const { describe } = require("mocha");

describe("The bill with settings factory function", () => {
    
    it("should set the call cost", () => {

        let settingsBill = BillWithSettings();
        settingsBill.setCallCost(1.85);
        assert.equal(1.85, settingsBill.getCallCost());

        let settingsBill2 = BillWithSettings();
        settingsBill2.setCallCost(2.75);
        assert.equal(2.75, settingsBill2.getCallCost());
    });

    it("should set the sms cost", () => {

        let settingsBill = BillWithSettings();
        settingsBill.setSmsCost(0.85);
        assert.equal(0.85, settingsBill.getSmsCost());

        let settingsBill2 = BillWithSettings();
        settingsBill2.setSmsCost(0.75);
        assert.equal(0.75, settingsBill2.getSmsCost());
    });

    it("should set the sms and call cost", () => {

        let settingsBill = BillWithSettings();

        settingsBill.setSmsCost(0.85);
        settingsBill.setCallCost(2.75);

        assert.equal(0.85, settingsBill.getSmsCost());
        assert.equal(2.75, settingsBill.getCallCost());

        let settingsBill2 = BillWithSettings();

        settingsBill2.setSmsCost(0.75);
        settingsBill2.setCallCost(2.05);

        assert.equal(0.75, settingsBill2.getSmsCost());
        assert.equal(2.05, settingsBill2.getCallCost());
    });

    it("should be able to set the warning level", () => {

        let settingsBill = BillWithSettings();
        settingsBill.setWarningLevel(20);
        assert.equal(20, settingsBill.getWarningLevel());

        let settingsBill2 = BillWithSettings();
        settingsBill2.setWarningLevel(40);
        assert.equal(40, settingsBill2.getWarningLevel());

    });

    it("should be able to set the critical level", () => {

        let settingsBill = BillWithSettings();
        settingsBill.setCriticalLevel(20);
        assert.equal(20, settingsBill.getCriticalLevel());

        let settingsBill2 = BillWithSettings();
        settingsBill2.setCriticalLevel(40);
        assert.equal(40, settingsBill2.getCriticalLevel());

    });

    it("should be able to set the critical and warning level", () => {

        let settingsBill = BillWithSettings();
        settingsBill.setWarningLevel(30);
        settingsBill.setCriticalLevel(50);

        assert.equal(30, settingsBill.getWarningLevel());
        assert.equal(50, settingsBill.getCriticalLevel());
    });
    
});

describe("use values",() => {
    it("should be able use the call cost set", () => {

        let settingsBill = BillWithSettings();
        settingsBill.setWarningLevel(30);
        settingsBill.setCriticalLevel(50);

        assert.equal(30, settingsBill.getWarningLevel());
        assert.equal(50, settingsBill.getCriticalLevel());
    });

});