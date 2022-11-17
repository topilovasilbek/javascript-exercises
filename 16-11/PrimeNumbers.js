// Tub sonlar

let number = 100;

if (number < 2) console.log("1 dan katta son kiriting");
if (number % parseInt(number) !== 0) console.log("Butun son kiriting");

if (number >= 2 && number % parseInt(number) === 0) {
  console.log(`2 dan ${number} gacha bo\`lgan tub sonlar:`);

  for (let i = 2; i <= number; i++) {
    let s = 0;
    for (let j = 2; j <= parseInt(i / 2); j++) {
      if (i % j === 0) {
        s++;
      }
    }
    if (s === 0) {
      console.log(i);
    }
  }
}

// Bunda input son bo`ladi va outputda shu songacha bo`lgan tub sonlarni chiqarish kerak bo`ladi
// Buning uchun o`sha songacha sonlarni aylanib chiqish uchun bitta for loop va
// aylanib chiqayotgan sonning tub yoki tub emasligini aniqlash uchun bitta nested for loop
// kerak bo`ladi.
// Agar son o`ziga va birga bo`linsa u tub bo`ladi. Buni aniqlash uchun o`sha son 2dan boshlab
// o`sha sonning yarmigacha bo`lgan sonlarning biron biriga bo`linadimi yoki yo`qmi - shuni aniqlash yetadi.