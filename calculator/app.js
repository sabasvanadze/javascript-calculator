let num1 = prompt('first number');
let op = prompt('choose operation');
let num2 = prompt('second number');

if (op == '+') {
    console.log(Number(num1) + Number(num2));
}
else if (op == '-') {
    console.log(Number(num1) - Number(num2));
}
else if (op == '*') {
    console.log(Number(num1) * Number(num2));
}
else if (op == '/') {
    console.log(Number(num1) / Number(num2));
}
else if (op = '%') {
    console.log(num1 % num2);
}
else {
    console.log('you put something wrong');
}