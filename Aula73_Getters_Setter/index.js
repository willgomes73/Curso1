//getter obter o valor
//setter setar o valor
//          Function Constructor
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    
    let estoquePrivado = estoque; //trabalhar com essa maneira 
    Object.defineProperty(this,'estoque', {
        enumerable: true, // mostra a chave
        configurable:true, // configuravel
        get: function() {
            // estoquePrivado é o estoque da função Produto
            return estoquePrivado;
        },
        set: function(valor) {
            if(typeof valor !== 'number') {
                throw new TypeError('Erro foi inserido uma String no lugar de um Number');
                //
            }
            estoquePrivado = valor;
        }
    });
}

const p1 = new Produto('Tenis',120,4);
//p1.estoque = 'outro valor';
p1.estoque = 'isso aii 32';
console.log(p1.estoque);

/*          Function Factor
function criaProduto(nome) {
    return {
        get nome(){
            return nome;
        },
        set nome(valor) {
            //subistituir um valor
            valor = valor.replace('Opa','');
            nome = valor;
        }
    }
}

const p2 = criaProduto('Calça');
p2.nome = 'Opa mn';
console.log(p2.nome);*/


//getter setter uma maneira de proteger minha propriedade
