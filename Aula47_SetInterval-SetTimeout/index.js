function retornaHora() {
    let data = new Date();
    return data.toLocaleTimeString('pt-BR',{hour12: false});
}

//console.log(retornaHora());

/*function funcaoInterval() {
    console.log(retornaHora());
}*/

const timer = setInterval(function funcaoInterval() {
    console.log(retornaHora());
},1000);

setTimeout(function(){
    clearInterval(timer);
},3000);
//const tempo = setInterval(function(){
  //  console.log('olá Mundio');
//},5000);
