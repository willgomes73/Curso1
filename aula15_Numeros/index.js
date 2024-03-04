let num1 = 0.7;
let num2 = 0.1;

//console.log(num1.toString(2)); representação binaria
//console.log(num1.toFixed(2)); arredondar os numeros 
//console.log(Number.isInteger(num1)); retorna se o numero é inteiro ou não
//console.log(Number.isNaN(temp));
num1 = ((num1 *100) + (num2 * 100)) / 100; // 0.8
num1 = ((num1 *100) + (num2 * 100)) / 100; // 0.9
num1 = ((num1 *100) + (num2 * 100)) / 100; // 1.0
num1 = ((num1 *100) + (num2 * 100)) / 100; // 1.1

/*
num1 += num2; // 0.8
num1 += num2; // 0.9

num1 = parseFloat(num1.toFixed(2));

*/
console.log(num1);
console.log(Number.isInteger(num1));

