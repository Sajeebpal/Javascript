// Describing string in different ways
// let nameMy = 'Sajeeb';
// let name2 = "Chandra";
// let name3 = `Paul`;
// let name4 = new String('SCP');
// console.log(typeof name3);
// console.log(typeof name4);
// console.log(name4);


//String is slightly similar to array
// console.log(nameMy.length);
// console.log(nameMy[0]);
// name3[2] = 'a';  //String is immutable or unchangeable
// console.log(name3);

//Compairing two string(case sensitive like Uppercase/Lowercase and whitespace)
// let myName = '  Sajeeb'
// console.log(myName.toLocaleLowerCase());
// let copyName = 'SAJEEB '
// console.log(copyName.toLocaleLowerCase());
// if (myName.toLocaleUpperCase === copyName.toLocaleUpperCase) {
//     console.log('You have got a new mitaaaa!');
// }
// else{
//     console.log('Sooory! You don\'t match');
// }

// Removing whitespace for comparison
// let yourName = 'SreeleKha  ';
// let enterName = '  Sreelekha';
// console.log(yourName,   enterName);

// if (yourName.trim().toLowerCase() === enterName.trim().toLowerCase()) {
//     console.log('matching!');    
// }
// else{
//     console.log('Not match!');    
// }


let address = 'Ranirbandar';
let address2 = 'Dinajpur';
// console.log(address.slice(0, 4)); //starts from 0 index to 3 index
let friendNames = 'Sajeeb, Satirtho, Shuvo, Kajol';
let descrip = 'What is your degree about'
console.log(friendNames.split(',')); //split the string around comma
let testArray = descrip.split(' '); //split the string around a whitespace and store it in testArray variable
console.log(testArray.join( ' ')); // join the array element by a whitespace

console.log(address + ' ' + address2);
console.log(address.concat(' ').concat(address2));





