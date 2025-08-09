//primitive data type (number,  string, boolean) stored data in different storage

let myAge = 21;
let hisAge = myAge;
myAge = 20;  // unchanged the hisAge variable

// console.log(myAge)
// console.log(hisAge);

let nameMy = 'Sajeeb paul';
let hisName = nameMy;
hisName = 'Satirtho'

// console.log(nameMy);
// console.log(hisName);

// But for non-Primitive types like array, objects store data in one storage and then use it

let ages = [34, 32, 23, 45, 22];
let ages2 = ages;
ages.pop(); // both variable will change the value
ages2.unshift(100);
// console.log(ages);
// console.log(ages2);


//to fix it
let marks = [55, 43, 54, 56, 14];
// let copyMarks = [];

//First way
// for(let mark of marks){
//     copyMarks.push(mark);
// }

//second way
// let copyMarks = Array.from(marks)

//third method
let copyMarks = [...marks];
copyMarks.unshift(100);

console.log(marks);
console.log(copyMarks);

