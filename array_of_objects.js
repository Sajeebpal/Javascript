let employees = [
    {name:'Sajeeb', address: 'Dinajpur', profession: 'Student'},
    {name: 'Satirtho', address: 'Ranirbandar', profession: 'Mechanical stu.'},
    {name: 'Shuvo', address: 'Rangpur', profession: 'Mother board'},
    {name: 'Sreelekha', address: 'Kurigram', profession: 'CSE student'},
]
// console.log(employees);
console.log(employees[0]);
console.log(employees[1].address, employees[2].profession);

// also changing a value
employees[2].name = 'Ahnaf motherboard';
console.log(employees[2].name);

//adding new value to the objects
employees[3].newValue = 'Mufasa';
console.log(employees[3]);


