function checkCashRegister(price, cash, cid) {
    let x;

//declare change for change due
    let totalChange;
// declare workingChangefor change to still find
    let workingChange;
// declare obj for answer object
    let objAnswer;
// declare objChange for change object
    let objChange = "finish this";
// declare workingCid so cid can be changed as we go along
    let workingCid = [];
    workingCid = [...cid];
// declare index for multipleIndex function return
    let index;
// declare array of return objects
    let arrOptions = [
        {status: "INSUFFICIENT_FUNDS", change: []},
        {status: "CLOSED", change: cid},
        {status: "OPEN", change: objChange}
    ]

// totalChange = cash - price
    //console.log("initial cash" + cash);
    //console.log("initial price" + price);
    totalChange = cash - price;
    // console.log("initial totalChange" + totalChange);
// assign totalChange to workingChange to start
    workingChange = totalChange;

// round to 2 decimals for clean math
    x = workingChange.toFixed(2);
    workingChange = x;


    //console.log("initial workingChange" + workingChange);

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

    // console.log(sumCid());

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
    

    
// *******  start algorhythm  ********

    

    // see if insufficient funds before starting to loop through array
    if (workingChange > sumCid()) {
        // assign insufficient funds object
        objAnswer = arrOptions[0];
    } else {
        // while still change to calculate AND not past end (reverse) of cid array...
        index = multipleFunc(workingChange);
        while ((workingChange > 0) && ((workingCid.length - 1 - index) >= 0)) {
            console.log("start loop");

            //console.log("multiple: " + (workingCid[workingCid.length - 1 - index]))
            //console.log("cid index: " + (workingCid.length - 1 - index))
            // see if this multiple has change to give
            
            if (((workingCid[workingCid.length - 1 - index])[1]) >= workingChange) {
                console.log("enters if stmt");
                // decrease cid denomination by 1 coin
                (workingCid[workingCid.length - 1 - index])[1] = ((workingCid[workingCid.length - 1 - index])[1]).toFixed(2) - (multipleArr[index][1]).toFixed(2);
                console.log(workingCid);
                // decrease working change by 1 coin
                // console.log("workingChange before decrease: " + workingChange);
                // console.log("amt subtracted: " + multipleArr[index][1]);
                workingChange = workingChange - (multipleArr[index][1]);
                x = workingChange.toFixed(2);
                workingChange = x;
                console.log("workingChange after decrease: " + workingChange);
                index = multipleFunc(workingChange);
            } else {
                console.log("before index++: " + index);
                index++;
                console.log("after index++: " + index);
            }
        }
        //while loop ended

        // see if workingChange is 0 or not
        // if all change given & more left in drawer
        if (workingChange == 0 && (sumCid() > 0)) {
            objAnswer = arrOptions[2];
        } 
        
        else if (workingChange == 0 && (sumCid() = 0)) {
            objAnswer = arrOptions[1];
        } else {
            objAnswer = arrOptions[0];
        }
        
       

    }




// will return obj
    console.log(objAnswer);
    return objAnswer;
  }
  
  // {status: "OPEN", change: [["QUARTER", 0.5]]}
  //checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  
  // {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}
  //checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])

  // WORKS {status: "INSUFFICIENT_FUNDS", change: []} 
  //checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

  // {status: "INSUFFICIENT_FUNDS", change: []}
  checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

  // {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}
  //checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
