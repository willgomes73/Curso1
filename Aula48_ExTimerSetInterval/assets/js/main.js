function retornaHora(segundos) {
    let data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR',{hour12: false,
    timeZone: 'UTC'
    });
    //Esta função recebe um número de segundos, converte-o em uma data
    // (já que o JavaScript trata datas em milissegundos, é necessário
    // multiplicar por 1000), e então retorna uma string representando
    // o tempo no formato ‘HH:MM:SS’. A opção hour12: false garante que
    // o tempo seja exibido em formato de 24 horas, e timeZone: 'UTC' 
    //garante que o tempo seja calculado em relação ao horário UTC, 
    //evitando problemas com fusos horários.
}

const relogio = document.querySelector('.relogio');
//Esta é uma referência ao elemento HTML com a classe ‘relogio’, onde o tempo será exibido.

//const iniciar = document.querySelector('.iniciar');
//const pausar = document.querySelector('.pausar');
//const zerar = document.querySelector('.zerar');

let segundos = 0;
let timer ;
// Estas são variáveis que armazenam o número atual de segundos e
// o ID do intervalo de tempo, respectivamente.

function iniciaRelogio(){
     timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = retornaHora(segundos);
    },1000);
    // Esta função inicia o cronômetro. Ela usa setInterval para
    // incrementar a variável segundos a cada segundo e atualizar
    // o conteúdo do elemento relogio.
}

document.addEventListener('click',function(e){
// esse e.terget mostro o evento clicado 
    const el = e.target;
// se o evento clicado for zerar faça isso
    if(el.classList.contains('zerar')){
        clearInterval(timer);
        relogio.classList.remove('pausado');
        relogio.innerHTML = '00:00:00';
        segundos = 0;
    }

    if(el.classList.contains('pausar')){
        clearInterval(timer);
        relogio.classList.add('pausado');
    }

    if(el.classList.contains('iniciar')){
        relogio.classList.remove('pausado');
        clearInterval(timer);
        iniciaRelogio();
    }
    //O último bloco de código adiciona um ouvinte de eventos ao
    // documento que responde aos cliques. Dependendo da classe 
    //do elemento clicado, ele irá iniciar, pausar ou zerar o cronômetro.
    // A classe do elemento é verificada usando el.classList.contains('nomeDaClasse').
})


/*function pausaRelogio(){
    setTimeout(function(){
        clearInterval(timer);
    },100);
}não preciso de função só o clearInterval*/

/*
iniciar.addEventListener('click', function(event){
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio();
});
pausar.addEventListener('click', function(event){
    clearInterval(timer);
    relogio.classList.add('pausado');
});
zerar.addEventListener('click', function(event){
    clearInterval(timer);
    relogio.classList.remove('pausado');
    relogio.innerHTML = '00:00:00';
    segundos = 0;
});*/