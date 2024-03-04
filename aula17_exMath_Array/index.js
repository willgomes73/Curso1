//Array uma lista
//            01234567891011
const nome = 'William Gomes';
//console.log(nome[0]); para pegar o valor no indice 0 o W 

//               0         1         2
const alunos = ['William','Renato', 'João'];
console.log(alunos)
//console.log(alunos[0]); acessar o valor do indice

/*trocar o valor do indice
alunos[1] = 'Maria';*/

/*adicionar um item no array ao final
alunos[alunos.length] = 'Juana'
console.log(alunos)
alunos.push('Otavio')*/

/*adicionar um item no array ao começo 
alunos.unshift('Bruno'); */

/* deleta um item do array ao final
alunos.pop();*/

/* deleta um item do array ao começo
const removido = alunos.shift()*/

/*
delete alunos[2];
console.log(alunos);*/

console.log(alunos.slice(0, -2));

console.log(alunos)