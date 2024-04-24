// Filter, map 'modificar', reduce 'reduzir em um unico valor'

//retorne os numeros maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
/*function callbackFilter(valor, indice, array) {//array completo
    if(valor > 10) {return true;} 
    else{return false;}
    return valor > 10;
}
//const filtrados = numeros.filter(callbackFilter);*/
const filtrados = numeros.filter(valor => valor > 10);//uma linha ou retorn
console.log(filtrados);

//retorne as pessoas que tem o nome com 5 letras ou mais
const pessoaComNomeGrand = pessoas.filter(function(valor) {
    
})

//retorne as pessoa com mais de 50 anos

//retorne as pessoas cujo nome termina com a

const pessoas = [
    {nome: 'William', idade:21},
    {nome: 'Wilson', idade:29},
    {nome: 'Wilder', idade:17},
    {nome: 'Woshotom', idade:33},
    {nome: 'Winderson', idade:31},
    {nome: 'Weder', idade:40},
];
