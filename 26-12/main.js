// 1 - sum(2)(10)(3) - curry function which returns sum of arguments
// It should be dynamic for 'add', 'divide' and 'multiply'
const operations = (type) => {
  let sign =
    type === "add"
      ? "+"
      : type === "divide"
      ? "/"
      : type === "multiply"
      ? "*"
      : "";
  return function inner(a) {
    return (b) => {
      if (b) return inner(eval(`${a}${sign}${b}`));
      else return a;
    };
  };
};

const math = operations("add");

console.log(math(8)(4)(2)());

// 2 - sum(4, 6, 20) - regular function which returns sum of arguments
// It should be dynamic for 'add', 'divide' and 'multiply'
/* function math(type, ...otherParams) {
  let sign = "+";
  if (type === "divide") sign = "/";
  else if (type === "multiply") sign = "*";
  return eval(otherParams.join(sign))
}
console.log(math("add", 4, 6, 20)); */
