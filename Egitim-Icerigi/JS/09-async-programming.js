// const greetings=()=>console.log("HELLO WORLD");
// // console.log("1");
// // console.log("2");
// // setTimeout(greetings,3000)
// // console.log("4");
// // console.log("5");
// // console.log("6");

// // setInterval(()=>{console.log("Her saniye çalışırım")},1000)
// // setTimeout(greetings,6000)

// // XHR=> XML HTTP REQUEST
// // const url="https://jsonplaceholder.typicode.com/posts/1/comments";
// // const XHR=new XMLHttpRequest();
// // console.log(XHR.readyState);
// // XHR.open("GET",url)
// // console.log(XHR.readyState);
// // XHR.responseType="json"
// // XHR.send()
// // console.log(XHR.readyState);
// // XHR.onreadystatechange=()=>{
// //     if (XHR.readyState===4 && XHR.status===200) {
// //         console.log(XHR.readyState);
// //         console.log(XHR.response);
// //     }
// // }
// const URL="https://jsonplaceholder.typicode.com/posts"

// const newPost=JSON.stringify({
//     userId:1,
//     id:99,
//     title:"lorem ipsum dolor sit amet.",
//     body:"qqqqqqertyuıooo"
// })

// const xhr=new XMLHttpRequest();
// xhr.open("POST",URL)
// xhr.onreadystatechange=()=>{
//     if (xhr.readyState===4&&xhr.status===201) {
//         console.log("Nesne yaratıldı.");
//     }
//     else{
//         console.log("Hatalı işlem");
//     }
// }
// xhr.setRequestHeader("Content-type","application/json; charset=utf-8")
// xhr.send(newPost);

//PROMISE
// console.log("************ Promise Nedir?*************");
// // const promiseNesnem=new Promise((resolve,reject)=>{
// // resolve("Başarılı oldu")
// // reject("işlem başarısız oldu.")
// // })
// // console.log(promiseNesnem);
// const promiseNesnem=new Promise((resolve,reject)=>{
//     // resolve("Başarılı oldu")
//     reject("işlem başarısız oldu.")
//     }).then(deger=>console.log(deger)).catch(deger=>console.log(deger));
//     // console.log(promiseNesnem)
//js fetch-then fetchApi
// fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
//   .then((cevap) => cevap.json())
//   .then((donusturulmusNesne) => console.log(donusturulmusNesne))
//   .then(
//     fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
//       .then((cevap) => cevap.json())
//       .then((donusturulmusNesne) => console.log(donusturulmusNesne))
//   )
//   .then(
//     fetch("https://fakestoreapi.com/products")
//       .then((cevap) => cevap.json())
//       .then((donusturulmusNesne) => console.log(donusturulmusNesne))
//   );
// fetch("https://fakestoreapi.com/carts")
//   .then((cevap) => cevap.json())
//   .then((donusturulmusNesne) => console.log(donusturulmusNesne));
// fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
//   .then((cevap) => cevap.json())
//   .then((donusturulmusNesne) => console.log(donusturulmusNesne));
// fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
//   .then((cevap) => cevap.json())
//   .then((donusturulmusNesne) => console.log(donusturulmusNesne));
// fetch("https://jsonplaceholder.typicode.com/users/1/albums")
//   .then((cevap) => cevap.json())
//   .then((donusturulmusNesne) => console.log(donusturulmusNesne));
// fetch("https://jsonplaceholder.typicode.com/users/1/todos")
//   .then((cevap) => cevap.json())
//   .then((donusturulmusNesne) => console.log(donusturulmusNesne));
// fetch("https://jsonplaceholder.typicode.com/users/1/posts")
//   .then((cevap) => cevap.json())
//   .then((donusturulmusNesne) => console.log(donusturulmusNesne));
// fetch("https://fakestoreapi.com/products")
//   .then((cevap) => cevap.json())
//   .then((donusturulmusNesne) => console.log(donusturulmusNesne));

//50 5 20 10 10 20 7
//50 5 10 10 20 20 7
//6 50 10 20 10 20 7
//20 10 10 50 5 20 7
//20 50 10 10 5 20 7
//10 20 5 10 50 20 7

//async await
const asyncGet = async () => {
  const cevap = await fetch("https://fakestoreapi.com/products");
  const donusturulmusNesne = await cevap.json();
  console.log(donusturulmusNesne);
  const cevap1 = await fetch("https://fakestoreapi.com/carts");
  const donusturulmusNesne1 = await cevap1.json();
  console.log(donusturulmusNesne1);
  const cevap2 = await fetch(
    "https://jsonplaceholder.typicode.com/posts/1/comments"
  );
  const donusturulmusNesne2 = await cevap2.json();
  console.log(donusturulmusNesne2);
  const cevap3 = await fetch(
    "https://jsonplaceholder.typicode.com/users/1/todos"
  );
  const donusturulmusNesne3 = await cevap3.json();
  console.log(donusturulmusNesne3);
  const cevap4 = await fetch(
    "https://jsonplaceholder.typicode.com/users/1/albums"
  );
  const donusturulmusNesne4 = await cevap4.json();
  console.log(donusturulmusNesne4);
};
// console.log(1);
// asyncGet();
// console.log(2);
//20 7 5 20 10 => 3.41
//20 7 5 20 10=> 3 .37
//20 7 5 20 10=> 3. 35
//20 7 5 20 10
//20 7 5 20 10
//20 7 5 20 10
//20 7 5 20 10
//20 7 5 20 10

fetch("https://restcountries.com/v3.1/all")
  .then((cevap) => cevap.json())
  .then((donusturulmusNesne) =>
    donusturulmusNesne.filter((ulke) => ulke.name.common === "Turkey")
  )
  .then((kalan) => console.log(kalan));
// almanya türkiye avusturya - macaristan bulgaristan
