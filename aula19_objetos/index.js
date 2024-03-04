/*const array = [1, 2, 3];
array.push(4);
array[0] = 'will';
//array = 'outra'; eu posso mudar os elementos do array mais não 
//posso reatribuir o valor do array dessa forma. utilizando o let eu posso 
console.log(array); */

// para criar um objeto usamos as chaves {}
/*
const pessoa1 = {
    nome: 'Will',
    sobrenome: 'Gomes',
    idade: 21
};

console.log(pessoa1.idade);*/
/*                    isso chama parametro
function criaPessoa (nome, sobrenome, idade){
    return{
        // posso deixar nome, sobrenome, idade o java vai entender que é para aplicar 
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}//                        isso chama argumento 
const pessoa1 = criaPessoa('Will', 'Gomes,', 21);
const pessoa2 = criaPessoa('Bill', 'Gomes,', 24);
const pessoa3 = criaPessoa('Fill', 'Gomes,', 67);
const pessoa4 = criaPessoa('Gill', 'Gomes,', 18);*/

const pessoa1 = {
    nome: 'Will',
    sobrenome: "Gomes",
    idade: 21,

//   função dentro de um objeto
    fala(){//         esse this refere-se ao objeto peosoa1 nesse contesto 
        console.log(`A minha idade atual é ${this.idade}`)
    },

    incrementaIdade(){
        this.idade++;
    }
}
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
