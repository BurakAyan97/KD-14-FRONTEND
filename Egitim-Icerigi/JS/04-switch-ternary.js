const month = 8;
const day = 19;
switch (month) {
  case 1:
    console.log("Ocak");
    break;
  case 8:
    console.log("Ağustos");
    break;
  default:
    console.log("Yanlış giriş");
    break;
}

month < 5 ? console.log("DOĞRUYSA") : console.log("Yanlışsa");

//ÖRNEK------------------------
// let day = prompt("Lütfen bir gün adı yazınız");

// switch (day)
// {
//   case "Pazartesi":
//     console.log("1.Gün")
//     break;
//     case "Salı":
//     console.log("2.Gün")
//     break;
//     case "Çarşamba":
//     console.log("3.Gün")
//     break;
//     case "Perşembe":
//     console.log("4.Gün")
//     break;
//     case "Cuma":
//     console.log("5.Gün")
//     break;
//     case "Cumartesi":
//     console.log("6.Gün")
//     break;
//     case "Pazar":
//     console.log("7.Gün")
//     break;
//   default:
//     alert("Yanlış yazdınız.Lütfen geçerli bir gün adı giriniz.İlk harfini büyük yazınız.")
//     break;
// }

// let day = prompt("Lütfen doğum gününüzün kaçıncı gün olduğunu giriniz.");
// let month = prompt("Lütfen doğum ayınızın kaçıncı ay olduğunu giriniz.");

// if ((month == "Şubat" && day > 18) || (month == "Mart" && day < 21)) {
//   alert("Balık");
// } else if ((month == "Mart" && day > 20) || (month == "Nisan" && day < 21)) {
//   alert("Koç");
// } else if ((month == "Nisan" && day > 20) || (month == "Mayıs" && day < 22)) {
//   alert("Boğa");
// } else if ((month == "Mayıs" && day > 21) || (month == "Haziran" && day < 22)) {
//   alert("İkizler");
// } else if (
//   (month == "Haziran" && day > 21) ||
//   (month == "Temmuz" && day < 24)
// ) {
//   alert("Yengeç");
// } else if (
//   (month == "Temmuz" && day > 23) ||
//   (month == "Agustos" && day < 24)
// ) {
//   alert("Aslan");
// } else if ((month == "Agustos" && day > 23) || (month == "Eylül" && day < 24)) {
//   alert("Başak");
// } else if ((month == "Eylül" && day > 23) || (month == "Ekim" && day < 24)) {
//   alert("Terazi");
// } else if ((month == "Ekim" && day > 23) || (month == "Kasım" && day < 23)) {
//   alert("Akrep");
// } else if ((month == "Kasım" && day > 22) || (month == "Ararlık" && day < 23)) {
//   alert("Ymonth");
// } else if ((month == "Aralık" && day > 22) || (month == "Ocak" && day < 21)) {
//   alert("Oğlak");
// } else {
//   alert("Bilgileri doğru düzgün gir.");
// }
