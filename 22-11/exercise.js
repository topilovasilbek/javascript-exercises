// 1
// Hello object
/* let user = new Object();
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
console.log(user); */

// 2
/* function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}
let schedule = {};
console.log(isEmpty(schedule)); // true
schedule["8:30"] = "get up";
console.log(isEmpty(schedule)); // false */

// 3
/* let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
let sortObjDesc = (obj) => {
  let result = {}; // for result
  let keys = Object.keys(obj); // to take obj param keys
  keys.sort((a, b) => obj[b] - obj[a]); // to sort keys by their values
  keys.forEach((key) => {
    result[key] = obj[key];
  }); // assign sorted keys to new result object and values of it will be values of old object
  return result;
};
console.log(sortObjDesc(salaries)); */

// 4
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};
function multiplyNumeric(menu) {
  // variable shadowing here
  for (let i in menu) {
    if (typeof menu[i] === "number") {
        menu[i] *= 2
    }
  }
  return menu;
}
console.log(multiplyNumeric(menu));
