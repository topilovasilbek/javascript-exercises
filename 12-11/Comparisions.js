console.log(5 > 4);
// Comparisons da natija boolean bo`ladi.
// > katta deganni bildiradi. 5 4dan kattaligi rost Shunich uchun natija - true

console.log("apple" > "pineapple");
// 1-stringning har bir belgisining ASCII kodi 2-siniki bilan
// solishtirib chiqiladi. Qaysi biridir kichkinami natija false chiqadi
// Natija - false

console.log("2" > "12");
// Bu ham bundan oldingi misol kabi. 2 ning ASCII kodi '12' dagi 1 ning
// ASCII kodidan katta. Natija - true

console.log(undefined == null);
// 2talik tenglik faqat value teng yoki tengmasligini tekshiradi.
// Ikkalasi ham yo`qlikni bildiradi. Natija - true

console.log(undefined === null);
// 3talik tenglik value sini va type ini tekshiradi. Bunda value lar
// teng lekin ikkalasi boshqa-boshqa data type. Shuning uchun natija - false

console.log(null == "\n0\n");
// Bunda string ichiga nima yozilganiga qarash ham shart emas.
// Chunki null hech qanday stringga ham number ga ham teng emas

console.log(null === +"\n0\n");
// Bunda string oldiga + qo`yilishi orqali uning typei numberga o`tkazilyapti
// Ya`ni string 0 bo`ldi. Lekin null 0 ga ham teng emas. Natija - false