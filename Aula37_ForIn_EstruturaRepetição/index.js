//  For in => lê od indices ou chaves do objetos
//              0      1        2
//const fruta =['Uva','Banana','Laranja'];
const pessoa = {
    nome: 'Will',
    idade: 21,
    sexo:'m'
}

for (let i in pessoa) {
    console.log(i,pessoa[i]);
}


//for (let i = 0; i < fruta.length; i++) {
//    console.log(fruta[i]);
//}