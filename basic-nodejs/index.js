const Mustache = require('mustache');

let result = Mustache.render("Hello {{first}}", {
	first : "Nodejs"
});

console.log(result);

const randomInteger = require('./rand-int');

let rand = randomInteger();
console.log(rand);