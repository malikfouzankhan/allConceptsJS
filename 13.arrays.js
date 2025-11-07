// Arrays in JS
    // stores multiples values in a variables
    // uses indices and starts from 0

let arr = [1,2,4,true, null];

    // Read
    console.log(arr[0]);
    // Create
    arr[5] = "hello";
    // Update
    arr[0] = 100;
    // delete
    delete arr[0];

// Array methods
// 1. at() method
    let arr2 = ["hi","hello","bye"];
    console.log(arr.at(0));
    // similar to console.log(arr[0])
    
// 2. concat() method
    let str1 = ["I","am"];
    let str2 = ["Malik","Fouzan"];
    console.log(str1.concat(str2));
    // merges the two arrays in the order [str1, str2]
    // str1 + str2 gives I,amMalik,Fouzan which means it removes the array structure from the arrays

// 3. fill() method
    let fruits = ["Apple","Mango","Orange"];
    console.log(fruits.fill("PineApple"));
    // replaces all the elements with given argument

// 4. indexOf() method
    let nums = ["one","two","three","four"];
    console.log(nums.indexOf("three"));
    // returns the index of the given argument and returns -1 if the value does not exist

// 5. lastIndexOf() method
    let arr3 = [10,20,30,10];
    console.log(arr1.lastIndexOf(10));
    // returns index of the given argument from the back and returns -1 if the value does not exist

// 6. length property
    let arr4 = [1,2,3,4,5,6];
    console.log(arr2.length);
    // returns the count of total number of elements

// 7. push() method
    let arr5 = [10,20,30];
    // console.log(arr3.push(50));
    arr3.push(50);
    console.log(arr3);
    // adds the argument to the last of the array

// 8. pop() method
    let arr6 = [1,2,3,4];
    console.log(arr4.pop());
    // removes and returns the last element of the array

// 9. unshift() method
    let arr7 = [1,2,3,4];
    arr5.unshift(0);
    console.log(arr5);
    // adds an element at the beginning of the array

// 10. shift() method
    let arr8 = [0,1,2,3,4];
    console.log(arr6.shift());
    // removes and returns an element from the beginning

// 11. includes() method
    let arr9 = ["saboor","rayyan","kaif"];
    console.log(arr1.includes("rayyan"));
    // returns a boolean if the argument exists in the array

// 12. join() method
    let arr10 = ["saboor","rayyan","kaif"];
    console.log(arr2.join());
    // returns a string concatenated by the given argumnent. If no argument passed then uses comma

// 13. reverse() method
    let arr11 = [56,43,78,88,3,24,895,21,634];
    console.log(arr3.reverse());
    // returns a reversed array

// 14. sort() method
    let arr12 = [10,9,8,7,6,5,4,3,2,1];
    console.log(arr4.sort((a,b) => a - b));
    // sorts the array in place when a - b for ascending order and b - a for descending order

// 15. flat() method
    let arr13 = ["hello","hi",["bye","test"],"ok"];
    console.log(arr5.flat());
    // converts multi dimensional array into single dimensional array

// 16. Array.of() method
    let output = Array.of("hi",["hello",21],12,54,false);
    console.log(output);
    // creates an array with the given arguments

// 17. every() method
    let arr14 = [2,4,6,8];
    console.log(arr6.every((x) => x > 2));

    // (x) => x > 2 === (x) => {return x > 2} === function test(x) {return x > 2} === text(x) => x > 2

    // checks if every element in the array passes a test (returns true/false)
    // Returns true if all elements pass the condition, otherwise false

// 18. find() method
    let arr15 = [2,3,5,6,7,8,9];
    console.log(arr7.find((x) => x % 4 == 0));
    // returns the first element that satisfies a condition.
    // returns the element itself or undefined if not found

// 19. findIndex() method
    let arr16 = [2,4,6,8,10];
    console.log(arr8.findIndex((x) => x % 2 == 0));
    // returns the index of the first element that satisfies a condition
    // returns index number or -1 if not found

// 20. forEach()
    let arr17 = ["kaif","saboor","rayyan","kamran"];
    arr9.forEach((x) => {
        console.log(x);
    })
    // executes a function for each element
    // return value : undefined 
    // chainable : No
    // changes original array : No
    // common use : logging, saving data
    // forEach Just loops - does not return anything

// 21. map() method
    let arr18 = [1,2,3,4,5,6,7,8,9,0];
    let new_arr = arr1.map((x) => x * 2).find((x) => x % 8 == 0);
    console.log(new_arr);
    // transforms each element and returns a new array
    // return value : new array
    // chainable : yes
    // changes original array : yes
    // common use case : creating new arrays
    // creates a new array with modified values and returns in a new array by default

// 22. filter() method
    let arr19 = [10,20,30,40,50];
    console.log(arr2.filter((x) => x > 30));
    let students = [
        {
            fullName : "Fouzan",
            age : 21,
            college : "MECS"
        },
        {
            fullName : "Rupjith",
            age : 20,
            college : "Drop"
        },
        {
            fullName : "Abdullah",
            age : 22,
            college : "Drop"
        }
    ]
    console.log(students.filter((x) => x.age > 21));
    // creates a new array filled with elements that pass a test(a condition you define in a function)
    // It does not change the original array

// 23. slice() method
    let arr20 = [1,2,3,4,5,6,7,8,9,10];
    console.log(arr3.slice(5,9));
    // used to copy or extract a portion of an array(or string) wihtout changing the original array

// 24. some() method
    let arr21 = [1,2,3,4,5,6,7,8,9];
    console.log(arr4.every((x) => x > 7));
    console.log(arr4.some((x) => x > 7));
    // checks if at least one of the elements in the array passes a test
    // returns true if any one element passes the test and returns false if all fails to pass the test

// 25. reduce() method
    let arr22 = ['H','E','L','L','O'];
    console.log(arr5.reduce((acc, cur) => 
    {
        return acc + cur;
    }, ""));
    // runs a function on each element of an array to reduce it to a single value(like sum, product or combined result)
    // It has 3 parameters by default
    // 1. accumulator -> stores the previous step
    // 2. currentValue -> current array element
    // 3. initialValue -> starting value

// 26. reduceRight() method
    let arr23 = ['H','E','L','L','O'];
    console.log(arr5.reduceRight((acc, cur) => 
    {
        return acc + cur;
    }, ""));
    // same as reduce() method but does the job from end to start