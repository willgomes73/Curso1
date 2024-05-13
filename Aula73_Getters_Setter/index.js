function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    
    let estoquePrivado = estoque; //trabalhar com essa maneira 
    Object.defineProperty(this,'estoque', {
        enumerable: true, // mostra a chave
        configurable:true, // configuravel
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if(typeof valor !== 'number') {
                console.log('Erro insira um numero');
                return;
            }
            estoquePrivado = valor;
        }
    });
}

const p1 = new Produto('Tenis',120,4);
//p1.estoque = 'outro valor';
p1.estoque = 3;
console.log(p1.estoque);



//getter setter uma maneira de proteger minha propriedade
