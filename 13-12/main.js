// 1 - Factorial

/* const calcFactorial = (n, res = 1) => {
  if (n === 1) return res;
  res *= n;
  n--;
  return calcFactorial(n, res);
};

console.log(calcFactorial(3)); */

// 2 - Fibonacii numbers
// Input - number, Output - n(th) fibonacci number

function fib(n, res = [1, 1]) {
  if (n === 0 || n === 1) return 1;
  if (n === res.length) return res[res.length - 1];
  res.push(res[res.length - 1] + res[res.length - 2]);
  return fib(n, res);
}

console.log(fib(3)); // 2
console.log(fib(7)); // 13
console.log(fib(77)); // 5527939700884757
