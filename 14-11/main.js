// _______________1_______________

if ("0" == true) {
  console.log("Hello");
} // Bunda consolega Hello chiqadi, chunki "0" bu yerda Boolean("0") sifatida bo`ladi

jsOfficialName = "something";
if (jsOfficialName === "ECMAScript") {
  console.log("Right!");
} else {
  console.log('You don\'t know?\n"ECMAScript"');
}
// if () {} else {} syntax shunday bo`ladi, bunda if dan keyingi () ichiga condition yoziladi
// va agar bu condition true qaytarsa undan keyingi {} ichidagi code ishlaydi, aks holda
// ikkinchi {} ichidagi code ishlaydi
// Yuqoridagi misolda agar jsOfficialName ECMAScript ga teng bo`lsa Right deb chiqaradi, aks
// holda You don't know? "ECMAScript" chiqadi.

// _______________2_______________

let number = 1230;
if (number < 0) {
  console.log(-1);
} else if (number === 0) {
  console.log(0);
} else {
  console.log(1);
}
// Bunda 2 tadan ko`p shart tekshiramiz shuning uchun bunda:
// 1-si if() va {code}, 2-si else if() va {code}, 3-si else {code} bo`ladi.
// Bizga berilayotgan son 0 dan kichkina bo`lsa -1, 0 ga teng bo`lsa 0 javob qaytaradi.
// Aks holda(ya'ni 0 dan katta bo`lsa), 1 qaytaradi

// _______________3_______________

let result;
let a = 5;
let b = 10;
a + b < 4 ? (result = "Below") : (result = "Over");
console.log(result);

// _______________4_______________

let message;
let login = "";
login == "Employee"
  ? (message = "Hello")
  : login == "Director"
  ? (message = "Greetings")
  : login == ""
  ? (message = "No login")
  : (message = "");
console.log(message);
// ternary operator ? :
// Bu ham if else bilan bir xil narsa, faqat bunda kod biroz tushunarsizroq bo`lishi mumkin.
// Shuning uchun buni faqat bitta condition tekshirilganda ishlatish tavsiya qilinadi.
// Ya'ni faqat if () {} else {}, bo`lsa orada else if lar bo`lmasa, buni oddiy qilib
// ternary operator bilan yozib ketsa bo`ladi.