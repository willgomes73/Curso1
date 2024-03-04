const pessoa = {
    nome: 'Will',
    sobrenome: 'Gomes',
    idade: 21,
    endereco:{
        rua: 'Av Professor',
        numero:599
    }
};

// Atrinuição via Desestruturação
//const {nome, sobrenome, endereco} = pessoa;
//const {nome: teste, sobrenome} = pessoa;
//console.log(teste, sobrenome); só troquei o nome da variavel
//const {
 //   endereco: {rua: r = 1235, numero},
 ///   endereco
//} = pessoa;
//console.log(r, numero,endereco);

const { nome, ...resto } = pessoa;
console.log(nome,resto);