let a = 10;
alert(a);
a = 20;
alert(a);

let firstIphone = 2007;
alert(`Год создания первого iPhone ${firstIphone}`);

let nameOfCreate = "Брендан Эйх";
alert(`Имя создателя языка JavaScript ${nameOfCreate}`);

let ten = 10;
let two = 2;
let sumOfNumbers = ten + two;
let differenceOfNumbers = ten - two;
let productOfNumbers = ten * two;
let quotientOfNumbers = ten / two;

alert(`Сумма чисел 10 и 2 = ${sumOfNumbers}, разность чисел 10 и 2 = ${differenceOfNumbers}, произведение чисел 10 и 2 = ${productOfNumbers}, частное чисел 10 и 2 = ${quotientOfNumbers}.`)

let numbTwo = 2;
let result = numbTwo ** 5;
alert(result);

let variableA = 9;
let variableB = 2;
alert(variableA % variableB);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

let age = Number(prompt("Сколько вам лет?"));
alert(age);

const user = {
    name: "Татьяна",
    age: 27,
    isAdmin: true
};

user["city of residence"] = "Saint Petersburg";
user.age = 28;
delete user["city of residence"];

let info = prompt('Какую информацию хотите узнать о пользователе?')
alert(user[info]);

let yourName = prompt("Введите Ваше имя");
alert(`Привет, ${yourName}`);

