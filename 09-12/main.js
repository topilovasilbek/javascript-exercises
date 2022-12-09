// 1 - Berilgan stringdagi belgilar soni bir-biriga tengmi yoki yo`q aniqlash
// optimal yechim bilan
/* let str1 = "web";
let str2 = "ewb";
const detectEquality = (str1, str2) => {
  str1 = str1
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .join("");
  str2 = str2
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .join("");
  return str1 === str2;
};
console.log(detectEquality(str1, str2)); */

// 2 - Object ichidagi va uning ichidagi barcha child lari ichidagi 'age' keylari valuelarining
// yig`indisini topuvchi dastur tuzing recursion bilan
/* let obj = {
  title: "Webbrain",
  age: 2,
  child: {
    age: 4,
    name: "Webbrain",
    child: {
      age: 3,
    },
  },
};
const calcAges = (obj) => {
  let res = obj.age;
  const enterDeep = () => {
    if ("child" in obj) {
      obj = obj.child;
      res += obj.age;
      return enterDeep();
    } else {
      return res;
    }
  };
  return enterDeep();
};
console.log(calcAges(obj)); */

// 3 - Remove duplicates from array - 3 ways
/* let num = [2, 3, 5, 3, 2, 3, 6, 8, 7, 6]; */
// First way
/* console.log(Array.from(new Set(num))); */
// Second way
/* const removeDuplicates = (num) => {
  let res = [];
  for (el of num) {
    if (!res.includes(el)) res.push(el)
  }
  return res
};
console.log(removeDuplicates(num)); */
// Third way
/* const removeDuplicates = (num) => {
  num = num.sort((a, b) => a - b);
  return num.filter((item, index, array) => item !== array[index + 1]);
};
console.log(removeDuplicates(num)); */

// 4 - Arraylarni bir-biriga taqqoslang
/* let num1 = [1, 2, 3];
let num2 = [1, 2, 3];
console.log(num1.join("") === num2.join("")); */

// 5 - Arraydagi ikki xonali sonlarni chiqaring
/* let arr = [1, 64, 8, 27, 64, 125];
const findTwoDigitNumbers = (arr) => {
  return arr.filter((num) => `${num}`.length === 2);
};
console.log(findTwoDigitNumbers(arr)); */

// https://t.me/webbrain_academy/60
//  Sizlarga N uzunligidagi A nomli array Hamda S intiger qiymat berildi.
// ⚡️ Sizni vazifangiz:
// A nomli array ichida o'rta arifmetik qiymati S ga teng bo'lgan nechta davomiy fragment bor.
function Test(A, S) {
  let count = 0;
  let n = 0;
  while (n < A.length) {
    for (let i = n; i <= A.length; i++) {
      let fragment = A.slice(n, i);
      if (fragment.length) {
        eval(`(${fragment.join("+")})/${fragment.length}`) === S
          ? count++
          : null;
      }
    }
    n++;
  }
  return count;
}
// console.log(Test([2, 1, 3], 2));
// console.log(Test([2, 1, 4], 3));
// console.log(Test([0, 4, 3, -1], 2));