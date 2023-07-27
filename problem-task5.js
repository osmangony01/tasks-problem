/*
Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.
*/

const calculator = (n1, n2, op) =>{
    if(op === "+") return n1+n2;
    else if(op === "-") return n1-n2;
    else if(op === "*") return n1*n2;
    else if(op === "/") return n2===0 ? "Can't divide by 0!": n1/n2;
}

const output = calculator(3,5, "*");
console.log(output)