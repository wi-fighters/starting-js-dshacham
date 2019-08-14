// 1
const driveAge = 18;
let yourAge = 16;
const canDrive = (yourAge >= driveAge) ? 'Yes, you can drive! Hope you have a license.' : 'Nope, you\'re too young!';
console.log(canDrive);

// 2
const maxSpeed = '130km';
let currentSpeed = '150km';
const speedCheck = (currentSpeed >= maxSpeed) ? 'You\'re going too fast - slow down!' : `You\'re driving below the speed limit.`;
console.log(speedCheck);

// 3
const legalAge = 21;
let personAge = 20;
const drinkAge = (personAge >= legalAge) ? `Here's some wine.` : `Here's some juice.`;
console.log(drinkAge);

// 4
const student = true;
const isStudent = (student) ? `Ticket costs €5,00.` : `Ticket costs €12,00.`;
console.log(isStudent);

// 5
const morning = true;
const timeOfDay = (morning) ? `Good Morning.` : `Good Evening.`;
console.log(timeOfDay);
