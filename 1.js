// // Section 1 — Primitives (Value Types)
// // Q1/40 (10)
// //  Output
// // Yeh code chalao mentally. `b` ki final value kya hogi?
// let a = 10;
// let b = a;
// a = 99;
// console.log(b); // ???

// // Q2/40 (x world y hello)
// //  Output
// // Dono console.log kya print karenge ?
// let x = "hello";
// let y = x;
// x = "world";
// console.log(x); // ???
// console.log(y); // ???

// // Q3/40  (a true)
// //  Tricky
// // Kya yahan `a` ka value change hogi?
// let a = true;
// let b = a;
// b = false;
// console.log(a); // ???

// // Q4/40  (5)
// //  Output
// // Output kya hoga ?
// let num = 5;
// function addOne(n) {
//   n = n + 1;
// }
// addOne(num);
// console.log(num); // ???

// // Q5/40 (null)
// // 💡 Concept
// // `null` aur `undefined` reference hain ya value? Kya `let a = null; let b = a; a = 42` mein `b` change hoga?
// let a = null;
// let b = a;
// a = 42;
// console.log(b); // ???

// //   Section 2 — Objects & Reference
// //   Q6/40 (Sara)
// //  Output
// // Yeh tricky hai — output kya?
// let obj1 = { name: "Ali" };
// let obj2 = obj1;
// obj2.name = "Sara";
// console.log(obj1.name); // ???

// // Q7/40 (LAHORE)
// //  Tricky
// // Agar `obj1 = { city: 'Lahore' }` kar den toh obj2 kya hoga?
// let obj1 = { city: "Lahore" };
// let obj2 = obj1;
// obj1 = { city: "Karachi" };
// console.log(obj2.city); // ???

// // Q8/40 (21)
// //  Output
// // Kya yeh function original object ko mutate karega?
// let user = { age: 20 };
// function birthday(u) {
//   u.age++;
// }
// birthday(user);
// console.log(user.age); // ???

// // Q9/40(4)
// //  Output
// // Arrays bhi objects hain. Output kya?
// let arr1 = [1, 2, 3];
// let arr2 = arr1;
// arr2.push(4);
// console.log(arr1.length); // ???

// // Q10/40 (1)
// //  Tricky
// // Yahan `arr2` ko nayi array assign ki — arr1 affect hogi?
// let arr1 = [1, 2, 3];
// let arr2 = arr1;
// arr2 = [10, 20, 30];
// console.log(arr1[0]); // ???

// // Section 3 — Shallow Copy
// // Q11/40 (1)
// //  Output
// // Spread operator se shallow copy. Output?
// let a = { x: 1, y: 2 };
// let b = { ...a };
// b.x = 99;
// console.log(a.x); // ???

// // Q12/40(99)
// //  Tricky
// // Nested object ke saath shallow copy tricky ho jata hai. Output?
// let a = { info: { score: 10 } };
// let b = { ...a };
// b.info.score = 99;
// console.log(a.info.score); // ??? 

// // Q13/40
// //  Output
// // Object.assign ke saath nested mutation — output?
// let src = { level: { hp: 100 } };
// let copy = Object.assign({}, src);
// copy.level.hp = 0;
// console.log(src.level.hp); // ???

// // Q14/40 (1,2,99)
// //  Tricky
// // Array spread — shallow ya deep?
// let original = [
//   [1, 2],
//   [3, 4],
// ];
// let copy = [...original];
// copy[0].push(99);
// console.log(original[0]); // ???

// // Q15/40 (1,20)
// //  Output
// // Output predict karo:
// let obj = { a: 1, b: { c: 2 } };
// let clone = Object.assign({}, obj);
// clone.a = 10;
// clone.b.c = 20;
// console.log(obj.a); // ???
// console.log(obj.b.c); // ???

// // Q16/40(deep level 99)
//  Tricky
// Array.slice() shallow copy karta hai. Yah kya print karega?
// let arr = [{ val: 1 }, { val: 2 }];
// let copy = arr.slice();
// copy[0].val = 99;
// console.log(arr[0].val); // ???

// // Q17/40 (false)
// //  Output
// // Kya ye dono `===` hain?
// let a = { x: 1 };
// let b = { ...a };
// console.log(a === b); // ???

// // Q18/40 (100,5)
// //  Tricky
// // Yeh interesting hai — output?
// let a = { n: 5 };
// let b = a;
// let c = { ...a };
// b.n = 100;
// console.log(a.n); // ???
// console.log(c.n); // ???

// // Section 4 — Deep Copy
// // Q19/40 (42)
// //  Output
// // JSON method se deep copy. Output?
// let a = { x: { y: 42 } };
// let b = JSON.parse(JSON.stringify(a));
// b.x.y = 0;
// console.log(a.x.y); // ???

// // Q20/40 (json function ko read nhi karta)
// //  Tricky
// // JSON deep copy ka ek dangerous limitation — kya hota hai functions ke saath?
// let obj = {
//   name: "test",
//   greet: function () {
//     return "hi";
//   },
// };
// let copy = JSON.parse(JSON.stringify(obj));
// console.log(copy.greet); // ???

