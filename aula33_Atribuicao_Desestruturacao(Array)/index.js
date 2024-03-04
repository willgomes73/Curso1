/*let a = 'A';
let b = 'B';
let c = 'C';
atribuição via desistruturação
const letras = [b, c, a];
[a, b, c]    = letras;
console.log(a, b, c)*/

/* ... rest 'pegar alguma coisa', ... spread 'espalhar' 
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const[um, dois, tres, ...resto] = numeros;
console.log(um, dois, tres)
console.log(resto)
//as variaveis um, dois, tres estão recebendo
// os valores dos indices 0, 1, 2 
o ...resto está recebendo os valores que sobraram*/

/*const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const[um, , tres,  ,cinco, ,sete] = numeros;
console.log(um,tres, cinco, sete);*/

  //                   0          1          2
  //                0  1  2    0  1  2    0  1  2
//const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
//console.log(numeros[2][1]);

const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
const [l1, l2, l3] = numeros;
console.log(l3[1]);
