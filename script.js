function checkCashRegister(price, cash, cid) {
    let change;
// declare obj for answer object
    let objAnswer;
// declare array of return objects
    let arrOptions = [
        {status: "INSUFFICIENT_FUNDS", change: []},
        {status: "CLOSED", change: cid},
        {status: "OPEN", change: objAnswer}
    ]

// change = cash - price
    change = cash - price;





// will return obj
    return objAnswer;
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