// // Q21/40 (2)
// //  Tricky
// // JSON aur `undefined` values — kya output ayega?
// let obj = { a: 1, b: undefined, c: 3 };
// let copy = JSON.parse(JSON.stringify(obj));
// console.log(Object.keys(copy).length); // ???

// // Q22/40(5)
// //  Output
// // structuredClone() — nayi modern method. Output?
// let a = { nested: { val: 5 } };
// let b = structuredClone(a);
// b.nested.val = 999;
// console.log(a.nested.val); // ???

// // Q23/40 (string)
// //  Tricky
// // Date object ke saath JSON copy — tricky output:
// let obj = { date: new Date("2024-01-01") };
// let copy = JSON.parse(JSON.stringify(obj));
// console.log(typeof copy.date); // ???

// // Q24/40 (infinite lopp and gives an error)
// //  Tricky
// // Recursive deep copy function — infinite loop kab hoga?
// let a = {};
// a.self = a; // circular reference!
// let b = JSON.parse(JSON.stringify(a)); // ???

// // Section 5 — Advanced Memory Traps
// // Q25/40(3)
// //  Memory
// // Yeh subtle hai — final output?
// let arr = [1, 2, 3];
// let ref = arr;
// ref = ref.concat([4]);
// console.log(arr.length); // ???

// // Q26/40 Map function hamein aik separate array deta hai (1,2)
// //  Tricky
// // map() mutate karta hai ya nayi array?
// let a = [1, 2, 3];
// let b = a.map((x) => x * 2);
// console.log(a[0]); // ???
// console.log(b[0]); // ???

// // Q27/40
// //  Memory
// // Yeh pattern pattern interview mein aata hai — output?
function modify(obj) {
  obj = { name: "New" };
}
let user = { name: "Old" };
modify(user);
console.log(user.name); // ???

// // Q28/40
// //  Output
// // Is pattern mein kya difference hai?
// function mutate(obj) {
//   obj.name = "New";
// }
// let user = { name: "Old" };
// mutate(user);
// console.log(user.name); // ???

// // Q29/40
// //  Tricky
// // Const aur mutation — yeh kab fail hoga?
// const obj = { val: 1 };
// obj.val = 99; // Line A
// obj = { val: 2 }; // Line B
// console.log(obj.val);

// // Q30/40
// //  Memory
// // Kaunsa console.log same reference print karega?
// let a = { x: 1 };
// let b = a;
// let c = { ...a };
// let d = Object.assign({}, a);
// // a === ??? true hoga

// // Section 6 — Mixed & Tricky Combos
// // Q31/40
// //  Tricky
// // Nested array in object — shallow copy ka behavior:
// let state = { items: [1, 2, 3] };
// let newState = { ...state };
// newState.items.push(4);
// console.log(state.items.length); // ???

// // Q32/40
// //  Output
// // Is waqt agar nayi array assign karein toh?
// let state = { items: [1, 2, 3] };
// let newState = { ...state, items: [...state.items] };
// newState.items.push(4);
// console.log(state.items.length); // ???

// // Q33/40
// //  Tricky
// // Output batao — kya `===` true hoga?
// let a = [1, 2, 3];
// let b = a.slice();
// console.log(a === b); // ???
// console.log(JSON.stringify(a) === JSON.stringify(b)); // ???

// // Q34/40
// //  Memory
// // Yeh pattern React state mein bohot common hai — output?
// let state = { count: 0, user: { name: "Ali" } };
// let next = { ...state, count: 1 };
// next.user.name = "Sara";
// console.log(state.user.name); // ???

// // Q35/40
// //  Tricky
// // Agar object mein Symbol key ho to JSON copy mein kya hoga?
// let sym = Symbol("id");
// let obj = { [sym]: 123, name: "test" };
// let copy = JSON.parse(JSON.stringify(obj));
// console.log(copy[sym]); // ???

// // Q36/40
// //  Output
// // for...in loop object keys copy karta hai — shallow ya deep?
// let src = { a: 1, b: { c: 2 } };
// let dest = {};
// for (let key in src) dest[key] = src[key];
// dest.b.c = 99;
// console.log(src.b.c); // ???

// // Q37/40
// //  Tricky
// // Prototype chain aur shallow copy — kya yeh property copy hogi?
// function Animal(name) {
//   this.name = name;
// }
// Animal.prototype.type = "mammal";
// let dog = new Animal("Buddy");
// let copy = { ...dog };
// console.log(copy.type); // ???

// // Q38/40
// //  Memory
// // WeakRef aur garbage collection — agar sirf weakref ho toh?
// let obj = { data: "important" };
// let ref = new WeakRef(obj);
// obj = null;
// // After GC runs:
// console.log(ref.deref()?.data); // ???

// // Q39/40
// //  Tricky
// // Frozen object mein shallow copy ka scene:
// let a = Object.freeze({ x: 1, nested: { y: 2 } });
// let b = { ...a };
// b.x = 99;
// b.nested.y = 99;
// console.log(a.x); // ???
// console.log(a.nested.y); // ???

// // Q40/40
// //  Memory
// // output kya hoga?
// let a = { val: 1 };
// let b = a;
// let c = b;
// c.val = 42;
// b = { val: 99 };
// console.log(a.val); // ???
// console.log(c.val); // ???
