//function declaration
// selamDe();
// //hoisting
// function selamDe() {
//   console.log("Merhaba burak");
// }
// //function expression
// //hoisting yok
// // selamla("log");
// const selamla = function (isim) {
//   console.log(`Merhaba --- ${isim}`);
// };
// selamla("Doğukan");
// //arrow function
// //hoisting yok
// // greetings("Hüseyin",29)
// const greetings = (deger, sayi) => console.log(deger, sayi);
// greetings("Hüseyin", 29);

// // const getCube=(sayi)=>{console.log(sayi**3)}
// const getCube = (sayi) => console.log(sayi ** 3);
// getCube(5);

// const ucSayininToplaminiGetir = (
//   birinciToplanan,
//   ikinciToplanan,
//   ucuncuToplan
// ) => birinciToplanan + ikinciToplanan + ucuncuToplan;
// // let toplam= birinciToplanan+ikinciToplanan+ucuncuToplan;
// // return toplam
// // return birinciToplanan+ikinciToplanan+ucuncuToplan;
// // return birinciToplanan+ikinciToplanan+ucuncuToplan;

// console.log(ucSayininToplaminiGetir(1, 2, 3));
// selamla(ucSayininToplaminiGetir(1, 2, 3));

// //Rest Parameters
// const sayilariTopla = (isim, ...gelenSayilar) => {
//   let toplam = 0;
//   for (let index = 0; index < gelenSayilar.length; index++) {
//     toplam += gelenSayilar[index];
//   }
//   return `${isim}-${toplam}`;
// };

// console.log(sayilariTopla("hüseyin", 1, 2, 3, 4, 5, 6, 7, 8));

// // callback
// const topla = (x, y) => x + y;
// const cikar = (x, y) => x - y;

// const hesapla = (a, b, c, bosFonskiyon) => bosFonskiyon(a, b, c);
// selamla(hesapla(5, 10, 20, topla));
// selamla(hesapla(5, 10, 54, cikar));

//--------------------------ÖRNEKLER--------------------------------------------
const dereceler = [10, 20, 30, 40, 50, 60];
const convertedArray = [];
// hangi derece(hangi dizi-hangi eleman gelirse gelsin) dereceyi alıp isteğe göre kelvin ya da fahrenheit a ceviren fonksiyonu yazınız.fonksiyonu invoke ettiğimizde convert(dizi,kelvin)=>[283,293,303,313,323]

// let choice = prompt(
//   "Lütfen çevirmek istediğiniz değeri giriniz.(Kelvin/Fahrenheit)"
// );
// const convertCelciusToKelvin = (a, b) => {
//   if (choice === "Kelvin") {
//     for (let index = 0; index < a.length; index++) {
//       let convertedItem = a[index] + 273;
//       b.push(convertedItem);
//     }
//     return b;
//   } else if (choice === "Fahrenheit") {
//     for (let index = 0; index < a.length; index++) {
//       let convertedItem = a[index] * 1.8 + 32;
//       b.push(convertedItem);
//     }
//     return b;
//   }
// };
// console.log(convertCelciusToKelvin(dereceler, convertedArray));
// -----------------------------------------------------------------------------------------------------------------------
// yukarıdaki fonksiyonun bir benzeri  görevi sadece hesapladığı değerleri console a yazdırmak olsun.

// const showConsole = (array) => {
//   console.log(array);
// };
// showConsole(convertedArray);
// -----------------------------------------------------------------------------------------------------------------------
// // girilen her bir isim, değer için console a naber mesajı yazdırın
// const array = ["burak", 12, "elma", "şeker"];
// const whatsup = (value) => {
//   for (let index = 0; index < value.length; index++) {
//     console.log(`${index}. naber yazısı`);
//   }
// };
// whatsup(array);
// -----------------------------------------------------------------------------------------------------------------------
// bir adet hesapla fonksiyonu yazınız alacağı parametreler 1.sayi,2.sayi,işlem.(önce if else ile yapınız sonra her işlem için bir fonksiyon yazınız)(callback nedir????) 4 işlem + 1.sayının 2. sayıya göre kuvvetini hesaplama.
// const calculate = (firstNumber, secondNumber, calculation) => {
//   if (calculation == "sum") {
//     return console.log(firstNumber + secondNumber);
//   } else if (calculation == "sub") {
//     return console.log(firstNumber - secondNumber);
//   } else if (calculation == "multi") {
//     return console.log(firstNumber * secondNumber);
//   } else if (calculation == "div") {
//     return console.log(firstNumber / secondNumber);
//   } else if (calculation == "mod") {
//     return console.log(firstNumber % secondNumber);
//   } else {
//     console.log("Değerleri düzgün giriniz.");
//   }
// };

// calculate(12, 5, "mods");

// const calculateSum = (firstNumber, secondNumber) => {
//   console.log(firstNumber + secondNumber);
// };
// const calculateSub = (firstNumber, secondNumber) => {
//   console.log(firstNumber - secondNumber);
// };
// const calculateMultiple = (firstNumber, secondNumber) => {
//   console.log(firstNumber * secondNumber);
// };
// const calculateDivorce = (firstNumber, secondNumber) => {
//   console.log(firstNumber / secondNumber);
// };
// const calculateMod = (firstNumber, secondNumber) => {
//   console.log(firstNumber % secondNumber);
// };

// calculateSum(2, 5);
// calculateSub(2, 5);
// calculateMultiple(2, 5);
// calculateDivorce(2, 5);
// calculateMod(2, 5);
// -----------------------------------------------------------------------------------------------------------------------

// console a adınızı yazan fonksiyonu yazınız 3 yöntem
// function name() {
//   console.log("Burak");
// }

// const name2 = function (isim) {
//   console.log("Burak");
// };

// const name3 = (isim) => {
//   console.log("Burak");
// };

// name();
// name2();
// name3();
// -----------------------------------------------------------------------------------------------------------------------

//isim soyisim alan console a merhaba mesajını veren fonksiyonu yazınız. girilen 3 sayının 4 işlemini yapan fonksiyonu yazınız. Kullanıcıdan alabilirsiniz ya da almak zorunda değilsiniz
// const Name = prompt("Lütfen isminizi giriniz");
// const Surname = prompt("Lütfen soyisiminizi giriniz");
// const sayHi = (a, b) => {
//   alert(`Merhaba ${a} ${b}`);
// };
// sayHi(Name, Surname);

// const number1 = Number(prompt("Lütfen bir sayı giriniz"));
// const number2 = Number(prompt("Lütfen ikinci sayıyı giriniz"));
// const number3 = Number(prompt("Lütfen üçüncü sayıyı giriniz"));

// const calculateThreeNumbers = (a, b, c) => {
//   console.log(a + b + c);
//   console.log(a - b - c);
//   console.log(a * b * c);
//   console.log(a / b / c);
// };

// calculateThreeNumbers(number1, number2, number3);

// bir adet log functionu yazınız görevi girilen değeri console a basmak. bir dizi tanımlayınız diziyi gezip log functionu ile elemanları console a yazdırınız.

const logFunc = (value) => {
  console.log(value);
};

// kendi reverse fonksiyonunuzu yazınız
// bir adet öğrenci dizisi tanımlayınız. her bir elemanı console a yazdırınız. log funct. ile
// çift indexteki elemanları yazdırınız
// (2 tane log fonksiyonunuz olmalı)
// //bir adet hesapla fonksiyonu yazınız. Kaç sayı girileceği belirli olmasın ve işlem bilgisi argüman olarak alınabilsin.
