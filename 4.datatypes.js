// Datatypes in JS
/*
There are two types of datatypes in JS
    1. Primitive
    2. Non-primitive
*/
/*
    // Primitive Datatypes (Linear and single values)
        -> String : "HI", 'HELLO', `HEY`
        -> Number : 5, 2.5, -9.8
        -> Boolean : true, false
        -> BigInt : 123456789987654321n
        -> Null : let a = null (denotes an empty value)
        -> Undefined : let a; let a = undefined; (denotes uninitialized value)
*/
        let a1 = "HELLO";
        let a2 = 21;
        let a3 = true;
        let a4 = 123344567898987654321n;
        let a5 = null;
        let a6 = undefined;
/*
    // Non-primitive Datatypes (Non-linear and multiple types/values)
        -> Object :
            let person = {
            name : "MFK",
            age : 21,
            isAlive : true,
            isSleeping : null,
            money : undefined
            };
        -> Arrays : ['hello', 21, true, null, undefined]
*/
        let b1 = {
            name : "MFK",
            age : 21,
            isAlive : true
        };
        let b2 = ["MFK", true, 21, null]