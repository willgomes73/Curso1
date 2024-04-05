// Gunção construrora retorna objetos
//Função gabrica -> objetos
// Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome) {
    // Atrivutos ou métodos privadas
    const ID = 1;
    const metodoInderno = function(){

    };
    // Atrivutos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(`${this.nome}: sou um método ${this.sobrenome}`);
    };    
}
// new cria um novo objeto vazio 
// faz o this apontar para o objeto que está sendo utilizado
// e retorna tiretamento 
const p1 = new Pessoa('Will','Gomes');
const p2 =  new Pessoa('Eduardo','Silva');
p2.metodo();
console.log()