
// Part A: Pulling values out (destructuring), 40 minutes

const students = [
  { id: 1, name: "Basil",  city: "Karachi",  marks: { math: 82, science: 74 }},
  { id: 2, name: "Asad",  city: "Islamabad", marks: { math: 45, science: 60 }},
  { id: 3, name: "Muhammad Ahmed", city: "Swat",  marks: { math: 91, science: 88 }},
];

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

 const {name,city} = students[0]
 console.log(name)
 console.log(city)
 
//  renaming 

const {name:studentName} = students[0]
console.log(studentName)  

//none

const {nickname = "none"} = students[0]
console.log(nickname)  

// 3. Extract math and science from the nested marks in one line. Then check whether
//  a variable called marks exists. Then rewrite printCard(student)
//  so the parameter is destructured: printCard({ name, city = "Unknown" }). 
// Call it with a student that has no city.

const {marks:{math,science}} = students[0]
console.log(math)  
console.log(science)  
// console.log(marks)   /// not defined

let printCard = ({name,city}) => {
    console.log(`${name} - ${city}`)
}

printCard(students[0])