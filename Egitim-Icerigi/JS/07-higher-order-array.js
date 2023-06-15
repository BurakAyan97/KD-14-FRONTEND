// const ages = [10, 25, 19, 9, 11, 65, 8, 27, 39, 45, 88];
// // //foreach
// // let foreachValue=ages.forEach((deger,index)=>{console.log(`${index}-${deger}`)})
// // console.log(foreachValue);
// // //map
// // let mapValue=ages.map((deger,index)=>{return`${index}-${deger*3}`})
// // console.log(mapValue);
// //filter
// let filterValue = ages.filter((deger) => deger > 17);
// console.log(filterValue);

// //öğrenciler dizisi.

// //every
// console.log(ages.every((deger) => deger > 0)); //true
// console.log(ages.every((deger) => deger > 25)); //false

// //some
// console.log(ages.some((deger) => deger > 46)); //true
// console.log(ages.some((deger) => deger > 100)); //false

// //find
// console.log(ages.find((deger) => deger > 44));
// //findLast
// console.log(ages.findLast((deger) => deger > 44));

// //findIndex
// console.log(ages.findIndex((deger) => deger > 44));

// //sort
// const myFriends = [
//   "Yuşa",
//   "Cağdaş",
//   "Doğukan",
//   "Tunahan",
//   "Ali Özkan",
//   "Alev Deniz",
//   "Burak",
// ];
// console.log(ages.sort((a, b) => a - b));
// console.log(myFriends.sort());

// //reduce
// console.log(
//   myFriends.reduce((isimlerinBirlesikHali, suAndakiDeger) => {
//     return isimlerinBirlesikHali + suAndakiDeger;
//   }, "ONUR ALP AYDIN")
// );
// console.log(
//   ages.reduce((toplam, gelenSayi) => {
//     return toplam + gelenSayi;
//   }, 10)
// );

// kendi foreach ve map fonksiyonlarınızı yazınız.
// const myArray = ["Burak", "Ayan", 27, true, "Kedi", "Elma"];
// myArray.forEach((deger) => {
//   console.log(deger);
// });
// let mapArray = myArray.map((value) => {
//   return value;
// });
// console.log(mapArray);
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
// bir öğrenci dizisi tanımlayınız. her bir elemanı console a yazdırınız .
// const students = ["Burak", "Şeyma", "Alişan", "David", "Mathilda"];
// students.forEach((student) => {
//   console.log(student);
// });
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
//bu öğrenci dizisindeki çift indexli elemanları console a yazdırınız.
// for (let index = 0; index < students.length; index++) {
//   if (index % 2 == 0) {
//     console.log([index]);
//   }
// }
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
// bir dizi tanımlayınız elemanları 11 in katları olsun 6-7 eleman yeterli. 11 in katlarından 2 ye bölünenleri ayırıp,karesini alıp yeni bir dizide döndürünüz.
// const myArray = [11, 22, 33, 44, 55, 66, 77];
// const emptyArray = [];

// myArray.forEach((deger) => {
//   if (deger % 2 == 0) {
//     deger = deger * deger;
//     emptyArray.push(deger);
//   }
// });
// console.log(emptyArray);

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
//11 in katlarını içeren dizideki elemanları toplatıp sonucu console a yazdırınız.
// console.log(
//   myArray.reduce((a, b) => {
//     return a + b;
//   })
// );

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
// oğrencilerin isimlerini yan yana fonksiyonu yazınız
// console.log(
//   students.reduce((a, b) => {
//     return a + b;
//   })
// );
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
// bir dizi tanımlayınız içerisinde sayılar olsun 10 elemandan az olmasın . Kendini tekrar eden 1-2 eleman kullanın. dizinin elemanları 50 den büyük olmasın. Orta sıralardaki elemanlardan biri 50 olsun.
// a-)dizinin bütün elemanları 30 dan büyük mü kontrol ediniz
const myArray = [1, 2, 34, 32, 2, 48, 50, 22, 18, 36, 1, 12, 4, 46];
console.log(myArray.every((value) => value > 30));
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
// b-)dizide 10 dan büyük eleman var mı kontrol ediniz.
console.log(myArray.some((value) => value > 10));
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
// c-)dizim eleman olarak 50 yi içeriyor mu bulunuz.
console.log(myArray.includes(50));
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
// d-)dizinin elemanlarından 5 in katları olanları ayırınız. yeni bir dizide gösteriniz. yoksa zaten yeni bir dizide mi gösteriyor ?
myArray.forEach((deger) => {
      if (deger % 2 == 0) {
         deger = deger * deger;
         emptyArray.push(deger);
       }
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
// e-)50 nin indexini bulunuz
// f-)dizinin elemanlarını sıralayınız

//öğrenci dizisine ismi a ile başlayan 2 öğrenci daha ekleyiniz. Toplam 3 A harfli öğrenci olacak.
//ismi a ile başlayan ilk arkadaşı console a yazdırınız.
//ismi a ile başlayan son arkadaşı console a yazdırınız
//ismi a ile başlayan bütün arkadaşı console a yazdırınız.
// öğrebnci dizisinin elemanlarını sıralayınız
