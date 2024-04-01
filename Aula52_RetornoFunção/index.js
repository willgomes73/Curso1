// return retorna função
/* Termina a Função
function soma(a,b){
    return a + b
}

console.log(soma(5+5));

function soma2(a,b){
    console.log(a + b);//não retorna só exibe
}
document.addEventListener('click', function(){
document.body.style.backgroundColor = 'red';
// função que não retorna nada mas execulta um parametro
});

function criaPessoa (nome, sobrenome) {
    return {nome, sobrenome};
}

const p1 = criaPessoa('Will','Gomes');
const p2 = criaPessoa('samlos','Perrira');

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}
const fala = falaFrase('primeiro');
const resto = fala('segundo');
console.log(resto);*/

function criaMultiplicador(multiplicador) {
    //multiplicador
    return function(n) {
        return n * multiplicador;
    };
}
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(5));
console.log(triplica(2));
console.log(quadriplica(10));
