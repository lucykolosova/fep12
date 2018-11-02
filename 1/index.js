// 1. var prom = prompt('what is your name?');
// alert(prom);
//  var name = prompt('Какое первое название Javascript?');
//
//
//  if(name == "ECMAscript") {
//      alert("Yes!");
//  } else {
//      alert("didn`t you know? It is ECMAscript!");
//  }
//
// 2. var useName = prompt("Кто пришел?");
//
// if (useName == "admin"){
//   var password = prompt("password?");
//   if (password = "black king"){
//         alert("welcome");
//     } else if (password = null){
//         alert("exit");
//     } else {
//         alert("password wrong");
//     }
// } else if (useName == null){
//     alert("exit");
// } else{
//     alert("i don`t know you!");
// }
var a,
    b,
    c,
    mode,
    compareAB,
    compareABC;

a = +prompt('Enter first number.');
while (isNaN(a)){
    a = +prompt('Wrong value! Enter first number.')
}
b = +prompt('Enter second number.');
while (isNaN(b)){
    b = +prompt('Wrong value! Enter second number.')
}
c = +prompt('Enter third number.');
while (isNaN(c)){
    c = +prompt('Wrong value! Enter third number.')
}


mode = prompt("Enter: 'min' or 'max'?");
while (mode !== "max" && mode !== "min"){
    mode = prompt("Wrong value! Please, enter: 'min' or 'max'? ");
}
if (mode === "max"){
    compareAB = a > b ? a : b;
    compareABC = compareAB > c ? compareAB : c;
    alert(compareABC);

} else {
    compareAB = a < b? a : b;
    compareABC = compareAB < c ? compareAB : c;
    alert(compareABC);
}

var num = +prompt("Enter number 1-7");

if (isNumber(num) && num >= 1 && num <= 7){
    alert('Number');
}

switch (num){

    case 1:
        alert('Monday');
        break;

    case 2:
        alert('Tuesday');
        break;

    case 3:
        alert('Wednesday');
        break;

    case 4:
        alert('Tuesday');
        break;

    case 5:
        alert('Friday');
        break;

    case 6:
        alert('Saturday');
        break;

    case 7:
        alert('Sunday');
        break;
    default: alert('wrong');
}
