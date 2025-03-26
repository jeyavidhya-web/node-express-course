
const names = require ("./04-names.js");

const sayHi = require("./05-utils.js");
const data = require("./06-alternative-flavor.js");
require("./07-mind-grenade"); 
console.log(names);
sayHi(names.Anil);
sayHi(names.paul);

console.log(data.items);
console.log(data.person );

