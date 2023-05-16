function calculateBill() {
  
    //  * this function should read the string value entered - split it on a comma.
  const billItems = billString.value.split(",");

  //  * loop over all the entries in the the resulting list
  let total = 0;
  for (let i = 0; i < billItems.length; i++) {
    const billItem = billItems[i].trim(); // remove any whitespace around the item
    //  * check if it is a call or an sms and add the right amount to the overall total
    if (billItem.toLowerCase() === "call") {
      total += 2.75;
    } else if (billItem.toLowerCase() === "sms") {
      total += 0.75;
    }
  }
}
  