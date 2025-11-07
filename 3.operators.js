// Operators in JS

/*

1. Arithmetic Operators
2. Assignment Operators
3. Comparison Operators
4. Logical Operators
5. Bitwise Operators
6. Ternary Operators
7. Typeof Operators
8. String Operators
9. Nulling Coalescing & Optional Chaining
10. Spread & Rest Operators

*/

// 1. Arithmetic operators
    let a1 = 10;
    let a2 = 2;
    console.log("add", a1 + a2);
    console.log("sub", a1 - a2);
    console.log("mul", a1 * a2);
    console.log("div", a1 / a2);
    console.log("mod", a1 % a2);
    console.log("pow", a1 ** a2);

// 2. Assignment operator
    let b1 = 10;
    b1 += 10; // addition assignment
    console.log(b1);
    b1 -= 10; // subtraction assignment
    console.log(b1);
    b1 *= 10; // multiplication assignment
    console.log(b1);
    b1 /= 10; // division assignment
    console.log(b1);
    b1 %= 10; // modulo assignment
    console.log(b1);
    b1 **= 10; // exponentiation assignment
    console.log(b1);

// 3. Comparison operator
    let c1 = 10;
    let c2 = 5;
    console.log("Less than : c1 < c2", c1 < c2);
    console.log("Less than or equal to : c1 <= c2", c1 <= c2);
    console.log("Greater than : c1 > c2 ", c1 > c2);
    console.log("Greater than or equal to : c1 >= c2", c1 >= c2);
    console.log("Eqaul to : c1 == c2", c1 == c2);
    console.log("Not equal to : c1 != c2", c1 != c2);
    console.log("Strictly equal to : c1 === c2", c1 === c2);
    console.log("Strictly not equal to : c1 !== c2", c1 !== c2);

// 4. Logical operator
    let d1 = 9;
    let d2 = 10;
    console.log("Logical AND : d1 && d2", d1 && d2);
    console.log("Logical OR : d1 || d2", d1 || d2);
    console.log("Logical NOT : !d1", !d1);

// 5. Bitwise operators
    let e1 = 5;
    let e2 = 10;
    console.log("Bitwise AND : e1 & e2", e1 & e2);
    console.log("Bitwise OR : e1 | e2", e1 | e2);
    console.log("Bitwise XOR : e1 ^ e2", e1 ^ e2);
    console.log("Bitwise NOT : ~e1", ~e1); // equivalent to : ~a = -(a + 1)
    console.log("Bitwise right shift : e1 >> 1", e1 >> 1);
    console.log("Bitwise left shift : e1 << 1", e1 << 1);

// 6. Ternary operator
    // Syntax :
    //    condition ? ifTrue : ifFalse;
    21 > 18 ? console.log("You can vote") : console.log("You cannot vote");

// 7. Typeof operator
    let f1 = "MFK";
    console.log(typeof f1); // prints the datatype of the identifier

// 8. String operators
    // '+'/concatenation operator
    let g1 = "String";
    let g2 = "operators";
    console.log("'+' operator : g1 + g2", g1 + g2);
    // append operator
    let g3 = "Malik";
    g3 += "Fouzan"; // append operator
    console.log(g3);
    
// 9. Nulling Coalescing & Optional Chaining
    // Nulling Coalescing : It returns the right-hand value only when the left-hand value is null or undefined.
    let h1 = null;
    let h2 = h1 ?? "Guest";
    console.log(h2); // "Guest"

    // Optional Chaining : It safely accesses deeply nested properties without causing errors.
    let h3 = { profile: { name: "Fouzan" } };
    console.log(h3.profile?.name); // "Fouzan"
    console.log(h3.address?.city); // undefined (no error!)

// 10. Spread and Rest operator
    // Spread operator : It expands (spreads) elements of an iterable (array, string, object) into individual elements.
    let arr1 = [1, 2, 3];
    let arr2 = [...arr1, 4, 5];
    console.log(arr2); // [1, 2, 3, 4, 5]

    let user = { name: "Fouzan", age: 21 };
    let updatedUser = { ...user, city: "Hyderabad" };
    console.log(updatedUser);

    // Rest operator : It collects multiple values into a single array. (Think opposite of spread.)
    function sum(...nums) {
      return nums.reduce((a, b) => a + b);
    }
    console.log(sum(1, 2, 3, 4)); // 10 ✅ Rest in object destructuring

    let { name, ...details } = { name: "Fouzan", age: 21, city: "Hyderabad" };
    console.log(details); // { age: 21, city: "Hyderabad" }
