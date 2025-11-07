// for of loop
// used to loop directly through the values of an iterable to an array
let students = ["malik", "fouzan", "khan"];
for (let el of students) {
  if (el == "fouzan") continue;
  console.log(el);
}

// for in loop
// used to loop through the properties(keys) of an object or values
let person = {
  fName: "MFK",
  age: 21,
  isAlive: true,
  money: null,
};
for(let keys in person)
{
    console.log(keys,":", person[keys]);
}