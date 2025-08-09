//Declaring an object

let course = {
    tittle: 'CSE 101',  // key: value, always stay double
    instructor: 'Nitu Maam',
    classPerWeek: 3,
    isSessional: false,
    referenceBooks: {
        book1: 'Computer Basics',
        book2: 'Youtube'
    }

}

// console.log(course);
// Dot notation for accessing object property value
// console.log(course.instructor); // Not valid for object name contained space, colon, underscore etc

// bracket notation
// console.log(course['isSessional']);


//Changing the property value of an object
// course.classPerWeek = 10;
// course.referenceBooks = ['Thermal Engineering', 'Discrete mathematics']
// course['instructor'] = 5;
// console.log(course);


let person1 = {
    isMarried: false,
    salary: 10000,
    age: 21,
    address: 'Dinajpur',
}

console.log(person1);
console.log(course);

