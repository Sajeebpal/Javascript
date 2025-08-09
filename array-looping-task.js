//Write a JavaScript code to reverse the array colors without using the reverse method.
// const colors = ['red', 'blue', 'green', 'yellow', 'orange']
// let reverseColor =[];
// for(let i = 0; i<colors.length; i++){
//     reverseColor.unshift(colors[i]);

// }

// console.log(reverseColor);
// console.log(colors.reverse()); //using methode


//Write a JavaScript code to get the even numbers from an array using any looping technique.
// const numbers = [12, 98, 5, 41, 23, 78, 46];
// let even = [];

// for(let i = 0; i<numbers.length; i++){

//     let number = numbers[i]
//     if (numbers[i] %2 == 0){
//         even.push(numbers[i]);
//     } 
// }
// console.log(even);

//Use a for...of loop to concatenate all the elements of an array into a single string.

// var numbers = ['Tom', 'Tim', 'Tin', 'Tik']
// let binded = '';
// for(let i = 0; i < numbers.length; i++){
//     binded += numbers[i] + ' ';
// }

// console.log(binded);



//Reverse the words of a sentence. Only the position of the word will be reversed. check out the output
// const statement = 'Hey dear immediate, fuck you'
// let words = statement.split(' ');
// console.log(words);
// let reversed = '';
// for(let i = 0; i< words.length; i++){
//     reversed = words[i] + ' ' + reversed;
// }

// console.log(reversed);

//Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.

// let sampleArray = [1, 2, 3, 4];
// let copyArray = [...sampleArray];
// copyArray[0] = 99;
// console.log(copyArray);
// console.log(sampleArray);

//Given an array of student objects, print each student’s name and marks.

// let students = [
//   { name: "John", marks: 85 },
//   { name: "Alice", marks: 90 }
// ]
// console.log(students[0].name,'Scored ', students[0].marks);
// console.log(students[1].name,'Scored ', students[1].marks);


//Given a 2D array, update the value at second row first item to 99 and print the updated array.

let arrayOfArrays = [
  [1, 2],
  [3, 4],
  [5, 6]
]

arrayOfArrays[1][0]= 99;
console.log(arrayOfArrays);
