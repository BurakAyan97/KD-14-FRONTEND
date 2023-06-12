let myVariable = "Tom Hans Sam Johny Tony Herkel Frank";
let myVariable1 = "       Tom,Hans,Sam,Johny,Tony,Herkel,Frank                ";
let myVariable2 = "Tom Hans Sam Johny Tom Tony Herkel Tom Frank Tom";
// console.log(myVariable);
// console.log(myVariable.length);
// let lengthDegeri=myVariable.length;
// console.log(lengthDegeri);
// let toUpperCaseDegeri=myVariable.toUpperCase();
// console.log(toUpperCaseDegeri);
// let toLowerCaseDegeri=myVariable.toLowerCase();
// console.log(toLowerCaseDegeri);
// console.log(myVariable.substring());
// console.log(myVariable.substring(0));
// console.log(myVariable.substring(0,5));
// console.log(myVariable.substring(4,14));
// console.log(myVariable.substring(3));
// console.log(myVariable.substring(3,0));
// console.log(myVariable.substring(0,3));
// console.log(myVariable.substring(-1,14));
// console.log(myVariable.substring(-7,14));
// let mySplitVariable=myVariable.split(" ")
// console.log(myVariable.split(" "));
// console.log(myVariable1.split(","));
// // console.log(mySplitVariable);
// console.log(myVariable1);
// console.log(myVariable1.trim());
// console.log(myVariable1.trimStart());
// console.log(myVariable1.trimEnd());
// console.log(myVariable.replace("Tom","Ali Özkan"));
// console.log(myVariable2.replace("Tom","Ali Özkan"));
// console.log(myVariable2.replaceAll("tom","Ali Özkan Pekmez"));
// console.log(myVariable.slice());
// console.log(myVariable.slice(1));
// console.log(myVariable.slice(1,5));
// console.log(myVariable.slice(-13));
// console.log(myVariable.slice(-12,-6));
console.log(myVariable.includes("hans"));
console.log(myVariable.includes("Hans"));
console.log(myVariable.includes("Hans", 1));
console.log(myVariable.includes("Hans", 7));
console.log(myVariable.indexOf("Hans")); //
console.log(myVariable.indexOf("Hans", 15)); //-1 bulamadı
console.log(myVariable2.indexOf("Tom", 4));
console.log(myVariable2.indexOf("Tom", 20));
console.log(myVariable2.indexOf("Tom", 36));
console.log(myVariable2.indexOf("Tom", 46));
console.log(myVariable2.lastIndexOf("Tom"));
console.log(myVariable2.lastIndexOf("Tom", 44));

console.log(myVariable.substr(3, 15));

//ÖRNEK------------------
let myQuote =
  "Yatağımın karşısında bir pencere var. Odanın duvarları bomboş. Nasıl yaşadım on yıl bu evde? Bir gün duvara bir resim asmak gelmedi mi içimden? Ben ne yaptım? Kimse de uyarmadı beni. İşte sonunda anlamsız biri oldum. İşte sonum geldi. Kötü bir resim asarım korkusuyla hiç resim asmadım; kötü yaşarım korkusuyla hiç yaşamadım -Oğuz Atay , Tutunamayanlar";
console.log(myQuote.length);
console.log(myQuote.substring(0, 11));
console.log(myQuote.substring(11));
console.log(myQuote.slice(-5));
console.log(myQuote.slice(-15, -5));
console.log(myQuote.substring(0, myQuote.length - 15));
console.log(myQuote.slice(0, 7));

let myText = "      bİlgE Adam ankara ankara ankara ankara       ";
console.log(myText.toUpperCase());
console.log(myText.toLowerCase());
console.log(myText.replaceAll("ankara", "istanbul"));
console.log(myText.replaceAll("ankara", 2));
console.log(myText.split(" "));
console.log(myText[3]);
console.log(myQuote.includes("ankara"));
console.log(myText.indexOf("ankara"));
console.log(myText.lastIndexOf("ankara"));
