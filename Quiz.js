// let inputNumber=require("readline-sync");
// let number=Number(inputNumber.question("Enter the number to check"));

// if(number>0){
//     console.log("Positive");
// }
// else if(number<0){
//     console.log("Negative");
// }
// else if(number===0){
//     console.log("Zero");
// }



// function checkNumber(A){
//     if(A>0){
//         return "Positive";
//     }
//     else if(A<0){
//         return "Negative";
//     }
//     else{
//         return "Zero";
//     }
// }
// console.log(checkNumber(A));


let inputNumber=require("readline-sync");
let number=Number(inputNumber.question("Enter the number to check for FizzBuzz"));

if(number % 3===0 && number % 5===0){
    console.log("FizzBuzz");
}
else if(number % 3===0){
    console.log("Fizz");
}else if(number % 5===0){
    console.log("Buzz")
}else{
    console.log("It is not number");
}

