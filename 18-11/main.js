console.log(typeof undefined); // undefined

console.log(typeof +"asdasd"); // number
console.log(typeof -"asdasd"); // number
// string oldidan * yoki / qoysak error beradi. + va - da numberga otkazib beradi
console.log(typeof NaN); // number

console.log(1 == true); // true
console.log(0 == false); // true

console.log(1231 == true); // false
console.log(-1231 == true); // false
console.log(1231 == false); // false
console.log(-1231 == false); // false

console.log("asdasd" == true); // false
console.log("asdasd" == false); // false
console.log("1" == true); // true
console.log("0" == false); // true
console.log(Boolean("a")); // true, bunda string berilganda string ichida bitta bo`lsa ham belgi yoki bo`sh joy bo`lsa, true bo`laveradi
console.log(Boolean(-1)); // true, bunda 0=false, qolgan raqamlar true qaytaradi

console.log("-----------------");

console.log(NaN == true); //false
console.log(NaN == false); //false

console.log(Boolean(NaN)); // false

console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
// Lekin truega tengmi desak, false qaytaradi null ham, undefined ham
// Lekin false tengmi desak ham, false qaytaradi null ham, undefined ham
console.log(Boolean(Symbol("a"))); // true
// Lekin truega tengmi desak ham false qaytaradi, falsega tengmi desak ham false qaytaradi

console.log(Boolean(function () {})); // true
// Lekin truega tengmi desak ham false qaytaradi, falsega tengmi desak ham false qaytaradi

console.log(Boolean({})); // true
// Lekin truega tengmi desak ham false qaytaradi, falsega tengmi desak ham false qaytaradi

console.log(Boolean([])); // true
// Lekin []==false deganda true qaytaradi
