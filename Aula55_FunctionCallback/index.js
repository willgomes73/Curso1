function rand(min = 1000, max = 3000) {
    const num = Math.random() + (max - min) + min ;
    return Math.floor(num);
}

function f1(callback) {
    setTimeout(function(){
        console.log('f1');
        if (callback) callback();
    }, rand());
 }
 function f2(callback) {
    setTimeout(function(){
        console.log('f2');
        if (callback) callback();
    }, rand());
 }
 function f3(callback) {
    setTimeout(function(){
        console.log('f3');
        if (callback) callback();
    }, rand());
 }


/*f1(function(){
    f2(function(){
        f3(function(){
            console.log('Olá Mundo!');
        })
    });
});*/

f1(f1callback);
function f1callback() {
    f2(f2callback);
}
function f2callback() {
    f3(f3callback);
}
function f3callback() {
    console.log('Olá Mundo!');
}
/*Uma função de callback é aquela que é passada como
 parâmetro para outra função e é chamada dentro dessa função externa.
O JavaScript executa o código sequencialmente, mas há situações em que
 queremos que algo aconteça após uma tarefa ser concluída, de forma assíncrona.
As callbacks garantem que uma função não seja executada antes que uma tarefa seja 
concluída, mas logo após essa tarefa.*/