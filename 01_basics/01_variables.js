const accountId = 12345; 
let accountEmail = "hitesh@google.com";
var accountPassword = '456765';
accountCity = "Jaipur"

// accountId = 2 //not allowed

/*
prefer not to use var 
because of issue in block scope and functional scope
*/
console.log(accountId)
accountEmail = "hc@hc.com"
accountPassword = "232343534"
accounytCity = "Bengaluru"
let accountState;

console.table([accountEmail, accountPassword, accountCity, accountState]);

