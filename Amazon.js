// replace 0 with 5

// let inputNumber=require("readline-sync");
// let originalValue =inputNumber.question("enter the integer: ");
// let replacedValue = originalValue.toString().replace(/0/g, '5');
// replacedValue = parseInt(replacedValue);

// console.log(replacedValue);

function sum(){
    let inputNumber1=require("readline-sync");
    let x=Number(inputNumber1.question("Enter the first number: "));
    let inputNumber2=require("readline-sync");
    let y=Number(inputNumber2.question("Enter the second number: "));
    return x+y;
}
let result=sum();
console.log(result);