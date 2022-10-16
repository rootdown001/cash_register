function checkCashRegister(price, cash, cid) {


//declare change for change due
    let totalChange;
// declare workingChangefor change to still find
    let workingChange;
// declare obj for answer object
    let objAnswer;
// declare workingCid so cid can be changed as we go along
    let workingCid = [];
    workingCid = [...cid];
// declare index for multipleIndex function return
    let index;
// declare array of return objects
    let arrOptions = [
        {status: "INSUFFICIENT_FUNDS", change: []},
        {status: "CLOSED", change: cid},
        {status: "OPEN", change: objAnswer}
    ]

// totalChange = cash - price
    totalChange = cash - price;
// assign totalChange to workingChange to start
    workingChange = totalChange;

// need to assign "multiples" to each coin/cash
// create multipleArr
    let multipleArr = [
        ["ONE HUNDRED", 100],
        ["TWENTY", 20],
        ["TEN", 10],
        ["FIVE", 5],
        ["ONE", 1],
        ["QUARTER", 0.25],
        ["DIME", 0.10],
        ["NICKEL", 0.05],
        ["PENNY", 0.01]
    ]

    // FUNCTION to get sum of workingCid
    function sumCid() {
        let sum = 0
        for (let k = 0; k < workingCid.length; k++) {
            sum += workingCid[k][1];
        }
        return sum
    }

    console.log(sumCid());

    // FUNCTION to cycle thru multipleArr to find biggest multiple
    function multipleFunc (num) {
        for (let i = 0; i < multipleArr.length; i++ ) {
            let multipleIndex;
            // biggest multiple
            if ((num / multipleArr[i][1]) >= 1) {
                multipleIndex = i;
                return multipleIndex;
            }
        }
    }
    // end multipleFunc
    
 

    // FUNCTION to whle loop through cid till workingChange = 0
    function loopRegister(_index) {
        console.log(workingCid[workingCid.length - 1 - _index]);
        /*
        while (workingCid[j][0] == denom[0]) {
            ....
        }
        */
        return "";
    }
    
    
 
    // call multipleFunc to find first multiple
    index = multipleFunc(workingChange);
    
    console.log(loopRegister(index));


// will return obj
    return objAnswer;
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
