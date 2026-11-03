
// Part A: Pulling values out (destructuring), 40 minutes

// const students = [
//   { id: 1, name: "Basil",  city: "Karachi",  marks: { math: 82, science: 74 }},
//   { id: 2, name: "Asad",  city: "Islamabad", marks: { math: 45, science: 60 }},
//   { id: 3, name: "Muhammad Ahmed", city: "Swat",  marks: { math: 91, science: 88 }},
// ];

// 1:Warm-up (10 min). Predict, then run:

// const rename = (s) => { s.name = "Zed"; };
// rename(students[0]);
// console.log(students[0].name);

// --explanation

// students is basically the object we are working on
//  eventhough the object we pass to the function is 'students' makes diffrence in it but due
//  to same botebook being refered the changes gets reflected in the actual students object as well


// 2. From students[0], extract name and city in one line. 
// Then rename name to studentName. Then extract a nickname with the default "none".

//  const {name,city} = students[0]
//  console.log(name)
//  console.log(city)
 
// //  renaming 

// const {name:studentName} = students[0]
// console.log(studentName)  

// //none

// const {nickname = "none"} = students[0]
// console.log(nickname)  

// 3. Extract math and science from the nested marks in one line. Then check whether
//  a variable called marks exists. Then rewrite printCard(student)
//  so the parameter is destructured: printCard({ name, city = "Unknown" }). 
// Call it with a student that has no city.

// const {marks:{math,science}} = students[0]
// console.log(math)  
// console.log(science)  
// // console.log(marks)   /// not defined

// let printCard = ({name,city}) => {
//     console.log(`${name} - ${city}`)
// }

// printCard(students[0])


// Part B: Copying and leaving things out (spread and rest), 30 minutes



const students = [
  { id: 1, name: "Basil",  city: "Karachi",  marks: { math: 82, science: 74 }},
  { id: 2, name: "Asad",  city: "Islamabad", marks: { math: 45, science: 60 }},
  { id: 3, name: "Muhammad Ahmed", city: "Swat",  marks: { math: 91, science: 88 }},
];

// 4:(a) Combine two arrays with spread. (b) Make a new array with an extra item at the 
// start and at the end, without push or unshift, and confirm the originals are unchanged.
//  (c) Merge defaults and your own settings: predict which value wins when both have theme,
//  then swap the order and predict again.

// -- (a)

let arr = [1,2,3,4,5];
let arr1 = [6,7,8,9,10];

let arr2 = [...arr,...arr1];
console.log(arr2)

// -- (b)

let arr3 = [ 0, ...arr2, 11];
console.log("altered",arr3)
console.log( "original",arr2)

// -- (c)

const defaults = { theme: "light", size: 14 };
const mine = { theme: "dark", size: 18 };

let settings = {...defaults, ...mine} // the last one wins and override the existing propertys 
console.log(settings)
settings = {...mine, ...defaults} // the last one wins and override the existing property so "dark" get overriden
console.log("order altered" , settings)