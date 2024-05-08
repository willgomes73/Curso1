// Map altera o valor e reorna os valoresdo mesmo tamanh do array original

//Drobra os numeros
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => valor * 2);

console.log(numerosEmDobro);


const pessoas = [
    {nome: 'William', idade:21},
    {nome: 'Wilson', idade:51},
    {nome: 'Wilder', idade:17},
    {nome: 'Ana', idade:33},
    {nome: 'Winderson', idade:31},
    {nome: 'Maria', idade:80},
];

/* Retorne apenas uma string com o nome da pessoa
const nomes = pessoas.map(function(Obj) {
    return Obj.nome; troquei valor.nome
});*/
const nomes = pessoas.map(Obj =>Obj.nome);
console.log(nomes);

//remova apenas a chave 'nome' do objeto
const idades = pessoas.map(obj => ({idade: obj.idade}));
console.log(idades);

// Adicione uma chave ID em cada objeto (id)
const comIds = pessoas.map(function(obj,indice) {
    obj.id = (indice + 1);
    return obj;
});
const comIdss = pessoas.map(function(obj,indice) {
    const newobj = {...obj };
    newobj.id = indice;
    return newobj;
});
console.log(comIds,comIdss);