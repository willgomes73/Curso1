const produto = {nome: 'Caneca', preco: 1.8};
//copiar objeto
const outraCoisa = Object.assign({},produto, {material: 'porcelana'});
//retorna as chaves
console.log(Object.keys(outraCoisa));
// congela o objeto nãp podendo alterar
Object.freeze(outraCoisa);
//mostra o prop do objeto
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
//que seria isso
Object.defineProperty(produto, 'nome',{
    writable: false,
    configurable: false,
    value: 'OPa'
});



outraCoisa.nome = 'Outro Nome';
outraCoisa.preco = 2.5;
console.log(produto,outraCoisa);