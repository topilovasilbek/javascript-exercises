// Prefix and Postfix
let a = 1;
let b = 1;

let c = ++a;
// c ni console ga chiqarsak 2 chiqadi, chunki ++ value oldidan kelyapti.
// Shuninch uchun avval 1 ni qo`shadi, keyin consolega chiqaradi
let d = b++;
// d ni console ga chiqarsak 1 chiqadi, chunki ++ valuedan keyin kelyapti.
// Shuninch uchun avval consolega chiqaradi, keyin 1 ni qo`shadi
console.log(c) // 2
console.log(d) // 1