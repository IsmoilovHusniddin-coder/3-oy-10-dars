// 1. JavaScript asoslari va o‘zgaruvchilar

// Topshiriq 1:

// StudentName degan o‘zgaruvchi yarating va unga ism yozing. So‘ngra uni boshqa ismga o‘zgartiring (let bilan).

// let name = "Asror"
// name = "Abdulaziz"

// Topshiriq 3: Ikkita sonni uchinchi o‘zgaruvchisiz almashtiring.

// 2. Ma’lumot turlari va typeof

// Topshiriq 4: Barcha primitive turlarga misol keltirib, ularning typeof orqali turini aniqlang.

// console.log(typeof "salom");
// console.log(typeof 13);
// console.log(typeof true);
// console.log(typeof 13n);

//Topshiriq 5: Telefon raqamini number va string sifatida saqlang. + operatorining qanday farq bilan ishlashini ko‘rsating.

// let n = (name) + 0
// let nn = (name) - 0
// console.log(n);
// console.log(nn);

// Topshiriq 6: BigInt dan foydalanib, O‘zbekiston aholisi sonini saqlang.

// let people = 37698000
// console.log(BigInt(people));

// 3. Operatorlar

// Topshiriq 7: Quyidagi kodlar qanday natija berishini aniqlang va sababini tushuntiring:

// console.log("5" + 2); //string
// console.log("5" - 2); //number
// console.log(2 * "4"); //number
// console.log("salom" * 5); //Nan

// 4. Shart operatorlari (if, else if)

// Topshiriq 8: prompt orqali foydalanuvchidan yoshini so‘rang.

// let age = prompt("Yosh kiriting")
// if (age > 0 && age <= 13) {
//     console.log("Bola");
// } else if (age > 13 && age <= 20) {
//     console.log("O'smir");
// } else if (age > 20 && age <= 65) {
//     console.log("Katta yoshdagi");
// } else {
//     console.log("Qariyalar");
// }


// Topshiriq 9: Raqam juft yoki toq ekanligini ternary operator bilan aniqlang.

// let n = prompt("Son kiriting")
// let res = n % 2 == 0 ? "Juft" : "Toq"
// console.log(res);

// 5. Switch va mantiqiy operatorlar

// Topshiriq 10: Foydalanuvchidan haftaning qisqa nomini so‘rang (mon, tue, wed...), switch yordamida to‘liq nomini chiqaring.

// let day = prompt("Hafta kiriting")
// switch (day) {
//     case "mon":
//         console.log("Monday");
//         break;
//     case "tue":
//         console.log("Tuesday");
//         break;
//     case "wed":
//         console.log("Wednesday");
//         break;
//     case "thu":
//         console.log("Thursday");
//         break;
//     case "fri":
//         console.log("Friday");
//         break;
//     case "sat":
//         console.log("Saturday");
//         break;
//     case "sun":
//         console.log("Sunday");
//         break;
//     default:
//         console.log("To'g'ri ma'lumot kiriting");

// }

// Topshiriq 11: Foydalanuvchi login va parol kiritganida || va && operatorlari yordamida tekshirib chiqilsin.

// let login = prompt("Login")
// let pas = prompt("Password")
// if ((login > 0 && login < 10) && (pas >= 10 && pas < 100)) {
//     console.log("Siz bizning foydalanuvchimizsiz");
// } else if ((login > 0 && login < 10) || (pas >= 10 && pas < 100)) {
//     console.log("Login yoki parol noto'g'ri kiritildi");
// } else {
//     console.log("Login va parol noto'g'ri kiritildi");
// }

// 6. Takrorlovchilar (for, while, do while)

// Topshiriq 12: 1 dan 50 gacha bo‘lgan juft sonlarni chiqaring.

// for (let i = 1; i <= 50; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

//Topshiriq 13: 1 dan 100 gacha bo‘lgan 3 va 5 ga karrali sonlar yig‘indisini toping.


// let res = 0
// for (let i = 1; i <= 100; i++) {
//     if ((i % 3 == 0) && (i % 5 == 0)) {
//         res += i
//     }
// }
// console.log(res);

// Topshiriq 14: Foydalanuvchidan son olib, uning 1 dan 10 gacha bo‘lgan ko‘paytma jadvalini chiqaring

// let n = prompt("Son kiriting")
// for (let i = 1; i <= 10; i++) {
//     console.log(`${n}*${i}=${n * i}`);
// }

// 7. Massivlar (array)

// Topshiriq 16: Sevimli 5ta mevangizdan iborat massiv yarating:

