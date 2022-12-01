// 1 Array ichidagi sonlar yig`indisini toping
/* function calcSum(arr) {
  let sum = 0;
  for (item of arr) sum += item;
  return sum
}
console.log(calcSum([2, 5, 10])); */

// 2 Array ichidagi char sanog`ini toping
/* function calcCharsNumber(arr) {
  let charsNumber = {};
  for (item of arr) {
    for (char of item) {
      if (char in charsNumber) charsNumber[char]++;
      else charsNumber[char] = 1;
    }
  }
  return charsNumber
}
console.log(calcCharsNumber(["webbrain", "academy"])); */

// 3 Arraylarni bir-biriga taqqoslang
/* function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}
console.log(compareArrays([0, '1', 2], [0, '1', 2])); */

// 4
/* function camelize(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "-") {
        res += str[i+1].toUpperCase();
        i++;
    } else {
        res += str[i]
    }
  }
  return res
}
console.log(camelize("background-color")); */

// 5
let users = [
  {
    id: 1,
    year: 1998,
    engine: 1,
    name: "Tico",
  },
  {
    id: 2,
    year: 2005,
    engine: 1.2,
    name: "Matiz",
  },
  {
    id: 3,
    year: 2010,
    engine: 1.6,
    name: "Gentra",
  },
  {
    id: 4,
    year: 2010,
    engine: 1.5,
    name: "Cobalt",
  },
  {
    id: 5,
    year: 2012,
    engine: 2,
    name: "Malibu",
  },
  {
    id: 6,
    year: 2000,
    engine: 1.2,
    name: "Damas",
  },
  {
    id: 7,
    year: 2018,
    engine: 2.4,
    name: "Tracker",
  },
];

/* // 2000 yildan oldigi
console.log(users.filter((e) => e.year <= 2000)); */
/* // 2010 yildan oldingi
console.log(users.filter((e) => e.year <= 2010)); */
/* // 2010 yildan keyingi
console.log(users.filter((e) => e.year > 2010)); */
/* // sort by engine power
console.log(users.sort((a, b) => b.engine - a.engine)); */
/* // sort by year
console.log(users.sort((a, b) => a.year - b.year)); */
// sort by name
/* console.log(
  users.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  })
); */

function addStatus(arr) {
  for (item of arr) {
    if (item.year <= 2000) item.status = "eski";
    else if (item.year <= 2010) item.status = "o`rta";
    else if (item.year <= 2022) item.status = "yangi";
  }
  return arr
}
console.log(addStatus(users));
