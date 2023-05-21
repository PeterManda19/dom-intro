// const { describe } = require("mocha");

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

        settingsBill.setCallCost(2.25);
        settingsBill.setSmsCost(0.85);
        settingsBill.setCriticalLevel(10.00);

        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();

        assert.equal(6.75, settingsBill.getTotalCost());
        assert.equal(6.75, settingsBill.getTotalCallCost());
        assert.equal(0.00, settingsBill.getTotalSmsCost());
    

        
    });

    it("should be able use the call cost set for 2 calls at 1.35 each", () => {

        let settingsBill = BillWithSettings();

        settingsBill.setCallCost(1.35);
        settingsBill.setSmsCost(0.85);
        settingsBill.setCriticalLevel(10.00);

        settingsBill.makeCall();
        settingsBill.makeCall();

        assert.equal(2.70, settingsBill.getTotalCost());
        assert.equal(2.70, settingsBill.getTotalCallCost());
        assert.equal(0.00, settingsBill.getTotalSmsCost()); 
    });

    it("should be able use the sms cost set for 2 sms at 0.85 each", () => {

        let settingsBill = BillWithSettings();

        settingsBill.setCallCost(1.35);
        settingsBill.setSmsCost(0.85);
        settingsBill.setCriticalLevel(10.00);

        settingsBill.sendSms();
        settingsBill.sendSms();

        assert.equal(1.70, settingsBill.getTotalCost());
        assert.equal(0.00, settingsBill.getTotalCallCost());
        assert.equal(1.70, settingsBill.getTotalSmsCost()); 
    });

    it("should be able use the sms cost set for 2 sms at 0.85 each and make 1 call at 1.35", () => {

        let settingsBill = BillWithSettings();

        settingsBill.setCallCost(1.35);
        settingsBill.setSmsCost(0.85);
        settingsBill.setCriticalLevel(10.00);

        settingsBill.sendSms();
        settingsBill.sendSms();
        settingsBill.makeCall();

        assert.equal(3.05, settingsBill.getTotalCost());
        assert.equal(1.35, settingsBill.getTotalCallCost());
        assert.equal(1.70, settingsBill.getTotalSmsCost()); 
    });

});

describe("warning & critical level", () =>{
    it("it should return a class name of 'warning' if warning level is reached", () => {
        let settingsBill = BillWithSettings();

        settingsBill.setCallCost(1.35);
        settingsBill.setSmsCost(0.85);
        settingsBill.setWarningLevel(5);
        settingsBill.setCriticalLevel(10);

        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();

        assert.equal("warning",settingsBill.totalClassName());
        assert.equal(5.40, settingsBill.getTotalCallCost());
    });

    it("it should return a class name of 'danger' if critical level is reached", () => {
        let settingsBill = BillWithSettings();

        settingsBill.setCallCost(2.50);
        settingsBill.setSmsCost(0.85);
        settingsBill.setCriticalLevel(10.00);

        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();

        assert.equal("danger",settingsBill.totalClassName());
        assert.equal(10.00, settingsBill.getTotalCallCost());
    });

    it("it should stop the Total Call cost from increasing when the critical level is reached", () => {
        let settingsBill = BillWithSettings();

        settingsBill.setCallCost(2.50);
        settingsBill.setSmsCost(0.85);
        settingsBill.setCriticalLevel(10.00);

        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();

        assert.equal("danger",settingsBill.totalClassName());
        assert.equal(10.00, settingsBill.getTotalCallCost());
    });

    it("it should allow the total to increase after reaching the critical level and then upping the previous critical level", () => {
        let settingsBill = BillWithSettings();

        settingsBill.setCallCost(2.50);
        settingsBill.setSmsCost(0.85);
        settingsBill.setCriticalLevel(10.00);

        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();

        assert.equal("danger",settingsBill.totalClassName());
        assert.equal(10.00, settingsBill.getTotalCallCost());

        settingsBill.setCriticalLevel(20.00);

        assert.equal("warning",settingsBill.totalClassName());
        settingsBill.makeCall();
        settingsBill.makeCall();
        assert.equal(15.00, settingsBill.getTotalCallCost());

    });

});