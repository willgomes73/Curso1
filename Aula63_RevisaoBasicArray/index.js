//const nomes = new Array('William', 'Bruno', 'Lucas');
// Valor por Referencia
//                 0         1         2   =  3
const nomes = ['William', 'Bruno', 'Lucas'];
// String, Objetos, Function, Numeros
//const novo = nomes;
const novo = [...nomes];// Cópia de nomes para dentro de novo

console.log(nomes);
console.log(novo);
console.log(nomes.length);//tamanho do array (atributo sem ))
const removido = nomes.pop();//apaga o utimo elemento do array 
console.log(nomes, removido);// salvou o nome removido e passou depois do array
const removido1 = nomes.shift();//apaga o primeiro elemento do array e passa os outros para o começo
nomes[1] = removido;
console.log(nomes, removido1);