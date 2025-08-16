//Function declaration
// function myFunction(num1, num2){
//     let sum = num1 + num2;
//     console.log('Sum is = '+ sum);
    // return sum;
    
// }
// Function calling
// myFunction(15,25);
// const total = myFunction(50, 21);
// console.log(total);


// function return

// function myFunction(num){
//     let sum = 0;
//     for(let number of num){
//         sum+=number;
//     }
//     return sum; // when the code hits return keyword. the function will not execute any more code
// }
// let array = [2, 43, 34, 56, 32] ;
// let output = myFunction(array);
// console.log(output);


// sum of even numbers

// function evenSum(numbersArray){
//     let sum = 0;
//     let evenArray = [];
//     for(let number of numbersArray){
//         // console.log(number);
//         if (number%2 === 0) {
//             sum += number;
//             evenArray.push(number);            
//         }
        
//     }
//     console.log(evenArray);
//     return sum;

// }

// const numbersArray = [23, 46, 43, 89, 12, 18];
// console.log(numbersArray);
// let SumOfEvens = evenSum(numbersArray);

// console.log('Sum of the even Numbers is = ', SumOfEvens);


/*************FUNCTION PRACTICE TASK************* */

//Take four parameters. Multiply the four numbers and then return the result

// function multiplyNum(num1, num2, num3, num4){
//     return num1*num2*num3*num4;
// }
// const result = multiplyNum(2,3,4,5)
// console.log(result);



//Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

// function oddEven(number){
//     if (number%2 === 0) {
//         const result = number/2;
//         return result;
//     }
//     return number*2;
// }
// let result = oddEven(22);
// console.log(result);


//Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

/* function make_avg(numberArray, arrayLength){
    let sum = 0;
    for(let num of numberArray){
        sum+= num;
    }
    const result = sum/arrayLength;
    return result;
}
const numbers = [3, 5, 7 , 8 , 2, 11]
let average = make_avg(numbers, numbers.length);
console.log(average);
*/

//Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

// function Zero(binaryString){
//     let totalzero = 0;
//     for(let binary of binaryString){
//         if(binary == '0'){
//             totalzero++;
//         }
//     }
//     console.log('total binary zero', totalzero);;    
// }
// let binaryString = '100100100011010100'
// Zero(binaryString);


//Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

// function odd_even(number){
//     if (number%2 === 0) {
//         return 'Even';
//     }
//     return 'Odd';
// }
// let evenOdd = odd_even(0);
// console.log(evenOdd);


