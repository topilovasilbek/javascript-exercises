// 0
let number = 7;
function toBinary(num) {
  return num.toString(2)
}
console.log(toBinary(number))
// number - son, toString string ga o`tkazadi, uning parametriga 2 qo`ysak, 2lik sanoq sistemasiga o`tkazadi

/* // 1
let i = 0;
while (i < 3) {
    console.log(`number ${i}!`);
    i++
}
// while da () ichiga faqat condition yoziladi, startingPoint tashqarida bo`ladi
// step esa ichida bo`ladi. Ishlashi bir xil */

/* // 2
function checkAge(age) {
    if (age > 18) {
        return true
    } else {
        return confirm("Did parents allow you")
    }
}
console.log(checkAge(20))
// function keyword bilan yozganimiz - function declaration, ya'ni funksiya e'lon qilish
// checkAge() qilganimiz uni nomi bilan call qilish, ya'ni ishlashi uchun chaqirish */

/* // 3
function checkAge(age) {
  return age > 18 || confirm("Did parents allow you");
}
console.log(checkAge(19));
// Bunda natija return qilinadi va osha natija mantiqiy mulohaza asosida bo`ladi
// Agar age parameter 18 dan katta bo`lsa true qaytar yoki
// browser da prompt chiqqanda user OK ni bossa true chiqar, aks holda false deyiladi
function checkAge(age) {
  return age > 18
  ? true
  : confirm("Did parents allow you")
  ? true
  : false;
}
console.log(checkAge(15));
// Bu ham avvalgilari bilan deyarli bir xil ishlaydi. Faqat bunda if statement kabi condition lar
// tekshiriladi. */

/* // 4
function min(a, b) {
  return a < b ? a : b;
}
console.log(min(10, 56));
// Buni aslida bir dona amal bilan bajarsa bo`ladi : Math.min(a, b).
// Lekin ternary operator bilan ko`rishimiz kerak. Ternary operator da ham juda qisqa code bo`ladi */

/* // 5
function pow(x, n) {
  let res = 1;
  let i = 0;
  while (i < n) {
    res *= x;
    i++;
  }
  return res;
}
console.log(pow(2, 3));
// Buni ham aslida bittagina amal bilan bajarib qo`ysa bo`ladi : x ** n yoki Math.pow(x, n)
// Lekin buni while loop orqali x ni n marta takrorlab o`ziga ko`paytirib chiqish orqali qilamiz */

/* // 6
const ask = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
};
ask(
  "Do you agree?",
  () => {
    alert("You agreed.");
  },
  () => {
    alert("You canceled the execution");
  }
);
// Arrow function bilan qildik. Bunda function declaration bilan qilgan bilan bir xil bo`ladi. */