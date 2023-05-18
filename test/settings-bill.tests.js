describe("The bill with settings factory function", () => {
    it('should set the call cost and sms cost', () => {
        let settingsBill = BillWithSettings();

        settingsBill.setCallCost(1.85);
        assert.equal(1.85, settingsBill.getCallCost());

        let settingsBill2 = BillWithSettings();
        
        settingsBill2.getCallCost(2.75);
        assert.equal(1.85, settingsBill.getCallCost());
    });
    
});