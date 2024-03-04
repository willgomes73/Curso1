//For Class - Geralmento com iteraveis (array ou string)
//For in - Retorna o indice ou chave (string, array ou objetos)
//For of = Retorna o valor em si (interaveis, array ou string)

const nome = ['William Gomes', 'Kauna Sanos',
 'Bruno Françoso', 'Lucas Moura'];

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}
// serve para objetos
console.log('__________________');
for (let i in nome) {
    console.log(nome[i]);
}
console.log('__________________');
for (let i of nome) {
    console.log(i);
}

console.log('__________________');
//posso aplicar o valor o indice eo array no forEsch
nome.forEach(function(/*valor, */indice/*, array*/) {
    console.log(/*valor, */indice/*, array*/)
});