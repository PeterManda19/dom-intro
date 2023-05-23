function BillWithSettings() {
  var theCallCost = 0;
  var theSmsCost = 0;
  var theWarningLevel = 0;
  var theCriticalLevel = 0;

  var callCostTotal = 0;
  var smsCostTotal = 0;
  

  function setCallCost(callCost) {
    theCallCost = callCost;
  
    
  }

  function getCallCost() {
    return theCallCost;
  }

  function setSmsCost(smsCost) {
    theSmsCost = smsCost;
  }

  function getSmsCost() {
    return theSmsCost;
  }

  function setWarningLevel(warningLevel) {
    theWarningLevel = warningLevel;
  }

  function getWarningLevel() {
    return theWarningLevel;
  }

  function setCriticalLevel(criticalLevel) {
    theCriticalLevel = criticalLevel;
  }

  function getCriticalLevel() {
    return theCriticalLevel;
  }
  
  function makeCall() {
    if(!hasReachedCriticalLevel()){
      callCostTotal += theCallCost
    }
    
  }

  function sendSms() {
    if(!hasReachedCriticalLevel()){
      smsCostTotal += theSmsCost
    }
  }

  function getTotalCost() {
    return callCostTotal + smsCostTotal;
  }

  function getTotalCallCost() {
    return callCostTotal;
  }

  function getTotalSmsCost() {
    return smsCostTotal;
  }

  function hasReachedCriticalLevel(){
    return getTotalCost() >= getCriticalLevel();
  }

  function hasReachedWarningLevel(){
    return getTotalCost() >= getWarningLevel() & getTotalCost() < getCriticalLevel();
  }

  function criticalTotalClassName(){
    if (hasReachedCriticalLevel()){
      return "danger";
    } 
  }

  function warningTotalClassName(){
    if (hasReachedWarningLevel()){
      return "warning";
    }
  }

  function removeWarning() {
    if (getTotalCost() < getWarningLevel()){
      return "warning";
    }
  }

  function removeDanger() {
    if (getTotalCost() < getCriticalLevel()){
      return "danger";
    }
  }
  
  return {
    setCallCost,
    getCallCost,
    setSmsCost,
    getSmsCost,
    setWarningLevel,
    getWarningLevel,
    setCriticalLevel,
    getCriticalLevel,
    makeCall,
    sendSms,
    getTotalCost,
    getTotalCallCost,
    getTotalSmsCost,
    hasReachedCriticalLevel,
    hasReachedWarningLevel,
    criticalTotalClassName,
    warningTotalClassName,
    removeWarning,
    removeDanger
  }
}
