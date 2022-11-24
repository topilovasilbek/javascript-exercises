// Objects

// No 1
// object keylarini toping
/* let obj = {
  id: 1,
  name: "WebBrain",
};
for (i in obj) {
  console.log(i);
} */

// no2
// object valuelarining raqamga tenglarini toping
/* let obj = {
  id: 1,
  name: "WebBrain",
  0: 'men 0 man',
  10: 'men 10 man'
};
console.log('----- Value si raqam bo`lganlar -----');
for (i in obj) {
    if (!isNaN(obj[i])) {
        console.log(`${i}: ${obj[i]}`)
    }
}
console.log('----- Key i raqam bo`lganlar -----');
for (i in obj) {
  if (!isNaN(i)) {
      console.log(`${i}: ${obj[i]}`)
  }
} */

// No3
// object valuelarining boolean tipidagi malumotlrini qaytaring keylari bn biriga
/* let obj = {
  id: 1,
  name: "WebBrain",
  offline: true,
  online: true,
  individual: false,
};
let newObj = {};
for (i in obj) {
  if (obj[i] === false || obj[i] === true) {
    newObj[i] = obj[i]
  }
}
console.log(newObj) */

// No4
// object va string berilgan .agar object keylari ichida stringga teng bolgan key bolsa shu key va valueni chiqazing
/* let obj = {
  id: 1,
  name: "WebBrain",
  offline: true,
  online: true,
  individual: false,
};
function Search(obj, str) {
  if (str in obj) {
    let a = obj[str];
    console.log({ [str]: a });
  }
}
Search(obj, "name"); */
// chiqish
//     name:"WebBrain"

// No5
// object va string berilgan.  string bor bolgan object valuelarining chiqaring
/* let obj = {
  id: 1,
  name: "atirgul",
  color: "qizil",
  count: 10,
  price: "10$",
};
function searchValue(obj, str) {
  for (i in obj) {
    if (obj[i].toString().includes(str)) {
      console.log(obj[i]);
    }
  }
}
searchValue(obj, "i"); //atirgul,qizil */

// No6
// object ichida objectlar berilgan. ichki objectlarning ichiga age degan key berilgan. barcha ichki keylardagi age lar yigindisini toping
let person = {
  id: 1,
  name: "Odil",
  age: 78,
  child: {
    id: 1,
    name: "Ali",
    age: 48,
    child: {
      id: 1,
      name: "Umar",
      age: 20,
    },
  },
};
const calcSumOfChildAges = (arr) => {
  let sum = arr.age;
  while (arr.hasOwnProperty("child")) {
    arr = arr["child"];
    sum += arr.age;
  }
  return sum;
};
console.log(calcSumOfChildAges(person));
// chiqish 146
