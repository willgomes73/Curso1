//Negativo        -5        -4      -3       -2       -1
//Positivo         0         1       2        3        4    
const nomes = ['William', 'João', 'Pedro', 'Lucas', 'Bruno'];

// nomes.splice(indice, delete elemento, add elemento)
//pop 
const removes = nomes.splice(1,1);//remove João
//A pós deletado um elemento ele pode reornar esse rlrmrnto em forma de array
const remoNegativ = nomes.splice(-1,1);
//Adiciona elemento
const addElement = nomes.splice(2,0,'Vagner');//coloca-se o 0 para não deletar mais sim só adicionar
//Shift remove o pimeiro elemento
const shiftt = nomes.splice(0,1);
//push add um elemento no final
const spush = nomes.splice(nomes.length,0,'Gabriel');
//anshift
const anshift = nomes.splice(0,0,'Fernanda');
console.log(nomes,removes, remoNegativ, shiftt, spush, anshift);

