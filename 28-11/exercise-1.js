// Number

// 1 - Sonni binary ga o`tkazganda nechta 1 va nechta 0 lar bo`lishini topish
/* function findNumbers(num) {
  let binNum = num.toString(2);
  let count0 = 0;
  let count1 = 0;
  for (char of binNum) {
    if (char === '0') count0++;
    else count1++;
  }
  return `${count1}ta bir, ${count0}ta nol qatnashgan`;
}
console.log(findNumbers(5)); */

// 2 - Berilgan sonlardan eng katta va eng kichigini topish
/* function findMaxMin(arr) {
    let min = Math.min(...arr)
    let max = Math.max(...arr)
    return `Berilgan sonlarning eng kattasi - ${max}, eng kichigi - ${min}`
}
let arr = [1, 4, -5, 40, -67, 10, 56, 3, 2];
console.log(findMaxMin(arr)) */

// 3 - trunc, floor, ceil, parseInt
/* 
Math.trunc() va Number.parseInt() butun qismini olib oladi
trunc() vs parseInt() parseInt is mainly used for a string argument.
So if you're dealing with numbers, it's way better to use Math. trunc()
Math.floor kichik tomondagi butun songa, Math.ceil katta tomondagi butun songa yaxlitlaydi
*/

// 4 - min va max orasidagi tasodifiy son
/* function randomInteger(min, max) {
    return parseInt(Math.random() * max + min)
}
console.log(randomInteger(1, 50)); */

// 5 - ildiz ostini daraja bilan ifodalash, 2ta parameter qabul qiladi: son, necha ildiz ostidan chiqarilishi
function findRootRes(num, root) {
  return Math.pow(num, 1 / root);
}
console.log(findRootRes(64, 2));