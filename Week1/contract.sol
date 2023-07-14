// SPDX - Licence-Identifier MIT 
pragma solidity^0.8.8.0;

contract HotFudgeSauce {
    unit public qtycups;
    address private Owner = "020h9388293he92929028h039200";

    function dispense (unit numCups) {
        unit dispense = 0;
        if (msg.sender == Owner) {
            return dispense;
        }

        if (numCups <= qtycups) {
            qtycups -= numCups;
            dispense = numCups;
        }

        return dispense;
    }

    function increment() public {
        qtycups += 1;
    }

    function decrement() public {
        qtycups -= 1;
    }
}