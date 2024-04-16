/*const nomes = new Array('William', 'Bruno', 'Lucas');
// Valor por Referencia
//                 0         1        2      3       4     =  5
const nomes = ['William', 'Bruno', 'Lucas','Ruan','Gabriel'];
// String, Objetos, Function, Numeros
//const novo = nomes;
//const novo = [...nomes];// Cópia de nomes para dentro de novo

//console.log(nomes);
//console.log(nomes.length);//tamanho do array (atributo sem ))
const removido = nomes.pop();//apaga o utimo elemento do array 
//console.log(nomes, removido);// salvou o nome removido e passou depois do array
nomes.shift();//apaga o primeiro elemento do array e passa os outros para o começo
nomes.push('Pedro');//adiciona um elemeno ao filnal do array
nomes.unshift('Luigui');//adiciona um elemeno no começo do array

//const novo = nomes.slice(1,3);//passar a seguncia daos indices indicado dois 1 eo 2
const novo = nomes.slice(0,-1)//só o Gabriel que não aparece
console.log(novo);*/

//  trasformar Strinf num Array
//const nome = 'William Gomes de Souza'; 
//const nomes = nome.split(' ');

//  trasformar Array num Strinf
const nome = ['William', 'Gomes', 'de' ,'Souza']; 
const nomes = nome.join(' ');
console.log(nomes);
