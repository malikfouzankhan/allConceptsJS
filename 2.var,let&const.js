// variables and constants in JS
/*
Variables in JS are those memory allocations which can be rewritten/overwritten. In other words their value can be changed.

Constants in JS are those memory allocations which cannot be rewritten/overwritten. In other words their value cannot be changed once assigned.
*/

var a = "This is var";
let b = "This is let";
const c = "This is const";

/*
- Scoping in JS
    (NOTE : Global scoping works the same for everyone and can be accessed anywhere.)

    - 'var' has functional scoping which means once declared it can be used anywhere in the function.

    - 'let' has block scoping which means a variable declared using let inside a block cannot be accessed outside it.

    - 'const' has block scoping which means a variable declared using let inside a block cannot be accessed outside it.
*/

function print()
{
    var a1 = "var outside local block";
    let a2 = "let outside local block";
    const a3 = "const outside local block";
    {
        var b1 = "var inside local block";
        let b2 = "let inside local block";
        const b3 = "const inside local block";
    }
    console.log(a1, a2, a3); // prints everything
    // console.log(b1, b2, b3); // only b1 and gives error for the rest
}
print();

/*
Redeclaration vs Reassignment

- 'var' can be redeclared while reassigning
- 'let' cannot be redeclared while reassigning
*/

var c1 = 1;
let c1 = 1;
var c1 = 5; // works fine
// let c1 = 10; // throws an error