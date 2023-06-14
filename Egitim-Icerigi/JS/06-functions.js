//function declaration
selamDe();
//hoisting
function selamDe() {
  console.log("Merhaba burak");
}
//function expression
//hoisting yok
// selamla("log");
const selamla = function (isim) {
  console.log(`Merhaba --- ${isim}`);
};
selamla("Doğukan");
//arrow function
//hoisting yok
// greetings("Hüseyin",29)
const greetings = (deger, sayi) => console.log(deger, sayi);
greetings("Hüseyin", 29);

// const getCube=(sayi)=>{console.log(sayi**3)}
const getCube = (sayi) => console.log(sayi ** 3);
getCube(5);

const ucSayininToplaminiGetir = (
  birinciToplanan,
  ikinciToplanan,
  ucuncuToplan
) => birinciToplanan + ikinciToplanan + ucuncuToplan;
// let toplam= birinciToplanan+ikinciToplanan+ucuncuToplan;
// return toplam
// return birinciToplanan+ikinciToplanan+ucuncuToplan;
// return birinciToplanan+ikinciToplanan+ucuncuToplan;

console.log(ucSayininToplaminiGetir(1, 2, 3));

//Rest Parameters
const sayilariTopla = (isim, ...gelenSayilar) => {
  let toplam = 0;
  for (let index = 0; index < gelenSayilar.length; index++) {
    toplam += gelenSayilar[index];
  }
  return `${isim}-${toplam}`;
};

console.log(sayilariTopla("hüseyin", 1, 2, 3, 4, 5, 6, 7, 8));

// callback

selamla(ucSayininToplaminiGetir(1, 2, 3));
const topla = (a, b) => a + b;
const cikar = (a, b) => a - b;
const hesapla = (a, b, callbackFunction) => callbackFunction(a, b);
selamla(hesapla(5, 10, topla));
selamla(hesapla(5, 10, cikar));
