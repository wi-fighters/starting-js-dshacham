// 1
const userName = 'dshacham';
console.log('Hello ' + userName + '.');
console.log('Your user name is ' + userName.length + ' letters long.');
console.log('The first letter of your user name is ' + userName[0] + ', the last is ' + userName[userName.length - 1] + '.');
console.log('If I wanted to be funny, I would call you ' + userName.substring(0, 4) + 'moo.');

// 2
const userName2 = 'dshacham superstar';
console.log('Hello ' + userName2 + '.');
console.log('Your user name is ' + userName2.length + ' letters long.');
console.log('The first letter of your user name is ' + userName2[0] + ', the last is ' + userName2[userName2.length - 1] + '.');
console.log('If I wanted to be funny, I would call you ' + userName2.substring(0, 4) + 'moo.');

// 3
const userName3 = ' dshacham superstar ';
console.log('Hello ' + userName3.trim(0, 20) + '.');
console.log('Your user name is ' + userName3.length + ' letters long.');
console.log('The first letter of your user name is ' + userName3[1] + ', the last is ' + userName3[userName3.length - 2] + '.');
console.log('If I wanted to be funny, I would call you ' + userName3.substring(1, 5) + 'moo.');
