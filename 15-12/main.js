/* let s = 0;
function sum(num) {
  console.log(sum)
}
console.log(sum(1)(2)); */

function sum(a) {
  return (b) => (b ? add(a + b) : a);
}

console.log(sum(1)(2)(3)(4)());
