/* // 1 - Remove same elements from array
function removeSames(arr) {
  let res = [];
  arr.map((item) => {
    if (!res.includes(item)) res.push(item) 
  });
  return res;
}
console.log(removeSames([1, 2, 3, 3, null, 5, 3, 5])); */

// 2 - Ikkita string charlari va ularning sanog`i bir xil bo`lishi kerak
/* function check(str1, str2) {
  let obj1 = {};
  let obj2 = {};
  for (char of str1) {
    if (char in obj1) obj1[char]++;
    else obj1[char] = 1;
  }
  for (char of str2) {
    if (char in obj2) obj2[char]++;
    else obj2[char] = 1;
  }
  for (key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true
}
console.log(check("webbrain", "brainweb")); */

// No8
// array ichida object berilgan. job berilgan objectlarni qaytaring
/* let arr = [
  { id: 1, name: "Usmon", job: "developer" },
  { id: 2, name: "Usmon", job: "developer" },
  { id: 3, name: "Usmon" },
  { id: 4, name: "Usmon", job: "developer" },
  { id: 5, name: "Usmon" },
];
function hasJob(users) {
  let res = users.filter((item) => "job" in item);
  return res
}
console.log(hasJob(arr)); */

// No9
// objectdan clone oling birinchi objni o'zgartirsa ikkinchisi malumotlari ozgarmasligi kk
/* let obj={
id:1,name:'Usmon',job:'developer'
}
let obj1 = structuredClone(obj) */

// No10
// objectga yangi qiymat qo'shuvchi funksiya yozing
/* let obj = { name: "Asilbek" };
function add(obj, key, value) {
  obj[key] = value;
  return obj;
}
console.log(add(obj, "address", "toshkent")); */

// No11
// agar object ichida practice 1 dan katta bolsa 'qabul qilindi'.aks holda 'ming bor uzur.'
/* let obj = {
  id: 1,
  name: "Usmon",
  job: "developer",
  practice: 1,
};
function check(obj) {
  return obj.practice >= 1 ? "qabul qilindi" : "ming bor uzr";
}
console.log(check(obj)); */

// No11
// agar object ichida talaba bolsa objectga {kiridit:true} key va value qoshilsin aks holsa {kiridit:olinmadi} qoshilsin
/* let obj = {
  id: 1,
  name: "Usmon",
  job: "developer",
  practice: 1,
  talaba: true,
};
function getCredit(obj) {
  if ("talaba" in obj) obj.credit = true;
  else obj.credit = "olinmadi";
  return obj
}
console.log(getCredit(obj)); */

// No12
// object ichida tugilgan yil,hozirgi yoshi malumotlari keltirilgan. agar yosh togri bolmasa 'xato malumot kiritdingiz' chiqarilsin
/* let obj = {
  id: 1,
  name: "Usmon",
  age: 34,
  year: 1990,
};
function checkAge(obj) {
  if (obj.year !== 2022 - obj.age) return "Xato ma'lumot kiritdingiz";
}
console.log(checkAge(obj)); */

// No13
// talaba oz malumotlarini toldirmoqda. sizga object va massiv berilgan. massiv ichida uzbekiston viloyatlari berilgan. agar talaba massiv ichidagi viloyatlardan boshqa tanlasa bizning filallarimiz faqat shu viloyatlarda degan natija chiqsin.
/* let arr = ["Andijon", "Namangan", "Qarshi", "toshkent"];
let obj = { address: "Samarkand" };
console.log(arr.includes(obj.address) ? 'Start': `Bizning filiallarimiz faqat shu yerlarda: ${arr}`); */

// No14
// talabalar malumotlari massiv berilgan. massiv objectlardan tashkil topgan. objectda login parol keltirilgan.
// funksiyaga login va parol jonatiladi.
// agar login parol togri bolsa 'hush kelibsiz' aks holda 'login yoki parol xato degan qiymat chiqazing'
/* let arr = [
  { id: 3, name: "Usmon", parol: "1231" },
  { id: 1, name: "Umar", parol: "1241" },
  { id: 5, name: "Jasur", parol: "3452" },
  { id: 2, name: "Asmo", parol: "2312" },
  { id: 4, name: "Salohiddin", parol: "3421" },
];
function logIn(name, parol) {
  let filter = arr.filter((item) => item.name === name && item.parol === parol);
  return filter.length ? 'Xush kelibsiz' : 'Xato'
}
console.log(logIn("Umar", "2113")); // => xato
console.log(logIn("Salohiddin", "3421")); // => hush kelibsiz */

// No15
// object ichida objectlar berilgan. ichki objectlar bor yoqligini tekshiring
/* let obj = {
  id: 1,
  title: "the best",
  address: { street: "Farobiy", number: "34" },
};
function hasObj(obj) {
  for (key in obj) {
    if (
      typeof obj[key] === "object" &&
      !Array.isArray(obj[key]) &&
      obj[key] !== null
    )
      return true;
  }
  return false;
}
console.log(hasObj(obj)); */

// No16
let person = {
  id: 1,
  name: "Umar",
  surname: "Ismoilov",
};

// // add IELTS
// person.ielts = 5.5;

// 2 - shart
// // agar ielts 5.5 yoki katta bolsa consoleda qabul qilindi,aks holda qayta topshirish kk
// console.log(person.ielts >= 5.5 ? "qabul qilindi" : "qayta topshirish kerak");

// 3 - shart
// agar ielts 5.5 yoki katta bolsa objectga student:true qoshilsin qiymati bn birga
// if (person.ielts >= 5.5) person.student = true;
// console.log(person);

// // qoshimcha
// 4 - shart
// agar student true bolsa unga maxsus key berilsin(math.random+id orqali berilsin)
// if (person.student) person.parol = Math.random+person.id;
// console.log(person);

// 5 - shart
// // talaba bazaga kirishi kk shunday funksiya yarating u parol va name ni jonatsin. agar qarol bn name bazadagi
// // parol bn name ga togri kelsa consoleda hush kelibsiz aks holda parol yoki name xato chiqsin

// Bu yuqorida ishlandi