// let arr = ["anor", "banan", "limon", "anjir", "mandarin"]

// for (let i = 0; i < arr.length; i++) {
//     arr[1] = "ananas"
// }
// arr.push("nok")
// console.log(arr);
// console.log(arr[arr.length - 1]);

// Topshiriq 17: Massiv ichidagi juft sonlar sonini hisoblang.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         console.log(arr[i]);
//     }
// }

// Topshiriq 18: Berilgan massivni teskari tartibda yangi massivga saqlang.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
// for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
// }

// 8. Ob’ektlar (object)

// Topshiriq 19: Quyidagi xususiyatlarga ega car ob’ekti yarating:
// •	brand, model, year, colors (array), start() metodi (konsolga "Car started" yozsin)
// let n = prompt("car enter").toLocaleLowerCase()
// let car = {
//     brand: "BMW",
//     model: "M5",
//     year: 2025,
//     colors: "red"
// }
// if (n === "car") {
//     console.log(car);
// } else {
//     console.log("Malumot xato kiritildi");
// }


// Topshiriq 20: Quyidagi xususiyatlarga ega student ob’ekti yarating:

// let student = {
//     ism: "Asror",
//     yosh: "17",
//     manzil: "Uzbekistan",
//     fanlar: "math and english",
//     getInfo: function () {
//         console.log("Ism:", this.ism);
//         console.log("Yosh:", this.yosh);
//         console.log("Manzil:", this.manzil);
//         console.log("Fanlar:", this.fanlar);
//     }
// }
// student.getInfo()


// ⭐ Bonus (Ijodiy mini loyihalar)

// Topshiriq 21: Math.random() yordamida tasodifiy kulgili hazillar chiqadigan "Hazil generatori" tuzing (arraydan foydalaning).


// let kulguliArr = [
//     "😂 Bugun aqlimni yo‘qotdim, topgan odamga mukofot bor!",
//     "🤣 JavaScript o‘rganaman dedim, endi tunda tilda 'function' deb gapiraman.",
//     "😅 Kompyuterim menga 'error' dedi, men unga 'sen ham!' dedim.",
//     "😂 Mushuk WiFi parolini biladi, faqat aytmayapti.",
//     "🤣 5 daqiqa dam olaman degandim... 3 soat o‘tdi.",
//     "😆 Dasturchi do‘stim bor – doimo 'bug' bilan birga yashaydi.",
//     "😂 Ko‘zoynak taqdim, lekin telefonda hali ham emoji noto‘g‘ri chiqyapti.",
//     "🤣 Kompyuterimga suv to‘kildi, endi u 'suzuvchi operatsion tizim'."
// ];
// let tasodifiyIndex = Math.floor(Math.random() * kulguliArr.length);
// console.log(kulguliArr[tasodifiyIndex]);

// ✅ 1. Talabalar ro'yxati va ballar

// let students = [
//     { name: "Ali", score: 88 },
//     { name: "Vali", score: 76 },
//     { name: "Karim", score: 95 },
//     { name: "Malika", score: 60 },
//     { name: "Ozod", score: 45 },
// ];

// •	Barcha studentlarning ismini console.log() qiling.

// for (let i = 0; i < students.length; i++) {
//     // console.log(students[i].name);
// }

// •	Faqatgina 80 dan yuqori olganlarni chiqaring.
// for (let i = 0; i < students.length; i++) {
//     // if (students[i].score >= 80) {
//     //     console.log(students[i]);
//     // }
// }

// •	O‘rtacha ballni hisoblang.
// let res = 0
// for (let i = 0; i < students.length; i++) {
// res += students[i].score
// }
// res /= students.length
// console.log(res);

// •	Eng baland ball olgan talabani toping.
// let res = students[0].score
// console.log(res);
// for (let i = 0; i < students.length; i++) {
//     if (res < students[i].score) {
//         console.log(students[i]);
//     }
// }


// ✅ 2. Mahsulotlar narxi (Do'kon)

// let products = [
//     { name: "non", price: 3000 },
//     { name: "sut", price: 8000 },
//     { name: "yog'", price: 16000 },
//     { name: "tuxum", price: 1000 },
//     { name: "shakar", price: 7000 },
// ];

// •	Har bir mahsulot nomi va narxini chiqaruvchi loop yozing.
// for (let i = 0; i < products.length; i++) {
//     console.log(`${products[i].name} - ${products[i].price}`);
// }

