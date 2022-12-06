// 1 - Berilgan stringda nechta katta harf, nechta kichik harf mavjud
/* let str = "Webbrain Academy";
function calcLetters(str) {
  let obj = { lowers: 0, uppers: 0 };
  for (let char of str) {
    if (char !== " ")
      if (char === char.toLowerCase()) obj.lowers++;
      else obj.uppers++;
  }
  return `${obj.uppers}ta katta harf, ${obj.lowers}ta kichik harf mavjud`;
}
console.log(calcLetters(str)); */

// 2 Berilgan stringdagi @ ni a harfiga o`zgartiring (replaceAll va /g dan foydalanilmasin)
/* let str = "WebBr@in Ac@demy";
function replaceLetter(str) {
  let res = "";
  for (char of str) {
    if (char !== "@") res += char;
    else res += "a";
  }
  return res;
}
console.log(replaceLetter(str)); */

// 3 object valuelarining boolean tipidagilarini qaytaring (key valuelarini birga)
/* let obj = {
  id: 1,
  name: "WebBrain",
  offline: true,
  online: true,
  individual: false,
};
function returnBooleans(obj) {
  let res = {};
  for (key in obj) {
    if (obj[key] === true || obj[key] === false) res[key] = obj[key];
  }
  return res
}
console.log(returnBooleans(obj)); */

// 3 - String - Duplicate bo`lgan harflarini o`chiring
/* let str = "webbbraiiin accaddemmy";
function removeDuplicate(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) res += str[i];
  }
  return res;
}
console.log(removeDuplicate(str)); */

// String ichidan raqamlarni toping
/* let str = "We66ra1n Acad4my";
function findNumbers(str) {
  let res = [];
  for (let char of str) {
    if (!isNaN(char) && char !== ' ') res.push(Number(char))
  }
  return res
}
console.log(findNumbers(str)); */

// Berilgan string har bir belgisini double qilib qaytaring
/* function makeDouble(str) {
  let res = "";
  for (let char of str) {
    res += char.repeat(2);
  }
  return res
}
console.log(makeDouble("Asilbek")); */

// Berilgan so`z palindrom yoki palindrom emasligini tekshiring
/* function checkPalindrome(str) {
  return str === str.split('').reverse().join('')
}
console.log(checkPalindrome('kiyik')); */

// 9 - String ni ziplash
/* let str = "webbraaiiin";
function zip(str) {
  let res = "";
  let count = 1;
  for (let char of str) {
    if (res.length === 0) res += char;
    else if (char === res[res.length - 1]) count++;
    else {
      if (count > 1) {
        res += count;
        count = 1;
        res += char
      } else res += char;
    }
  }
  return res;
}
console.log(zip(str)); */

// 1 - Object - Object keylarini toping
/* let obj = { title: "Webbrain", age: 2 };
console.log(Object.keys(obj)); */

// Problem - 4 [1, 2, 3, 2] => [1, 2, 1] => [1, 1] => [0]
// Solution
function subtractInfinite(arr) {
  while (arr.length > 1) {
    arr = arr.sort((a, b) => a - b);
    let subtraction = arr[arr.length - 1] - arr[arr.length - 2];
    arr.splice(arr.length - 2, 2);
    subtraction ? arr.push(subtraction) : null;
  }
  return arr
}
console.log(subtractInfinite([2, 3, 2, 4, 5, 2, 3]));

// 10 - https://t.me/webbrain_academy/53
/* function findMax(number) {
  let binary = number.toString(2);
  let oneCounts = [];
  let wasOne = false;
  let sum = 0;
  for (let char of binary) {
    if (char === "1") {
      wasOne = true;
      if (sum !== 0) oneCounts.push(sum);
      sum = 0;
    }
    if (char === "0" && wasOne) sum++;
  }
  return oneCounts.length === 0 ? 0 : Math.max(...oneCounts);
}
console.log(findMax(529)); */

// 11 - https://t.me/webbrain_academy/60
