let a = 2;

let x = 1 + (a *= 2);
// *= ozgaruvchini nechaga ko`paytirib o`ziga tenglashni bildiradi.
// Ya'ni  a *= 2  ifoda  a = a * 2  ifoda bilan bir xil
// Bunda birinchi xuddi matematikadagidek qavslar ichi birinchi bajariladi
// Qavslar ichidan 4 chiqadi va unga 1 ni qo`shsak, natija - 5

console.log(x)  // 5