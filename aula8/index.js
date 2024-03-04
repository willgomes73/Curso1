const nome = 'William Gomes';
const sobreNome = 'Souza';
const idade = 21;
const peso = 65 ;
const altura = 1.73;
let imc;
let anoNascimento;

imc = peso/ (altura * altura);
anoNascimento = 2023 - idade;  

console.log(nome,sobreNome,'tem',idade,'anos, pesa',peso,'Kg ')
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`)//legivel
console.log(nome+' nasceu em '+anoNascimento+'.')