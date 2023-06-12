// //Comparison operators
// // > < >= <= && || != == ===
// // console.log(5>6);
// // console.log(5<6);
// // console.log(7<=6);
// // console.log(7>=6);
// // console.log("6"==6);
// // console.log("6"===6);
// // console.log(6!=6);
// // console.log("6"!=6);
// // console.log("6"!==6);

// //booleans
// //truthy falsy değerler
// // console.log(Boolean(1));
// // console.log(Boolean(0));
// // console.log(Boolean("Recep"));
// // console.log(Boolean(""));
// // console.log(Boolean(-0));

// console.log(Boolean(0));
// console.log(Boolean(-0));
// console.log(Boolean(-0n));
// console.log(Boolean(""));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));

// let myName=""
// if (myName) {
//     console.log("Merhaba mert");
// }
// else{
//     console.log("yoksa burası mı çalışacak");
// }
// let age="asd"
// if (age<18) {
//     console.log("UnderAge");
// } else if (age>=18) {
//     console.log("Adult");
// }
// else{
// console.log("hatalı giriş");
// }

const number = 20;
if (number < 100) {
  if (number > 0) {
    if (number % 2) {
      console.log("tek sayıdır");
    } else {
      console.log("çift sayıdır.");
    }
  }
}

// Logical operators && || !
// console.log(true&&true);
// console.log(true&&false);
// console.log(false&&true);
// console.log(false&&false);

// console.log(true||true);
// console.log(true||false);
// console.log(false||true);
// console.log(false||false);

console.log(0 || NaN || "Ali Özkan" || 1);
console.log("undefined" && "Oğuzhan" && 0 && "Yuşa");
console.log(true && "Oğuzhan" && 1 && "Yuşa");
