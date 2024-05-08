//Drobra os numeros
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// Some todos os numeros (reduce)
const total = numeros.reduce(function(acumulador, valor,indice, array) {
    //acumulador devera receber um valor no final da função 0 exemplo
    //precisara ser retornado retunr acumulador
    acumulador += valor;// ele vai somar jogando os valores para o acumulador
    //console.log(acumulador,valor);
    return acumulador;
}, 0);
console.log(total);

//Retorne um Array om os pares (filter) não faça hahaa
const pares = numeros.reduce(function(acumulador, valor,indice, array) {
if(valor % 2 === 0) acumulador.push(valor);
//if(valor % 2 !== 0) acumulador.push(valor); impar
    return acumulador;
}, []);
console.log(pares);

//Retorne um Array com dobro dos valores (Map)
const dobro = numeros.reduce(function(acumulador, valor,indice, array) {
    acumulador.push(valor * 2);
    return acumulador;
    }, []);
    console.log(dobro);

//Retorne a Pessoa mais velha
const pessoas = [
    {nome: 'William', idade:21},
    {nome: 'Wilson', idade:51}, 
    {nome: 'Wilder', idade:17},
    {nome: 'Ana', idade:33},
    {nome: 'Winderson', idade:31},
    {nome: 'Maria', idade:80},
];

const velha = pessoas.reduce(function(acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
    //william é i meu acumuldor porque eu não passei um valor inicial para ele
    // o wilson e o valor se  o acumulador(william) for maior que o valor(wilson)
    // retorna william se não vai ser o valor(wilson)
    //ele vai passar por todo o array checando a condição
});
console.log(velha);