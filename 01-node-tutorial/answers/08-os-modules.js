

const os = require("os");
console.log("Hostname:", os.hostname());
console.log("Platform:", os.platform());


console.log("Architecture:", os.arch());

console.log("Total Memory:", os.totalmem());
console.log("Free Memory:", os.freemem());


console.log("System Uptime (in seconds):", os.uptime());


console.log("User Info:", os.userInfo());
