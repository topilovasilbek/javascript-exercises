// 1
/* function check(str1, str2) {
  if (str1 === str2) return "Butkul bir xil";
  if (str1.includes(str2) || str2.includes(str1))
    return "Qisman to`g`ri keladi";
  return "Umuman to`g`ri kelmaydi";
}
console.log(check("Asilbek", "A")); */

// 2
/* function getCount(str) {
  let res = {};
  for (char of str) {
    if (char in res) res[char]++;
    else res[char] = 1;
  }
  return res
}
console.log(getCount("apple")); */

// 3
/* function truncate(str, n) {
    return str.slice(0, n)
}
console.log(truncate('Microsoft', 5)); */

// 4
/* function getCurrency(str) {
  let num = "";
  for (char of str) {
    if (!isNaN(char)) {
      num += char;
    }
  }
  console.log(+num);
}

getCurrency("$27$2$$$9a+-_3"); */

// 5
/* function seperateChars(str) {
  let res = { letters: 0, chars: 0, numbers: 0 };
  let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (char of str) {
    if (!isNaN(char)) res.numbers++;
    else if (letters.includes(char)) res.letters++;
    else res.chars++;
  }
  return res
}
console.log(seperateChars("Apple@Micro$$&^%soft039802")); */

// 6
function replaceChars(str1, str2) {
  /*should replace all str2 inside of str1. And return that changed string*/
  let a = str1;
  let b = str2;
  if (!a.toLowerCase().includes(b.toLowerCase())) return a;
//   while (a.toLowerCase().includes(b.toLowerCase())) {}
}
const a = "webbrain is web and Web weB point";
const b = "web";
replaceChars(a, b);
