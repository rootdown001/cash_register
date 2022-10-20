function checkCashRegister(price, cash, cid) {

//declare change for change due
    let totalChange;
// declare workingChangefor change to still find
    let workingChange;
// declare remove variable for int mult to subtract from each multiple
    let removeInt;
// declare remove variable for int $amt to subtract from each multiple
    let removeAmt;    
// declare obj for answer object
    let objAnswer;
// declare objChange for change object
    let objChange = "finish this";
// declare workingCid so cid can be changed as we go along
    
    //console.log(test)
    let workingCid = cid.map(arr => arr.slice());
    workingCid = workingCid.reverse();
    //console.log(workingCid);
// declare index for multipleIndex function return
    let index;
// declare array of return objects
    let arrOptions = [
        {status: "INSUFFICIENT_FUNDS", change: []},
        {status: "CLOSED", change: cid},
        {status: "OPEN", change: objChange}
    ]

// totalChange = cash - price
    totalChange = cash - price;
// assign totalChange to workingChange to start
    workingChange = totalChange;
// round to 2 decimals for clean math
    workingChange = workingChange.toFixed(2);
   

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
        // while still change to calculate AND not past end of cid array...
        index = multipleFunc(workingChange);
        while ((workingChange > 0) && ((index) < workingCid.length)) {

            // see if this multiple has change to give
            
            if (((workingCid[index])[1]) >= workingChange) {

                // decrease cid denomination by 1 coin
                removeInt = Math.floor(((((workingCid[index])[1]).toFixed(2))/((multipleArr[index][1]).toFixed(2))));


                removeAmt = ((removeInt* ((multipleArr[index][1]))).toFixed(2));//(multipleArr[index][1]).toFixed(2);

                ((workingCid[index])[1]) = ((workingCid[index])[1]) - removeAmt;

                // decrease working change by 1 coin

                workingChange = workingChange - removeAmt;
                workingChange = workingChange.toFixed(2);
                
                index = multipleFunc(workingChange);
            } else {
                index++;
            }
        }
        //while loop ended

        // see if workingChange is 0 or not
        // if all change given & more left in drawer
        if (workingChange == 0 && (sumCid() > 0)) {
            objAnswer = arrOptions[2];
        } else if (workingChange == 0 && (sumCid() == 0)) {
            //console.log(test);
            objAnswer = arrOptions[1];
        } else if (workingChange > 0) {
            objAnswer = arrOptions[0];
            console.log("workingChange>0: " + workingChange);
        } else {
            objAnswer = arrOptions[0];
            vonsole.log("end if...else");
        }
        
    }

// will return obj
    console.log(objAnswer);
    return objAnswer;
  }
  
  // (WORKS- FINISH){status: "OPEN", change: [["QUARTER", 0.5]]}
  //checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  
  // {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}
  //checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])

  // WORKS {status: "INSUFFICIENT_FUNDS", change: []} 
  //checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

  // WORKS {status: "INSUFFICIENT_FUNDS", change: []}
  //checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

  // WORKS {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}
  //checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
