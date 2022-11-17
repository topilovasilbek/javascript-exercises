// Karra jadvali

for (let i = 2; i <= 10; i++) {
  console.log(`${i}lik karra jadvali`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
  console.log();
}

// Explanation
// Bunda nested loop - ya'ni ichma-ich loop bo`ladi, buni zina ichidagi zina deb tushunsak bo`ladi.
// Har bir 1-loop tsikli uchun ichidagi loop 10 marta aylanib chiqadi.
// Shu asosda 1-loopdagi i bilan 2-loopdagi j ning ko`paytmasidan karra jadvalini hosil qilyapmiz.