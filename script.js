'use strict';

var leftBorderWidth = 1; // переменная создана во всём коде
let second = 2; // переменная создана только тогда когда код до неё доходит (код грузится быстрее из-за этого)
const pi = 3.14; // аналогично let
console.log(leftBorderWidth); // вызов в консоле var переменной



var number = 5;
var string = "Hellow!";
var sym = Symbol(); //переменная символ
var boolean = true;
null; //это отдельный тип данных, при проверке typeof будет выводить что это объект
undefined;
var obj ={}; // комплексный тип данных (объект)

console.log(4/0);
console.log('string'*9);

let something;
console.log(something);

let person = { // объект и его значения
    name: "John",
    age: 25,
    isMarried: false
};

console.log(person.name); // вывод в консоль имени из объекта
//console.log(person["name"]); //второй способ вывода в консоль именни из объекта

let arr = ['plum.png', 'orange.jpg', 'apple.bmp']; //массив

console.log(arr[0]); //вывод первого элемента массива


//alert("Hellow world!"); // Вывод окошка в браузере сверху(все скрипты останавливаются пока не нажмём (ОК))


//let answer = confirm("Are you here?"); // Вывод окошка с вопросом пользователя и двумя кнопками ОК и ОТМЕНА

//console.log(answer); // вывод в консоли булиановых значений если ОК то true, если ОТМЕНА то false


//let answer = prompt("Есть ли вам 18?", "Да"); // будем собирать строковые значения от пользователей

//console.log(answer);
//console.log(typeof(answer)); //проверить тип данных вводимых в строчку окна
//console.log(typeof(null)); // выведет что тип данных объект

// console.log("arr" + " - object");
// console.log(4 + " - object"); // если попытаемся сложить строку и число то получится строка

// let answer = +prompt("Есть ли вам 18?", "Да"); // унарный плюс который стоит превращает тип данных из строки в число
// console.log(typeof(answer));


// префикстная форма возвращает уже изменённое значение
let incr = 10,
    decr = 10;
incr++;
decr--;
console.log(incr);
console.log(decr);
// console.log(incr++); // постфиксная форма возвращает значение после
// console.log(decr--); // постфиксная форма возвращает значение после
// = - это присваивание
// == - это проверка на равенство (сравнивает по значениям)
// === - это строгая проверка по типам данных
// % - остаток от деления
// && - оператор И
// || - оператор ИЛИ
// ! - переворачивает значения на обратное исходному

console.log(5%2);
console.log("2" == 2); // true
console.log("2" === 2); // false

let isChecked = true,
    isClose = false;

console.log(isChecked && !isClose);
console.log(isChecked || isClose);
// например если будет стоять ! перед переменной то он делает значени обратным не false а true
