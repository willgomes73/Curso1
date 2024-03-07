// Declaração de Função (Function Hoinsting)
//posso chamar a função em qualquer parte semdo antes ou depois da função criada
falaoi();
function falaoi() {
    console.log('Oie');
}

// Frist-Class objetct (objetos de primeira classe)
// Function Expresseion
const souUmDado = function(){console.log('Sou um Dado');};
//eu posso jogar essa minha variavel como paremetro de outra função 
// e fazer essa minha outra função execultar essa função/variavel (:
function execultaFuncao(funcao){
    funcao()
}
execultaFuncao(souUmDado);

// Arrow function
const funcaoArrow = () =>{console.log('Sou uma Arrow Function')};
funcaoArrow();

setInterval(function(e){
//passou uma função na função
})

// Dentro de um objeto
const obt = {
    falar: function() {
        console.log('estou falando');
    }
};
obt.falar();

