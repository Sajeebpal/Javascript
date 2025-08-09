let num = [
    [12, 34, 42, 76, 89],
    [566, 45, 67, 24, 65],
    [24, 45, 78, 324, 34]
]

console.log(num);
console.log(num[1]);
console.log('Second array\'s 1st value = ' + num[1][0]); // 2nd array first value

num[2].pop();
num[2].push(20);
console.log(num[2]);

num[0][2] = 100;
console.log(num);






