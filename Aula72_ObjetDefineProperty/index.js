//DefineProperty - DefineProperties farias

function Produto(nome, preco, estoque) {
    //this.nome = nome;
    //this.preco = preco;

    Object.defineProperty(this,'estoque', {
        enumerable: true, // mostra a chave
        value: estoque,   //  valor
        writable: true,   // pode altera alterar
        configurable:true // configuravel
    });

    Object.defineProperties(this,{
        nome: {
            enumerable: true, // mostra a chave
            value: nome,   //  valor
            writable: true,   // pode altera alterar
            configurable:true // configuravel
        },
        preco: {
            enumerable: true, // mostra a chave
            value: preco,   //  valor
            writable: true,   // pode altera alterar
            configurable:true // configuravel}
        }
    });
}

const p1 = new Produto()
p1.estoque = 4526;
delete p1.estoque;
console.log(p1);

console.log(p1);
for(let chave in p1) {
    //depende do valor ser verdadeiro
    console.log(chave);
}





