// •	Faqat 7000 so‘mdan arzon mahsulotlarni ko‘rsating.
// for (let i = 0; i < products.length; i++) {
//     if (products[i].price < 7000) {
//         console.log(`${products[i].name} - ${products[i].price}`);
//     }
// }

// •	Narxi eng qimmat mahsulotni toping.
// let res = products[0].price
// for (let i = 0; i < products.length; i++) {
//     if (products[i].price > res) {
//         res = products[i].price


//     }
// }
// console.log(res);

// •	Umumiy narxlarni hisoblang (jami qancha pul kerak?).
// let res = 0
// for (let i = 0; i < products.length; i++) {
//     res += products[i].price
// }
// console.log(res);



// ✅ 3. Avtolar ro'yxati

// let cars = [
//     { brand: "Toyota", year: 2010 },
//     { brand: "Chevrolet", year: 2018 },
//     { brand: "Kia", year: 2015 },
//     { brand: "BMW", year: 2020 },
// ];


// •	2015 yildan keyin chiqqan mashinalarni chiqarish.
// for (let i = 0; i < cars.length; i++) {
//     if (cars[i].year > 2015) {
//         console.log(`${cars[i].brand} - ${cars[i].year}`);
//     }
// }

// •	Faqat brand larini alohida massivga yig‘ib olish.
// let res = []
// for (let i = 0; i < cars.length; i++) {
//     res.push(cars[i].brand)
// }
// console.log(res);

// •	Yil bo‘yicha eng eski mashinani aniqlash.

// let res = cars[3].year
// for (let i = 0; i < cars.length; i++) {
//     if (cars[i].year < res) {
//         res = cars[i].year


//     }
// }
// console.log(res);

// ✅ 4. Fanlar bo‘yicha o‘quvchi baholari

// let student = {
//     name: "Bobur",
//     age: 17,
//     scores: {
//         math: 90,
//         physics: 75,
//         english: 85,
//         history: 70
//     }
// };
// •	Har bir fanning nomi va ballini for in orqali chiqaring.
// for (const key in student.scores) {
//     console.log(key + ": " + student.scores[key]);
// }

// •	O‘rtacha ballni hisoblang.
// let res = 0
// let count = 0
// for (const key in student.scores) {
//     res += student.scores[key]
//     count++
// }
// res /= count
// console.log(res);


// •	Eng yuqori baho qaysi fandan?
// let res = 0
// let best = ""
// for (const key in student.scores) {
//     if (student.scores[key] > res) {
//         res = student.scores[key]
//         best = key
//     }
// }
// console.log(`${best} - ${res}`);

// •	Barcha fanlar nomini yangi massivga yig‘ing.

// let arr = []
// for (const key in student.scores) {
//     arr = student.scores
// }
// console.log(arr);

// ✅ 5. Savatdagi mahsulotlar (e-commerce logikasi)

// let cart = [
//     { name: "Laptop", price: 9000000, quantity: 1 },
//     { name: "Mouse", price: 150000, quantity: 2 },
//     { name: "Keyboard", price: 300000, quantity: 1 },
// ];
// •	Har bir mahsulot uchun umumiy narxni (price * quantity) hisoblab chiqaring.
// let res = []
// for (let i = 0; i < cart.length; i++) {
//     let n = cart[i].price * cart[i].quantity
//     res.push(n)
// }
// console.log(res);

// •	Umumiy savat qiymatini chiqaring.
// let res = 0
// for (let i = 0; i < cart.length; i++) {
//     res += cart[i].quantity
// }
// console.log(res);
// •	Har bir mahsulotni quyidagicha chiqaring: "Laptop - 9000000 x 1 = 9000000"
// for (let i = 0; i < cart.length; i++) {
//     console.log(`${cart[i].name} - ${cart[i].price} x ${cart[i].quantity} = ${cart[i].price * cart[i].quantity}`);
// }



// ✅ 6. Random test natijalari

let students = [
    { name: "Aziza", scores: [78, 82, 91] },
    { name: "Farruh", scores: [60, 65, 70] },
    { name: "Sardor", scores: [95, 90, 99] },
];
for (const student of students) {
    let sum = 0;
    for (const score of student.scores) {
        sum += score
    }
    console.log(sum/student.scores.length);

    
}


// •	Har bir o‘quvchining o‘rtacha ballini toping.
// let res = 0
// for (let i = 0; i < students.length; i++) {
//     res += students[i].scores
// } res / students.scores.length

// console.log(res);

 
// •	Eng yuqori umumiy ball olgan o‘quvchini toping.
// •	90 dan yuqori ball olgan o‘quvchilarni ajrating.



















