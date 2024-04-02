//IIFE Immediately invoked function expression
(function(idade,peso,altura){
    const sobrenome =    'Will';
    function criaNome(nome) {
        return nome + ' '+ sobrenome;

    }

    function falaNome() {
        console.log(criaNome('William'));

    }
    falaNome();
    console.log(idade, peso, altura);
})(21,65,1.73);

(function(){

})();