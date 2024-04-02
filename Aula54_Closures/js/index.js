//Closures são um conceito fundamental em JavaScript que permite que uma função
// lembre-se e acesse as variáveis da função externa, mesmo depois que a função
// externa tenha concluído sua execução. Em termos mais simples, um closure “fecha”
// seu escopo léxico, preservando as variáveis e o escopo da função externa
function retornaFuncao(nome) {
    //const nome = 'Will';
    return function () {
        return nome;
    };
}

const funcao = retornaFuncao('will');
const funcao2 = retornaFuncao('Gomes');
console.log(funcao);
console.log(funcao2);

console.log(funcao(),funcao2());