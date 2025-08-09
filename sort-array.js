let num = [3,0,6,8,3,5,7];

num.sort(); // by default sort the array in ascending order
console.log(num);

// js sort the number like string

const num2 = [12,100,32,52, 15, 300, 259];
num2.sort();
console.log(num2);

//fix it
console.log(num2.sort(function (a,b){ return a-b ;}));  // ascending order
console.log(num2.sort(function(a,b){ return b-a} )); // descending Order


const payers = ['Satirtho', 'Sreelekha', 'Christian', 'Alamin']  // first word ascending order
console.log(payers.sort());


