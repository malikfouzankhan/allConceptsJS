// Hoisting in JS
// variables and functions are hoisted depending on their properties

// Variables and Constants
/*
    - 'var' is hoisted but not initialized. Gives 'undefined' as output
    
    - 'let' and 'const' are not hoisted and gives a reference error with message 'cannot be accessed before initialization'
*/
    console.log(a); // undefined
    var a = 10;
    console.log(b); // reference error for no initialization
    let b = 5;

// Functions
/*
    - Simple functions are hoisted and can be used before its declaration/definition

    - Function expression and arrow functions are not hoisted and acts similar to 'let' and 'const'.
*/
    print(); // works fine
    function print()
    {
        console.log("HEYYYY!!!!");
    }
    hey(); // throws reference error
    let hey = function()
    {
        console.log("I am expression");
    }
    hello(); // throws reference error
    let hello = ()=>{
        console.log("HELLOOOOO!!!!");
    }