// let myFriend = "Burak";
// let myFriend1 = "Mert";
// let myFriend2 = "Hüseyin";
// let myFriend3 = "Yuşa";
// let myFriend4 = "Deniz";

// // const myFriendsArray=new Array("Burak","Mert","Hüseyin","yUŞA","dENİZ",true,19,["a","b",false,"c"])
// const myFriendsArray = [
//   "Burak",
//   "Mert",
//   "Hüseyin",
//   "yUŞA",
//   "dENİZ",
//   true,
//   19,
//   ["a", "b", false, "c"],
//   "Mert",
// ];
// console.log(myFriendsArray);
// console.log(myFriendsArray[1]);
// console.log(myFriendsArray[7][1]);
// console.log(myFriendsArray[7].length);
// myFriendsArray[3]="Yuşa";
// console.log(myFriendsArray);

//Array Methods.
// let pushValue=myFriendsArray.push("Özkan")
// // let pushValue1=myFriendsArray.push("Özkan","Ali","Ali Özkan")
// console.log(pushValue);
// console.log(myFriendsArray);

// let popValue=myFriendsArray.pop()
// console.log(myFriendsArray);
// console.log(popValue);

// let shiftValue=myFriendsArray.shift()
// console.log(myFriendsArray);
// console.log(shiftValue);

// let unshiftValue=myFriendsArray.unshift("Doğukan","Çağdaş","Beste","Oğuzhan")
// console.log(myFriendsArray);
// console.log(unshiftValue);

// let sliceValue=myFriendsArray.slice()
// console.log(sliceValue);
// console.log("************");
// console.log(myFriendsArray);
// sliceValue.push("Onur")
// console.log("-------------");
// console.log(sliceValue);
// console.log(myFriendsArray);
// let sliceValue=myFriendsArray.slice(3)
// let sliceValue=myFriendsArray.slice(3,5)//YUŞA-DENİZ
// console.log(sliceValue);
// console.log(myFriendsArray);
// //SPREAD OPERATOR
// const yeniDizim=[...myFriendsArray]
// yeniDizim.pop()
// console.log(myFriendsArray);
// console.log(yeniDizim);

// const yeniDizi=myFriendsArray
// myFriendsArray.push("ANKARA")
// console.log(myFriendsArray);
// console.log(yeniDizi);

// let mySpliceValue=myFriendsArray.splice(0);//bütün elemanları siler 0. indexten-sona
// let mySpliceValue=myFriendsArray.splice(2,3);
// let mySpliceValue=myFriendsArray.splice(2,1,"Onur","Alp","Aydın");
// console.log(mySpliceValue);
// console.log(myFriendsArray);

// let myReverseValue=myFriendsArray.reverse()
// let myReverseValue=myFriendsArray.reverse().splice(0,1,"Sildim ekledim")
// console.log(myFriendsArray);
// console.log(myReverseValue);

// const anotherArray=[1,2,3,4,["kedi","köpek"]]
// const anotherArray1=[1,2,3,4,["kedİ1","köpek1"]]
// let concatValue=anotherArray.concat(myFriendsArray,anotherArray1)
// console.log(concatValue);
// const birlestirilmisDizi=[...myFriendsArray,...anotherArray,...anotherArray1]

// let joinValue=myFriendsArray.join("-")
// console.log(myFriendsArray);
// console.log(joinValue);

// let indexOfValue=myFriendsArray.indexOf("Mert")
// let indexOfValue=myFriendsArray.indexOf("Mert",2)
// console.log(indexOfValue);
// let lastIndexOfValue = myFriendsArray.lastIndexOf("Mert");
// // let lastIndexOfValue=myFriendsArray.lastIndexOf("Mert",7)
// console.log(lastIndexOfValue);

// console.log(myFriendsArray.includes("Burak"));
// console.log(myFriendsArray.includes("BuraK"));
// console.log(myFriendsArray.includes(19));
// console.log(myFriendsArray.includes("19"));

// const myArray = ["domates", 15, true, "patates", 20, false];
// // Diziye eleman ekleme
// myArray.push("elma"); // Dizinin sonuna "elma" ekler
// myArray.unshift("portakal"); // Dizinin başına "portakal" ekler

// // Belirli bir konuma eleman ekleme
// myArray.splice(2, 0, "muz"); // İndeks 2'ye "muz" ekler

// // Diziden eleman silme
// myArray.pop(); // Dizinin son elemanını siler
// myArray.shift(); // Dizinin ilk elemanını siler

// // Belirli bir indeksi veya değeri silme
// myArray.splice(3, 1); // İndeks 3'teki elemanı siler
// myArray.splice(myArray.indexOf("domates"), 1); // "domates" değerini siler

// // Belirli bir indeksteki elemanı güncelleme
// myArray[1] = 10; // İndeks 1'deki değeri 10 olarak günceller

// // Belirli bir değeri güncelleme
// myArray[myArray.indexOf("patates")] = "havuç"; // "patates" değerini "havuç" ile günceller

// console.log(myArray);

// const addingJoin = myArray.join("+"); //Dizi elemanları arasına yazılan karakteri koyar.
// console.log(myArray);

const dizi = [
  "burak",
  "ayan",
  26,
  true,
  "tavuk",
  "çağdaş",
  "c#",
  ".net",
  "API",
  "MSSQL",
];
dizi[0] = "Ahmet";
console.log(dizi);
console.log(dizi.length);
let firstLength = dizi.length;
dizi.push("Qhedy");
console.log(dizi);
let deletedLastItem = dizi.pop();
console.log(deletedLastItem);
let deletedFirstItem = dizi.shift();
console.log(dizi.length);
let lastLength = dizi.length;

const newArray = [deletedLastItem, deletedFirstItem, firstLength, lastLength];
console.log(newArray);

const combinedArray = [...dizi, ...newArray];
const combinedArrayWithConcat = dizi.concat(newArray);
console.log(combinedArray);
console.log(combinedArrayWithConcat);

console.log(dizi.includes("Veli"));
console.log(combinedArray.includes("patates", 5));

console.log(combinedArray.indexOf("tavuk"));

let firstThreeItems = combinedArray.slice(0, 3);
console.log(firstThreeItems);

firstThreeItems.splice(1, 1, "Gattuso", "Nesta", "Maldini");
console.log(firstThreeItems);
