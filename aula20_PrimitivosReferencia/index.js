/*
Primitivos (imutaveis) - String, number, boolean, undefined
null (bigint, symbol) - valor dado imutavel - valores copiados 

Referencia (mutavel) Array, objct, function - passados por referencia
*/
//let nome = 'Will';
//nome[0] = 'S';
//console.log(nome[0], nome);
// não consigo mudar pois é imutavel

/*
let a = 'A';
let b = a;//cópia só que os valores não seram afetados 
console.log(a,b);

a ='otra coisa'
console.log(a,b);*/

//referencia
/*let c = [ 1,2,3];
//let d = a;// cópia só que os valores serão afetados aponto para o mesmo valor
let d = [...c];
let e = d;

console.log(c,d);

c.push(4);
console.log(c,d);

d.pop();
console.log(c,d);

c.push('Will');
console.log(c,e);*/

const a = {
    nome: 'Will',
    sobre:'Gomes'
};
const b = {...a} //a usa sem as chave para veincular os valores;

a.nome = 'Flala';
console.log(a)
console.log(b)