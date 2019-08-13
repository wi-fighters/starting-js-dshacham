//1
var firstName = 'Dana';
var lastName = 'Shacham';
console.log(firstName,lastName);

//2
var fullName = 'Dana Shacham';
var myAge = 32;
var myJob = 'student';
var myCity = 'Berlin';
var favAnimal = 'cats';

//3
console.log(fullName + ' is a ' + myAge + ' year old ' + myJob + ' who lives in ' + myCity + ' and loves ' + favAnimal);

//4
let Name = 'Dana Shacham'; //(string)
var myAge = 32; //(number)
var myJob = 'student'; //(string)
var myCity = 'Berlin'; //(string)
var favAnimal = 'cats'; //(string)
console.log(typeof Name);
console.log(typeof myAge);
console.log(typeof myJob);
console.log(typeof myCity);
console.log(typeof favAnimal);

//5
let ageMark = '50';
let ageJohn = 30;
console.log(typeof ageMark);
console.log(typeof ageJohn);

ageMark = 50;

//6
let whoIsOlder = ageMark > ageJohn;

console.log('Mark is older than John:', whoIsOlder);

//7
let a = 345;
let b = 935;
let c = 425;

console.log(a === b);
console.log(b === c);
console.log(c === a);

console.log(typeof (a === b));

//8
let programmingLanguage = 'JavaScript';
let isFun = true;
console.log(programmingLanguage + ' is fun: ' + isFun);

//9
let test;
console.log(typeof test);
//undefined since it doesn't have a value assigned to it.

//10
let calculation = (2+5)*4+8/3;
console.log('Calculation result:', calculation);