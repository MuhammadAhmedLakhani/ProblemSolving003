
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



// const students = [
//   { id: 1, name: "Basil",  city: "Karachi",  marks: { math: 82, science: 74 }},
//   { id: 2, name: "Asad",  city: "Islamabad", marks: { math: 45, science: 60 }},
//   { id: 3, name: "Muhammad Ahmed", city: "Swat",  marks: { math: 91, science: 88 }},
// ];

// 4:(a) Combine two arrays with spread. (b) Make a new array with an extra item at the 
// start and at the end, without push or unshift, and confirm the originals are unchanged.
//  (c) Merge defaults and your own settings: predict which value wins when both have theme,
//  then swap the order and predict again.

// -- (a)

// let arr = [1,2,3,4,5];
// let arr1 = [6,7,8,9,10];

// let arr2 = [...arr,...arr1];
// console.log(arr2)

// // -- (b)

// let arr3 = [ 0, ...arr2, 11];
// console.log("altered",arr3)
// console.log( "original",arr2)

// // -- (c)

// const defaults = { theme: "light", size: 14 };
// const mine = { theme: "dark", size: 18 };

// let settings = {...defaults, ...mine} // the last one wins and override the existing propertys 
// console.log(settings)
// settings = {...mine, ...defaults} // the last one wins and override the existing property so "dark" get overriden
// console.log("order altered" , settings)


// 5:(a) From students[0].marks, make a new object without science,
//  using rest. No delete.
//  (b) Predict best and others for
//  const [best, ...others] = [90, 85, 70];.

// --- (a)

// const {science,...rest} = students[0].marks

// console.log(rest)

// // --- (b)

//  const [best, ...others] = [90, 85, 70];
//  console.log(best)   //90
//  console.log(others) //[85,70] 


// Part C: Updating without changing the original, 60 minutes (the core)


// const students = [
//   { id: 1, name: "Basil",  city: "Karachi",  marks: { math: 82, science: 74 }},
//   { id: 2, name: "Asad",  city: "Islamabad", marks: { math: 45, science: 60 }},
//   { id: 3, name: "Muhammad Ahmed", city: "Swat",  marks: { math: 91, science: 88 }},
// ];


//6: Make a copy of students[0] with marks.math set to 90.
// Print both. Prove the original is untouched, and check updated.marks !== students[0].marks.

// const updated =  {...students[0], marks : {...students[0].marks,math:90}}   
// console.log(updated)
// // console.log("original",students[0])
// // console.log(updated)

// console.log(updated.marks !== students[0].marks)

//7: Update Asad’s city to "Johansburg" inside students using map. 
// Check that updated[0] === students[0] is true and updated[1] === students[1] is false.
//  Explain why that’s good.

// let updated = students.map(elem =>{ 
//   if(elem.name === 'Asad'){
//     //copying the asad object only and changing  without affecting the original object
//     return {...elem,city:"Johansburg"}
// }else{
//   return elem
// }
// })


// console.log(updated[0] ===students[0] )  // true
// console.log(updated[1] ===students[1] )  //false

//--why good

//it is a good as we have preserved the original array as it is
//  and only relevant object of the array is altered


//8: Add a new student and remove student 2, both without
//  push, splice, or delete. Print the lengths of the original and the new arrays.

// let updated = students.filter(stu => stu.id !== 2)

// updated = [ ...updated,{id:4,name:"Sarim",city:"Johansburg",marks:{math:0,science:0}}]
// console.log(updated)

// 9: Bug hunt. This function claims not to change its input. Run it, print the original,
//  find the mutation, explain it, and fix it:
// javascript

// const withBonus = (s) => {
//   const copy = { ...s };
//   copy.marks.math += 5;
//   return copy;
// };

//solving bug

// const withBonus = (s) => {
//   const copy = { ...s,marks:{...s.marks,math:s.marks.math + 5}};
//   return copy;
// };

// let student = { id: 1, name: "Basil",  city: "Karachi",  marks: { math: 82, science: 74 }};
// let updated = withBonus(student)
// console.log("updated -->" ,updated)
// console.log("original --->",student)

// //bug gets solved because we create new object (thus a seprate notebook for the nested marks object)

// // copying the whole student object into new one doest not mean that the marks array is also get scopied 
// //stll the nested marks array is pointing towardws the original marks object (same notebook)

// console.log(student.marks === updated.marks)


// Part D: Saving data (JSON and localStorage), 50 minutes


const students = [
  { id: 1, name: "Basil",  city: "Karachi",  marks: { math: 82, science: 74 }},
  { id: 2, name: "Asad",  city: "Islamabad", marks: { math: 45, science: 60 }},
  { id: 3, name: "Muhammad Ahmed", city: "Swat",  marks: { math: 91, science: 88 }},
];



// 10:JSON.stringify(students[0]): print the text and its typeof. 
// Parse it back and check parsed === students[0]. 
// Then predict what survives from { a: undefined, b: () => 1, c: new Date(0),
//  d: NaN, e: [1, undefined] }, and run it. List everything that changed.

// let string = JSON.stringify(students[0]); 

// console.log(string)
// console.log(typeof(string))

//  let parsed = JSON.parse(string)
//  console.log(parsed)
//  console.log(students[0])

// console.log(parsed === students[0])


// // different data behaves differently and gets lost  

//  let test = { 
//   a: undefined,  //lost
//   b: () => 1,    //functions lost
//   c: new Date(0), //converted inti the plain text
//   d: NaN,         //converted to null
//   e: [1, undefined]    //undefined cinverted inti the null as well
// }

// let text = JSON.stringify(test)
// console.log(text)
// let parsed1 = JSON.parse(text)
// console.log("parsed",parsed1)


// the date comes back as plain text and the function is lost


// 11:Write safeParse(text, fallback) that returns the parsed value,
// or fallback if the text is broken.
//  Test: valid JSON, "{bad", "", and null. 
// Watch the last one: predict what a plain JSON.parse(null) gives, 
// and make your function return the fallback in that case.

//--my attempt

// let data = JSON.stringify(students[0])

// let safeParse = (text,fallback) => {
//       try{
//         if(text[text.length - 1]  === "}"){
//           return "fine"
//         }
//       } catch(error) {
//         return fallback
//       }
// }

// console.log(safeParse(data,"never fall"))

//--solution (needs to understand)

const safeParse = (text, fallback) => {
  if (text === null) {
    return fallback;            // nothing was ever saved
  }
  try {
    return JSON.parse(text);    // valid text gives the real data
  } catch (error) {
    return fallback;            // broken or empty text
  }
};

console.log(safeParse('{"a":1}', []));   // { a: 1 }
console.log(safeParse("{bad", []));      // []
console.log(safeParse("", []));          // []
console.log(safeParse(null, []));        // []
console.log(safeParse("0", 99));         // 0   (a real value, not replaced)
console.log(safeParse("false", 99));     // false
console.log(safeParse("null", 99))       // null  (valid JSON text, so it's returned as is)