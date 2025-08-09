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
const statement = 'Hey dear immediate, fuck you'
let words = statement.split(' ');
console.log(words);
let reversed = '';
for(let i = 0; i< words.length; i++){
    reversed = words[i] + ' ' + reversed;
}

console.log(reversed);

