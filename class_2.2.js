const firstName = "Karmen";
const lastName = "Klaasen";
const dateInfo = require("./date_et");
const timeInfo = require("./time_et");
console.log(firstName + " " + lastName);
//console.log(Date());
console.log(dateInfo.dateNowET());
console.log("Kell on: " + timeInfo.timeNowET());