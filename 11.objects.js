// Objects in JS
    // stores data in key:value pairs

let person = {
    name : "MFK",
    age : 21,
    isAlive : true,
}
    // Read
        console.log(person.name);
    // Create
        person.isSleeping = null;
    // Update
        person.age = 25;
    // Delete
        delete person.isSleeping;



// Object Methods
    // 1. Object.entries() method
    let person = {
      fName: "MFK",
      age: 21,
      isAlive: true,
    };
    console.log(Object.entries(person));
    // converts the properties of object into a multidimensional array
    
    // 2. Object.keys() method
    let user = {
        fName : "MFK",
        age : 41,
        city : "HYD"
    };
    console.log(Object.keys(user));
    // returns an array of keys of the objects
    
    // 3. Object.values() method
    let student = {
        name : "Abdullah",
        roll : 5,
        school : "KPIS"
    };
    console.log(Object.values(student));
    
    // 4. Object.freeze() method
    let newUser = {
        name : "Fawaz",
        profession : "Instructor",
        place : "CFI"
    };
    Object.freeze(newUser);
    newUser.phone = 9391000000;
    newUser.place = "HYD";
    console.log(Object.isFrozen(newUser));
    // freezes an object so that you cannot add, remove or update a property
    // it makes the object immutable
    
    // 5. Object.isFrozen() method
    let newUser2 = {
        p1 : "Hi",
        p2 : 23,
        p3 : true
    };
    console.log(Object.isFrozen(newUser2));
    // checks if an object is frozen or not and returns a boolean value