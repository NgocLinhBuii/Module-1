let i = 10;
let f = 20.5;
let c = true;
let s = 'Hà Nội';

document.write('i = ' + i);
document.write('<br>');
document.write('f = ' + f);
document.write('<br>');
document.write('c = ' + c);
document.write('<br>');
document.write('s = ' + s);
document.write('<br>');

let width = 20;
let height = 10;
let area = width * height;
document.write('Area = ' + area);

let a = parseFloat(prompt("a =:"));
let b = parseFloat(prompt("b =:"));

if (a % b === 0) {
    alert(a + " là bội số của " + b);
} else {
    alert(a + " không phải là bội số của " + b);
}
