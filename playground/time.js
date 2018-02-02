const moment = require('moment');

// let date = new Date();
// let months = ['Jan', 'Feb'];
// console.log(date.getMonth());

// let date = moment();
// date.add(16, 'year').subtract(9, 'months');
// console.log(date.format('MMM Do, YYYY'));

let someTimestamp = moment().valueOf();
console.log(someTimestamp);

let createdAt = 1234;
let date = moment(createdAt);
console.log(date.format('h:mm a'));