// 1. ФУнкция которая решает квадратное уравнение.
//
// var a = enterNumber('a'),
//     b = enterNumber('b'),
//     c = enterNumber('c');
// function enterNumber(CoefName) {
//     var t = prompt('Enter coefficient' + ' '+ CoefName);
//     return t;
// }
// function equation(a, b, c) {
//     var D = (b * b - (4 * a * c));
//
//     console.log(D);
//     if (0 > D) {
//         return 'Not roots'
//     } else if (D === 0) {
//         return 'x_1,2 = ' + (-b / (2 * a))
//     } else {
//         var x1 = (-b + Math.sqrt(D)) / 2 * a,
//             x2 = (-b - Math.sqrt(D)) / 2 * a;
//         return 'x_1 = ' + x1 + ';\n' + 'x_2 = ' + x2 + '.';
//
//     }
// }
//
// alert(equation(a, b, c));


// 2.Меньше, больше. Разработать функции для нахождения меньшего, большего из двух чисел.

// var a = enterNumber('first'),
//     b = enterNumber('second');
// function enterNumber(CoefName) {
//     var t = prompt('Enter number ' +  CoefName);
//     return t;
// }
//
// function maxNumber(a,b) {
//     if(a > b){
//         return 'Max number ' + a;
//     } else if(b > a){
//         return 'Max number ' + b;
//     }else {
//         return 'Number are equal';
//     }
//}
// alert(maxNumber(a, b));
//
// function minNumber(a, b) {
//     if(a < b){
//         return 'Min number ' + a;
//     }else if(b < a){
//       return 'Min number '  + b;
//     }
// }
//
// alert(minNumber(a, b));

// 3. Сделайте функцию, которая принимает год, а возвращает високосный это год или нет.
//
// var y = enterYear();
//
// function enterYear() {
//     var y = +prompt('Enter year.');
//     while (isNaN(y) || !isNatural(y)) {
//         y = +prompt('Wrong value. Year must be positive and integer Enter year.');
//     }
//     return y;
// }
//
// function isPositive(y) {
//     return y >= 0;
// }
//
// function isInteger(y) {
//     return y === Math.floor(y);
// }
//
// function isNatural(y) {
//     return isInteger(y) && isPositive(y);
// }
//
// function leapYear(y) {
//     if (y % 4 === 0 && y % 400 === 0  || y % 100 !== 0){
//         return 'Year is leap!';
//     } else {
//         return 'Year isn`t leap!';
//     }
//
// }
//
// alert(leapYear(y));

// 4. // Простое число. Написать функцию, которая проверяет: является ли некоторое число простым? Число называется простым, если оно делится без остатка только на себя и на единицу.

// var a = enterNumber();
//
// function enterNumber(CoefName) {
//     var t = +prompt('Enter number ' + CoefName);
//     while (isNaN(a) || !isNatural(a)) {
//         a = +prompt('Wrong value. Number must be positive and integer Enter number.');
//     }
//     return t;
// }
//
// function isPositive(y) {
//     return y >= 0;
// }
//
// function isInteger(y) {
//     return y === Math.floor(y);
// }
//
// function isNatural(y) {
//     return isInteger(y) && isPositive(y);
// }
//
// function isSimple(a) {
//     var simple = true;
//     var i = a - 1;
//
//     while (i > 2 && simple) {
//         simple = a % i > 0;
//         i--;
//     }
//
//     return simple ? 'Number is simple' : 'Number isn`t simple';
// }
//
// alert(isSimple(a));