const instructor = {
  firstName: "Onur Alp",
  lastName: "Aydın",
  "tc-kNO": 1234567890,
  birthPlace: "Ankara",
  isMarried: false,
  birthYear: 1995,
  hobbies: ["coding", "fishing", "reading"],
  age: function () {
    return 2023 - this.birthYear;
  },
};
// }
// console.log(instructor);
// //dot notation
// console.log(instructor.firstName);
// console.log(instructor.age());
// // console.log(instructor."tc-kNO");

// //bracket notation
// console.log(instructor["lastName"]);
// console.log(instructor["hobbies"]);
// console.log(instructor["tc-kNO"]);
// console.log(instructor);
// instructor.firstName="Yuşa"
// console.log(instructor);
// instructor["tc-kNO"]=9876543210
// console.log(instructor);

instructor.hasAuto = false;
instructor["isStudent"] = true;
console.log(instructor);

//hasOwnProperty
console.log(instructor.hasOwnProperty("firstName"));
console.log(instructor.hasOwnProperty("first-Name"));
console.log(Object.keys(instructor));
console.log(Object.values(instructor));
console.log(Object.entries(instructor)); //key-value'yu bir dizi içine atıp tüm propertyleri de bir dizi şeklinde birleştiriyor.(dizi elemanları(key-value) olan bir dizi)

//Object.freeze
Object.freeze(instructor);
instructor.firstName = "Yuşa";
instructor.Name = "Yuşa";
console.log(instructor);

const copiedInstructor = { ...instructor }; //Orjinal yapının kopyasını alıp üstünde çalışabiliriz.
copiedInstructor.firstName = "Yuşa";
copiedInstructor.Name = "Yuşa";
console.log(instructor);
console.log(copiedInstructor);

const assignInstructor = Object.assign({}, copiedInstructor); //nereye kopyalayayım,neyi kopyalayayım.Boş bir objeye kopyaladık. 2.kopyalama yöntemi
console.log(assignInstructor);
assignInstructor.firstName = "Doğukan";
console.log(assignInstructor);

//seal
Object.seal(copiedInstructor); //değişim yapılır.Ekleme çıkarma yapılamaz.
copiedInstructor.firstName = "Burak";
copiedInstructor.ismi = "Burak";
console.log(copiedInstructor);

delete instructor.firstName;
delete copiedInstructor.firstName;
delete assignInstructor.firstName;
console.log(instructor);
console.log(copiedInstructor);
console.log(assignInstructor);

//Destructring
[firstVariable, secondVariable] = ["Yuşa", "Tosun"];
console.log(firstVariable, secondVariable);
//rest pattern
[firstVariable, secondVariable, ...geriyeKalanDegerler] = [
  "Burak",
  "Ayan",
  "Çağdaş",
  "Yarıcı",
  "Yuşa",
  "Tosun",
  "Tunahan",
  "Söyler",
  "Doğukan",
  "Doğuş",
];
console.log(geriyeKalanDegerler);
console.log(firstVariable, secondVariable);

// object destructring
const { firstName, lastName, birthPlace, ad, soyad, dogumyeri, ...geriye } =
  instructor;
console.log(firstName, lastName, birthPlace, ad, soyad, dogumyeri, geriye);

for (const key in instructor) {
  if (Object.hasOwnProperty.call(instructor, key)) {
    const value = instructor[key];
    console.log(`Property Key:${key}- Value :${value}`);
  }
}
for (const [key, value] of Object.entries(instructor)) {
  console.log(`${key}-----${value}`);
}
