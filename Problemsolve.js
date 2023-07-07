// const string1="abhishek";
// const string2="abhifoo";
// const string3="mintoo";

// const { question } = require("readline-sync");

// let st1length=string1.length;
// let st2length=string2.length;
// let st3length=string3.length;

// if(st1length<st2length && st1length<st3length){
//     console.log(string1 + " is the smallest string");
// }
// else if(st2length<st1length && st2length<st3length){
//     console.log(string2 + " is the smallest string");
// }
// else if(st3length<st1length && st3length<st2length){
//     console.log(string3 + " is the smallest string");
// }
// else{
//     console.log("More thaan 1 string is having equal in length");
// }


// let inputNumber=require("readline-sync");
// let number=Number(inputNumber.question("Enter the number to check for prime or not: "));

// if(number===1){
//     console.log(`${number} is not prime number`);
// }else if(number<1){
//     console.log(`${number} is not a prime number`);
// }
// else{
//     for(let i=2;i<number;i++)
//     {
//         if(number % [i] ===0){
//             var res=number + " is not prime number."
//             break;
//         }else{
//             var res=number + " is a prime number.";
//         }
//     }
// }
// console.log(res);


// const symbol="* ";
// for(let i=0;i<=5;i++)
// {
//     console.log(symbol.repeat(i));
// }
// for(let j=4;j>=1;j--){
//     console.log(symbol.repeat(j));
// }

// let st="Abhishek";

// for(let i=0;i<=st.length;i++)
// {
//     console.log(st.slice(0,i+1));
// }

// function printpattern(st)
// {
//     for(let i=0;i<st.length;i++)
//     {
//         console.log(st.slice(0,i+1))
//     }
// }
// let st="abhishek"
// printpattern(st);


// const inputNumber=require("readline-sync");
// const number=inputNumber.question("Enter the number");
// const firstLetter = number.toString()[0];

// console.log("First letter:", firstLetter);


// let inputNumber=require("readline-sync");
// let n=Number(inputNumber.question("Enter the number: "));
// let fac=1;

// for(let i=n;i>0;i--){
//     fac=fac*i
    
// }
// console.log(fac);

// let inputNumber=require("readline-sync");
// let number=Number(inputNumber.question("Enter the numbers: "));
// // let replacevalue=number.replace(/0/g, "5");
// // replacevalue=parseInt(replacevalue);
// console.log(number.replace(/0/g, "5"));



// int convertFive(int num){
//     let replacedvalue=num.toString().replace(/0/g, '5');
//     replacedvalue=parseInt(replacedvalue);
//     console.log(replacedvalue);
// }
// convertFive()

// function sum(){
    // let inputNumber1=require("readline-sync");
    // let x=Number(inputNumber1.question("Enter the first number: "));
    // let inputNumber2=require("readline-sync");
    // let y=Number(inputNumber2.question("Enter the second number: "));
//     return x+y;
// }
// let result=sum();
// console.log(result);


// let afunction=function()
// {
//     let inputNumber1=require("readline-sync");
//     let x=Number(inputNumber1.question("Enter the first number: "));
//     let inputNumber2=require("readline-sync");
//     let y=Number(inputNumber2.question("Enter the second number: "));
//     console.log(x+y);
// }
// afunction()

const add=() =>{
    let inputNumber1=require("readline-sync");
    x=Number(inputNumber1.question("Enter the first number: "));
    let inputNumber2=require("readline-sync");
    y=Number(inputNumber2.question("Enter the second number: "));
    console.log(x+y);
}
add()