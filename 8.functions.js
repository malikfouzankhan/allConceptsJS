// Functions in JS
/*
There are 3 types of functions in JS
    1. Simple function (Function Statement/Function Declaration)
    2. Function Expression
    3. Arrow function
    4. Immediately Invoked Function Expression (IIFE)
*/

// 1. Simple function
    function print()
    {
        console.log("Hello World!!");
    }
    function sum(a,b)
    {
        return a+b;
    }

// 2. Function expression
    let a = function (){
        console.log("I am function expression");
    }
    let hello = "Fouzan"
    let b = function hey(hello)
    {
        return `I am ${hello}.`
    }

// 3. Arrow function
    let arr = () =>{
        console.log("This is arrow function");
    }
    let arr2 = (a)=>{
        return `I am ${a}`;
    }

// 4. Immediately invoked Function Expression (IIFE)
    // Can only be used when passed as parameters
    (() => {

    })
    (); //call