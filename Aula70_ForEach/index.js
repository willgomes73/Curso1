const a1 = [10,20,30,40,50,60,70,80,90,];
let tot = 0;
a1.forEach(function(valor, indice, array) {
    tot += valor;
});
console.log(tot);