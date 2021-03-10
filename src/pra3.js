
class LinkedNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}
const head = new LinkedNode(2)
head.next = new LinkedNode(4)
head.next.next = new LinkedNode(1, new LinkedNode(3))

// const name = 'sss'
// class Father {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
//     say (){
//         console.log(this.name)
//     }
// }


// class Son extends Father {
//     constructor(name, age) {
//         super(name)
//         this.age = age
//     }
// }

// // Son.prototype.say = function () {
// //     console.log(this.name)
// // }
// const father = new Father('Shihao', 24)
// const son = new Son('xiaoer', 1)

// const result = new Array(3).fill(0).map(() => new Array(4).fill(0))

// console.log(result)

function Father (name) {
    this.name = name
}

Father.prototype.sayName = function () {
    console.log(this.name)
}

let father = new Father('Shihao')

function Son () {
    Father.apply(this, arguments)
}
Son.prototype = Object.create(Father.prototype)
Son.prototype.constructor = Son

const son = new Son('ss', 10)

// let name = 'Shihao'
// let me = { 
//     name: "Ashutosh Verma", 
//     thisInArrow:() => { 
//     console.log("My name is " + name); // no 'this' binding here 
//     }, 
//     thisInRegular(){ 
//     console.log("My name is " + this.name); // 'this' binding works here 
//     } 
//    };
// me.thisInArrow(); 
// me.thisInRegular();

// function myFunction() {
//     console.log(arguments);
//   }
  
//   myFunction('a', 'b'); // logs { 0: 'a', 1: 'b'}
// const aString = 'abcde'
// function reverse(s) {
//     let o = '';
//     for (let i = s.length - 1; i >= 0; i--){
//      o += s[i];
//     }
//     return o;
//   }

const a = "Let's take LeetCode contest"
const b = a.split('').reverse().join('')
console.log(b.split(' ').reverse().join(' '))
