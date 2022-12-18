// 1 - obj.remove(keyName)
// For example: user.remove(firstName)
/* let user = {
  name: "Asilbek",
  age: 20,
};

Object.prototype.remove = function (key) {
  delete this[key]
};

user.remove("name");
console.log(user); */

// 2 - obj.set(key, property, boolean)
// For example: user.set(lastName, writable, false)
let user = {
  name: "Asilbek",
  age: 20,
  /* set(key, propertyKey, propertyValue) {
    Object.defineProperty(this, key, { [propertyKey]: propertyValue });
  }, */
};

Object.prototype.set = function (key, flagProperty, flagValue) {
  if (
    flagProperty !== "value" &&
    flagProperty !== "writable" &&
    flagProperty !== "enumerable" &&
    flagProperty !== "configurable"
  )
    return "Noto`g`ri flag property kiritdingiz";
  Object.defineProperty(this, key, { [flagProperty]: flagValue });
};

user.set("age", "value", false);

console.log(user);
delete user.age;
console.log(user);
