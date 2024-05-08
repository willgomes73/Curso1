const pessoa = {
    nome: 'Will',
    Sobre: 'Gomes'
};
const chave = 'nome';
console.log(pessoa.nome); //anotação de ponto
console.log(pessoa['nome']);//anotação de conchet
console.log(pessoa[chave]);

const pessoa1 = new Object();
pessoa1.nome = 'Wilson';
pessoa1.sobrenome = 'Ramos';
pessoa1.idade = 22;
//console.log(pessoa1.nome);
//console.log(pessoa1.sobrenome);  
//delete pessoa1.nome;
//console.log(pessoa1); 
pessoa1.falaNome = function() {
return (`${this.nome} está falando seu nome.`)
};

pessoa1.getDatataNascimento = function() {
    //funcion que descobre sua data de nascimento
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};
console.log(pessoa1.getDatataNascimento()); 

for (let chave in pessoa1) {
    console.log(pessoa1[chave]);
}



//Factory function / Constructor fumction
function criaPessoa(nome, sobrenome) {
 return {
    nome,
    sobrenome,
    get nomeCompleto() {
        return `${this.nome} ${this,sobrenome}`;
    }
 };
}

const p1 = criaPessoa('Werder', 'Rosendo');
console.log(p1.nomeCompleto);

//Constructor function
// {cria objeto vazio} <- atrela o  palavra this  ao objeto para criar avontade 
//this vira o objeto
//representa {nome: ' wilder', sobrenome: 'Souza'}
function Pessoas(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    //Object.freeze(this); não pode altera nada nem criar
}
// p2 = (ENDEREÇO MEMORIA) -> VALOR
// p2 = (NOVEENDEREÇO MEMORIA) ERRADO
// p2.ENDEREÇOMEMORIA = NOVO VALOR (CERTO)
const p2 = new Pessoas('Wilder','Souza');
p2.nome = 'Certo';
Object.freeze(p2);//travamos o objeto
const p3 = new Pessoas('Julia','Silva');
console.log(p2);



