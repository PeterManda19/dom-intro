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
    
});