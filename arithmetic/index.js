// 1
const stringOne = "this sucks";
console.log(stringOne.length); // 10
console.log(stringOne[1]);
console.log(stringOne[5]);

// 2
const ex2 = "JavaScript";
console.log(ex2.length); // 10
console.log(ex2[0]);
console.log(ex2[4]);

// 3
const ex3 = "I can walk in the park all day!";
console.log(ex3.substring(18, 22));

// 4
const ex4 = "JavaScript";
console.log(ex4.substring(3, 6));

// 5
const ex5 = "Hello World";
console.log(ex5.toUpperCase());

// 6
const ex6 = "Hello Earthling";
console.log(ex6.toLowerCase());

// 7
const ex7 = "nice shoes";
console.log(ex7.includes("l"));
console.log(ex7.includes("n"));

//8
const ex8 = "JavaScript";
console.log(`${ex8[0]}${ex8}${ex8[0]}`);

//9
const ex9 = "JavaScript";
console.log(`${ex9.substring(7)}${ex8}${ex9.substring(7)}`);

//10
const ex10 = "JavaScript";
console.log(ex10.toUpperCase());
console.log(ex10.includes("Java"));

//11
const ex11 = "JavaScript";
console.log(`${ex11[9]}${ex11.substring(1, 9)}${ex11[0]}`);

//12
const firstName = "Dana";
const myCity = "Berlin";

const myHobby = "listening to music";
console.log(
  `My name is ${firstName}, I live in ${myCity} and my hobby is ${myHobby}.`
);

//13
const ex13 = "the quick brown fox";
console.log(ex13.charAt(0).toUpperCase() + ex13.slice(1));
