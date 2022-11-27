// 1
/* function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}
let user = makeUser();
console.log(user.ref.name); // undefined
// user = makeUser() and makeUser() returns object {}
// if we write makeUser().ref - it returns global object and global object has no name property */

// 2
/* let calculator = {
  read(a, b) {
    this.a = a;
    this.b = b;
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  }
};

calculator.read(3, 5);
console.log(calculator.sum());
console.log(calculator.mul());
// In this this.a = a creates property-a in calculator object and we can use it
// whithin the scope of the object after declaration of it */

// 3
/* let ladder = {
    step: 0,
    up() {
        this.step++;
        return this
    },
    down() {
        this.step--
        return this
    },
    showStep: function() {
        console.log(this.step);
        return this
    }
}
ladder.up().up().down().showStep().down().showStep(); // 1 then 0
// All things are understandable in this. Only thing that matters is return keyword */

// 4
const obj = {};

function A() {
  this.a = obj;
  return this.a;
}
function B() {
  this.a = obj;
  return this.a;
}

let a = new A();
let b = new B();

console.log(a);
console.log(b);

console.log(a == b);
