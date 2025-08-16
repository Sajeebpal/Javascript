// converting inch to feet

// function inchToFeet(inch){
//     const feetInt = parseInt(inch/12);
//     const inchRemains = inch % 12;
//     const result = 'Height: '+ feetInt + ' Feet ' + inchRemains + ' Inch'
//     return result;
// }
// const height = inchToFeet(76);
// console.log(height);

// leap year

// function isLeapYear(years){
//     const result = [];
//     for(let year of years){

//         if (year% 400 ===0 && year % 4 ===0) {
//             result.push(true);
//         }
//         else if(year %4 === 0 && year % 100 !== 0){
//             result.push(true);
//         }
//         else{
//             result.push(false);
//         }
//     }
//     return result;
// }
// const years = [1000, 1900, 2024, 2046, 1600, 1604, 1612]
// let result = isLeapYear(years);
// console.log(result);

// average of even number

// function avgOfEvens( numbers ){
//     let sum = 0, count = 0;
//     for(let num of numbers){
//         if (num%2 === 0) {
//             sum +=num;
//             count++;
//             // console.log(num);
//         }        
//     }
//     const result = sum/count;
//     return result;
// }
// const numbers = [34, 54, 13, 67, 87, 34, 90]
// console.log(numbers);

// let result = avgOfEvens(numbers);
// console.log('Average of even numbers: ' + result);


// Removing duplicate values of an array

function duplicateArray(input){
    let pureValue = [];
    for (let value of input){
        let Lowercase = value.toLowerCase().trim();
        if (pureValue.includes(Lowercase) === false) {
            pureValue.push(Lowercase);            
        }
    }
    return pureValue;
}
let havingCopyValue = ['sajeeb ', 'Shuvo', 'satirtho', 'sreelekha', 'sajeeb', 'shuvo', 'SATirtho'];
const result = duplicateArray(havingCopyValue);
console.log(result);





























































