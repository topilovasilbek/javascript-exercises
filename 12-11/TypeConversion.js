console.log("" + 1 + 0);
// + stringda bor amal. Ya'ni "Asilbek " + "Topilov" "Asilbek Topilov" ga teng bo`ladi
// Bunda string dan keyingi belgi + bo`lganligi uchun
// 1 va 0 ni ham stringga string sifatida qo`shib qo`yadi. Natija - 10

console.log("" - 1 + 0);
// Bunda stringdan keyin kelgan belgi -. Bu amal stringda mavjud emas.
// String dagi value esa raqam.
// Shuning uchun string ni number deb qabul qiladi va 0-1+0 ifodasini
// bajaradi. Natija - -1

console.log(true + false);
// Boolean qiymatlari orasida arifmetik amal bajarilganda, ular xuddi 0 va 1 dek.
// true - 1, false - 0. 1+0 Natija - 1

console.log(6 / "3");
// Bo`lish ham string da mavjud bo`lmagan amal. Shuninch uchun stringdagi 3 ni
// number deb qabul qiladi va natija - 2

console.log("2" * "3");
// Ko`paytirish ham string da mavjud emas. String ichidagi valuelar bu yerda
// raqam. Shuning uchun ularni number deb hisoblaydi. Natija - 6

console.log(4 + 5 + "px");
// Bu ham tepadagi birinchi ko`rganimiz kabi. + amali bo`lganligi uchun
// number larni ham stringga string sifatida qo`shib qo`yadi. Natija - 91px

console.log("$" + 4 + 5);
// Buning ham birinchi ko`rgan misolimizdan farqi yo`q. Natija string bo`ladi - $45

console.log("4" - 2);
// Ana endi bunda arifmetik amal - bo`lganli uchun numberni stringga emas,
// string ni numberga o`tkazvoradi. String ichidagi value o`zi raqam.
// Shuning uchun hech qanda muammo bo`lmaydi. 4-2. Natija number bo`ladi - 2

console.log("4px" - 2);
// Bu bundan oldin ko`rgan misolimiz bilan deyarli bir xil. Bunda faqat string
// ichidagi value number emas. Shuninch uchun uni numberga o`tkazishda natija
// not a number, ya'ni raqam emas chiqadi. Natija - NaN

console.log(" -9 " + 5);
// Birinchi ko`rgan misolimiz bilan bir xil. Natija string bo`ladi -  -9 5

console.log(" -9 " - 5);
// Bunda hali aytganimizdek amal -. Oldin ko`rgan misollarimizdan farqi bunda
// string ichidagi raqam ikki chetidan bo`sh joy qolgan. Bu hech qanday ahamiyat
// kasb etmaydi va natija - -14

console.log(null + 1);
// null ustida arifmetik amallar bajarib bo`ladi. Bu null ning undefined dan farqlaridan
// biri. Bunda null 0 deb qabul qilinadi. Natija number bo`ladi - 1

console.log(undefined + 1);
// undefined ustida arifmetik amallar bajarib bo`lmadydi. U number emas.
// Shuning uchun natija not a number - NaN

console.log("\t \n" - 2);
// Bunda \t - Tab, \n - new line. Demak bu yerda string ichida hech narsa yozilmagan.
// Faqat bo`sh joy. Bunda u xuddi bo`sh string dek. Natija - -2