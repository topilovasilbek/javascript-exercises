let a = 0;

if (a == 0) {
    console.log(0);
}

if (a == 1) {
    console.log(1);
}

if (a == 2 || a == 3) {
    console.log('2, 3');
}

// Bunda a variable ni 3 ta condition uchun tekshirib chiqiladi. Bunda if else
// bilan emas alohida if qilib tekshirib chiqilgan, a ning value siga qarab
// console ga natija chiqadi.
// Buni alohida if lar emas, if else tarzida qilgan yaxshiroq. Shunda agar condition larning
// biror biri shartni qanoatlintirsa, keyingilariga o`tib o`tirmaydi va dasturimiz kamroq ish
// bajaradi