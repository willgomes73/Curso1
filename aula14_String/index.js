//         01234567
let uma = "Um texto";

console.log(uma.charAt(6)); //retorna o Indice indicado letra t

//concatenação
console.log(uma.concat(' bem longo'));
console.log(uma + ' bem longo');
console.log(`${uma} bem longo`);

//saber onde começa o Indice do texto indicado
console.log(uma.indexOf('texto'));
// voce escolher qual indice vai começar a varredura 
console.log(uma.indexOf('texto',3));
// começa do fival para traz
console.log(uma.lastIndexOf('texto'));
// substitui letras
console.log(uma.replace(/t/,'l'));
console.log(uma.replace(/t/g,'l'));
//saber o tamanho da String
console.log(uma.length);
// fatiar o texto 
console.log(uma.slice(3, 8));
console.log(uma.slice(-3));
console.log(uma.slice(32));

console.log(uma.split('',1));
// deixar a Strinf maiuscola 
console.log(uma.toUpperCase());
console.log(uma.toLowerCase());