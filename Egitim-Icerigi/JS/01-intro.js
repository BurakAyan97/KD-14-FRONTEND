// // // console.log("Onur Alp Aydın");
// // // console.warn("Onur Alp Aydın");
// // // console.error("Onur Alp Aydın");
// // // console.info("Onur Alp Aydın");
// // // alert("ALERT KULLANDIM")
// // // prompt("input alıyorum")

// // // Variables
// // // myAge=19;
// // // console.log(myAge);
// // // myAge=20;
// // // console.log(myAge);
// // // var myAge="19"
// // // console.log(myAge);
// // // var myAge=20;
// // // console.log(myAge);
// // let myAge=19;
// // console.log(myAge);
// // myAge="Recep"
// // console.log(myAge);
// // myAge=true
// // console.log(myAge);
// // // let testVariable;
// // // const anotherTestVariable;
// // const myName="Onur";
// // console.log(myName);
// // // myName="Çağdaş"
// // // console.log(myName);
// // let dizim=["Doğukan","Yuşa",123,true,["Test"]]
// // console.log(dizim);
// // dizim="Tunahan"
// // console.log(dizim);

// // // var var;
// // // let let="123"
// // // const const;
// // //
// // let $mySurname="Aydın";
// // let _mySurname="Aydın";
// // // let 123mySurname="Aydın";
// // // let my Surname="Aydın";
// // //  let my-Surname="Aydın";
// // const myBestFriend="Kendim";
// // console.log(myBestFriend);

// // //Primitive Data Types.
// // // String-Number-Boolean-undefined-null-Symbol
// // let undefinedVariable;
// // console.log(undefinedVariable);
// // const myUndefinedVariable=undefined;
// // console.log(myUndefinedVariable);
// // let nullVariable=null;
// // console.log(nullVariable);
// // const $nullVariable=null;
// // console.log($nullVariable);

// // typeof
// let stringVariable="123"
// let numberVariable=123
// let booleanVariable=true
// let undefinedVariable=undefined
// let nullVariable=null;
// let symbolVariable='$'
// console.log(symbolVariable);
// console.log(typeof(stringVariable));
// console.log(typeof numberVariable );
// console.log(typeof booleanVariable );
// console.log(typeof undefinedVariable );
// console.log(typeof nullVariable );
// console.log(typeof (symbolVariable) );
// console.log(typeof (19+5) );
// let testVariable=NaN;
// console.log(typeof (testVariable) );
// // console.log(testVariable);

// let bigIntVariable=123n;
// console.log(bigIntVariable);
// console.log(typeof (bigIntVariable) );

//Data Conversions
// let myPromptVariable=prompt("lütfen yaşınızı giriniz")
// console.log(myPromptVariable+5);
// console.log(typeof myPromptVariable);
// console.log(Number(myPromptVariable)+5);
// console.log(typeof myPromptVariable);

const pi = Number("3.14");
console.log(typeof pi);
console.log(Number("65 856"));
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(14543));
console.log("***********************************************");
console.log(Boolean(""));
console.log(Boolean("özkan"));
console.log(Number(true));
console.log(Number(false));
console.log(Number(""));
console.log(Number("Çağdaş"));
console.log(String(true));
//auto type conversion
console.log(5 + null);
console.log("5" + null);
console.log(5 + 1);
console.log(5 + "1");
console.log("20" / 2);
console.log("merhaba" / 2);

//+ - * / %

console.log(100 + 30 * 2); //160
console.log(200 / 100 + 30 * 2); //62 //110
console.log((200 / (100 + 30)) * 2); //3.076
console.log(5 % 3);

//concentration
const brand = "Ferrari";
const consumption = 12.9;
console.log(
  "The vehicle is a " + brand + " and it consumes " + consumption + " L/100km"
);
//template literals
console.log(`The vehicle is a ${brand} and it consumes ${consumption} L/100km`);
console.log(`" '' "`);
console.log('            ""                ');

let myVariable = "Tunahan";
console.log(myVariable[0]);
console.log(myVariable[1]);
console.log(myVariable[2]);
console.log(myVariable[3]);
console.log(myVariable[4]);
console.log(myVariable[5]);
console.log(myVariable[6]);
console.log(myVariable[7]); //undefined.

console.log("***********************");
console.log(myVariable[myVariable.length - 1]);
console.log(myVariable.length);

//ÖRNEK 1
//kullanıcıdan 2 sayı alınız ve bu sayıların 4 işlemini ve mod işlemlerini ekrana ve console a yazdırınız.
let firstNumber = Number(prompt("Lütfen ilk sayıyı giriniz."));
let secondNumber = Number(prompt("Lütfen ikinci sayıyı giriniz"));
let toplama = firstNumber + secondNumber;
let cikarma = firstNumber - secondNumber;
let carpma = firstNumber * secondNumber;
let bolme = firstNumber / secondNumber;
let mod = firstNumber % secondNumber;

console.log(toplama);
console.log(cikarma);
console.log(carpma);
console.log(bolme);
console.log(mod);

alert("Toplama sonucu " + toplama);
alert("Çıkarma sonucu " + cikarma);
alert("Çarpma sonucu " + carpma);
alert("Bölme sonucu " + bolme);
alert("Mod sonucu " + mod);
