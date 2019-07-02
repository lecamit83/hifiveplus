const Mustache = require('mustache');

let result = Mustache.render("Hello {{first}}", {
	first : "Nodejs"
});

console.log(result);